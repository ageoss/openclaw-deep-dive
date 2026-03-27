import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: 'OpenClaw Deep Dive',
  description: 'OpenClaw 技术深度解析文档',
  base: '/openclaw-deep-dive/',
 
  
  mermaid: {
    theme: 'default'
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '总览', link: '/p1-overview/foreword' },
      { text: '核心引擎', link: '/p2-core/agent' },
      { text: '交互层', link: '/p3-interaction/02-渠道层' },
      { text: '基础设施', link: '/p4-infra/38-Infra基础设施层' },
      { text: '工程实践', link: '/p5-practice/17-配置系统' },
      { text: '高级专题', link: '/p6-advanced/canvas' },
      { text: 'Pi-Mono', link: '/p7-pi-mono/' },
      { text: 'GitHub', link: 'https://github.com/ageoss/openclaw-deep-dive' }
    ],
    sidebar: [
      {
        text: 'P1: 总览篇',
        collapsed: false,
        items: [
          { text: '前言', link: '/p1-overview/foreword' },
          { text: '架构认知', link: '/p1-overview/architecture' }
        ]
      },
      {
        text: 'P2: 核心引擎篇',
        collapsed: true,
        items: [
          { text: 'Agent核心', link: '/p2-core/agent' },
          { text: 'Memory记忆系统', link: '/p2-core/memory' },
          { text: 'Tool分类', link: '/p2-core/tools-classification' },
          { text: 'Tool客户端', link: '/p2-core/tools-client' },
          { text: 'Tool实现', link: '/p2-core/tools-implementation' },
          { text: 'Tool概览', link: '/p2-core/tools-overview' },
          { text: '自动回复引擎', link: '/p2-core/19-自动回复引擎' },
          { text: 'Context Engine', link: '/p2-core/25-Context-Engine上下文引擎' },
          { text: 'Providers集成', link: '/p2-core/27-Providers提供商集成' },
          { text: 'Link Understanding', link: '/p2-core/35-Link-Understanding链接理解' }
        ]
      },
      {
        text: 'P3: 交互层篇',
        collapsed: true,
        items: [
          { text: '渠道层', link: '/p3-interaction/02-渠道层' },
          { text: '媒体管道', link: '/p3-interaction/03-媒体管道' },
          { text: '平台特定实现', link: '/p3-interaction/21-平台特定实现' },
          { text: '移动端实现', link: '/p3-interaction/24-移动端实现' },
          { text: 'TTS文字转语音', link: '/p3-interaction/34-TTS文字转语音' },
          { text: 'LINE通道', link: '/p3-interaction/42-LINE通道' },
          { text: 'iMessage通道', link: '/p3-interaction/43-iMessage通道' }
        ]
      },
      {
        text: 'P4: 基础设施篇',
        collapsed: true,
        items: [
          { text: 'Gateway核心架构', link: '/p4-infra/11-Gateway核心架构' },
          { text: 'Node-Host子系统', link: '/p4-infra/06-Node-Host子系统' },
          { text: 'Cron调度引擎', link: '/p4-infra/12-Cron调度引擎' },
          { text: 'Plugin SDK', link: '/p4-infra/14-Plugin SDK (插件开发框架)' },
          { text: 'CLI入口系统', link: '/p4-infra/18-CLI入口系统' },
          { text: '路由系统', link: '/p4-infra/20-路由系统' },
          { text: 'Pairing配对系统', link: '/p4-infra/26-Pairing配对系统' },
          { text: 'TUI终端界面', link: '/p4-infra/28-TUI终端界面系统' },
          { text: 'Wizard向导系统', link: '/p4-infra/31-Wizard向导系统' },
          { text: 'Markdown渲染', link: '/p4-infra/32-Markdown渲染系统' },
          { text: 'Sessions会话管理', link: '/p4-infra/33-Sessions会话管理' },
          { text: 'Commands命令系统', link: '/p4-infra/36-Commands命令系统' },
          { text: 'Plugins插件运行时', link: '/p4-infra/37-Plugins插件运行时' },
          { text: 'Infra基础设施层', link: '/p4-infra/38-Infra基础设施层' },
          { text: 'Shared共享模块', link: '/p4-infra/40-Shared共享模块' },
          { text: 'Terminal终端模块', link: '/p4-infra/41-Terminal终端模块' }
        ]
      },
      {
        text: 'P5: 工程实践篇',
        collapsed: true,
        items: [
          { text: 'Security安全策略', link: '/p5-practice/15-Security 安全策略' },
          { text: 'Hooks集成机制', link: '/p5-practice/16-Hooks 集成机制' },
          { text: '配置系统', link: '/p5-practice/17-配置系统' },
          { text: '密钥管理', link: '/p5-practice/22-密钥管理' },
          { text: '日志系统', link: '/p5-practice/23-日志系统' },
          { text: 'Process Supervisor', link: '/p5-practice/30-Process-Supervisor进程监控' },
          { text: 'Daemon守护进程', link: '/p5-practice/daemon' },
          { text: 'Testing测试', link: '/p5-practice/testing' }
        ]
      },
      {
        text: 'P6: 高级专题篇',
        collapsed: true,
        items: [
          { text: '浏览器自动化', link: '/p6-advanced/05-浏览器自动化' },
          { text: 'Canvas Host', link: '/p6-advanced/canvas' },
          { text: 'ACP控制平面', link: '/p6-advanced/acp' }
        ]
      },
      {
        text: 'P7: Pi-Mono 深度洞察',
        collapsed: true,
        items: [
          { text: '概述', link: '/p7-pi-mono/' },
          { text: 'pi-ai: 统一 LLM API', link: '/p7-pi-mono/01-pi-ai' },
          { text: 'pi-agent-core: Agent 运行时', link: '/p7-pi-mono/02-pi-agent-core' },
          { text: 'pi-coding-agent: 编程工具', link: '/p7-pi-mono/03-pi-coding-agent' },
          { text: 'pi-tui: 终端 UI 库', link: '/p7-pi-mono/04-pi-tui' },
          { text: 'pi-web-ui: Web 聊天组件', link: '/p7-pi-mono/05-pi-web-ui' },
          { text: 'pi-mom: Slack Bot', link: '/p7-pi-mono/06-pi-mom' },
          { text: 'pi-pods: GPU Pod 管理', link: '/p7-pi-mono/07-pi-pods' }
        ]
      }
    ]
  }
})
