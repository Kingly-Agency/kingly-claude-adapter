# /download - Intelligent Content Consumption Dashboard

## MISSION: Smart URL Content Extraction & Analysis System

When user says "/download" or "/download [URL]":

1. **URL Context Detection**
   - If no URL provided: "Please paste the URL you'd like to analyze"
   - Auto-detect content type (YouTube, article, documentation, etc.)
   - Extract domain and content hints from URL structure

2. **Content Type Intelligence Router**
   ```
   🎯 CONTENT CONSUMPTION DASHBOARD
   
   **Detected:** [YouTube Video | Web Article | Documentation | PDF | etc.]
   **URL:** $ARGUMENTS
   
   **Smart Options:**
   
   📺 **YouTube Videos:**
   A. Quick Summary - Get transcript + AI summary (what we just did)
   B. Full Analysis - Transcript + detailed breakdown + key quotes
   C. Research Mode - Summary + related topic research via Perplexity
   D. Learning Path - Extract key concepts + suggest follow-up resources
   
   🌐 **Web Articles/Docs:**
   A. Speed Read - Main points extraction using Firecrawl
   B. Deep Dive - Full content + context analysis
   C. Compare Mode - Scrape + research competing viewpoints
   D. Archive Mode - Save to knowledge base with metadata
   
   📄 **Technical Content:**
   A. Implementation Guide - Extract actionable steps
   B. Code Examples - Pull out code blocks + explanations  
   C. Reference Mode - Create quick lookup summary
   D. Tutorial Mode - Step-by-step learning breakdown
   ```

3. **Execution Flow**
   - **Auto-route based on URL pattern detection**
   - **YouTube (.youtube.com, youtu.be)** → Extract transcript + Claude analysis + auto-organize
   - **Documentation sites** → Try cb scraper, fallback to Firecrawl + organize
   - **Articles** → Try cb scraper, fallback to Firecrawl + organize
   - **Unknown** → Present full option menu

4. **Auto-Organization Logic**
   - **Save to**: `~/digital/_media/[topic-category]/`
   - **Create folders** if topic doesn't exist
   - **Claude categorizes** based on content analysis
   - **Check workspace relevance** and offer session integration

5. **Smart Follow-ups (Context-Aware)**
   ```
   ⚡ **After Content Processing:**
   • "use this" - Apply content to current workspace/session
   • "save to workspace" - Add to current project if relevant
   • "research deeper" - Find related content on this topic
   • "action items" - Extract next steps/todos from content
   • "find similar" - Discover related content in your _media library
   • "checkpoint" - Save progress + continue session
   ```

## Auto-Detection Logic:
```
YouTube → Primary: cd ~/digital/homie && python yt/yt.py -t "URL" --wait -o /tmp/yt_download_${VIDEO_ID}_transcript.txt
         Fallback: mcp__fetch-mcp__fetch_youtube_transcript
         Then: 1) Read /tmp/yt_download_${VIDEO_ID}_transcript.txt
               2) Claude analyzes content to determine category
               3) Move to ~/digital/_media/[category]/[semantic-title]_${VIDEO_ID}.txt
         Note: Save to temp with video ID, then categorize based on actual content

Articles → Primary: cd ~/cb && python scraping_orchestrator.py URL  
          Fallback: mcp__mcp-server-firecrawl__firecrawl_scrape
          Then: Claude analysis + organize to _media

Docs → Primary: cd ~/cb && python scraping_orchestrator.py URL
       Fallback: mcp__mcp-server-firecrawl__firecrawl_scrape  
       Then: structured extraction + organize

PDF → mcp__fetch-mcp__fetch_url + content analysis + organize
```

## Smart Prompting:
- Extract key concepts for enhanced research
- Auto-tag content type for future reference
- Connect to existing knowledge via lev system
- Generate contextual follow-up options

## Implementation Pattern:
```
1. Detect URL type (YouTube, article, docs, etc.)
2. Try PRIMARY tool with timeout/error handling
3. If PRIMARY fails → automatically try FALLBACK tool
4. Process content through Perplexity for summarization
5. Present smart follow-up options based on content type
6. Log which tool succeeded for future optimization
```

## Error Handling:
- **Local tool timeout** → Immediate MCP fallback
- **Local tool error** → Log issue + MCP fallback  
- **MCP tool failure** → Present manual options
- **All tools fail** → Graceful degradation with helpful message

---
*Flow-based content consumption that adapts to URL type and user intent with robust fallback logic*