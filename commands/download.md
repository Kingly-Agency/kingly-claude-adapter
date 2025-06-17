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
   1. Quick Summary - Get transcript + AI summary (what we just did)
   2. Full Analysis - Transcript + detailed breakdown + key quotes
   3. Research Mode - Summary + related topic research via Perplexity
   4. Learning Path - Extract key concepts + suggest follow-up resources
   
   🌐 **Web Articles/Docs:**
   1. Speed Read - Main points extraction using Firecrawl
   2. Deep Dive - Full content + context analysis
   3. Compare Mode - Scrape + research competing viewpoints
   4. Archive Mode - Save to knowledge base with metadata
   
   📄 **Technical Content:**
   1. Implementation Guide - Extract actionable steps
   2. Code Examples - Pull out code blocks + explanations  
   3. Reference Mode - Create quick lookup summary
   4. Tutorial Mode - Step-by-step learning breakdown
   ```

3. **Execution Flow**
   - **Auto-route based on URL pattern detection**
   - **YouTube (.youtube.com, youtu.be)** → Fetch transcript + summarize
   - **Documentation sites** → Structured scrape + key points
   - **Articles** → Speed read extraction + main points
   - **Unknown** → Present full option menu

4. **Smart Follow-ups**
   ```
   ⚡ **After Content Processing:**
   • "research this" - Deep dive with Perplexity on key topics
   • "save summary" - Archive to ~/t with metadata
   • "related content" - Find similar resources
   • "action items" - Extract next steps/todos
   • "checkpoint" - Save progress + continue later
   ```

## Auto-Detection Logic:
```
YouTube → cd ~/digital/homie && python yt/yt.py URL --transcript + Perplexity summary
Articles → mcp__mcp-server-firecrawl__firecrawl_scrape + analysis  
Docs → mcp__mcp-server-firecrawl__firecrawl_scrape + structured extraction
PDF → mcp__fetch-mcp__fetch_url + content analysis
```

## Smart Prompting:
- Extract key concepts for enhanced research
- Auto-tag content type for future reference
- Connect to existing knowledge via lev system
- Generate contextual follow-up options

---
*Flow-based content consumption that adapts to URL type and user intent*