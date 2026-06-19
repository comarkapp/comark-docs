# Repository Guidelines

## 项目结构与模块组织

这个仓库是 Copicseal 的 VitePress 文档站与官网内容仓库。

- 仓库根目录下的 `*.md` 文件就是页面，例如 `index.md`、`download.md`、`sponsor.md`。
- `.vitepress/config.mts` 负责站点导航、侧边栏、SEO 元信息和主题配置。
- `.vitepress/theme/` 用于放置主题覆写文件，例如 `custom.scss`。
- `public/` 存放页面引用的静态资源，例如 logo、截图和模板示例图片。

新增页面时，直接放在仓库根目录；如果需要在站点中展示入口，记得同步更新 `.vitepress/config.mts`。

## 构建、测试与开发命令

- `pnpm install`：安装项目依赖。
- `pnpm docs:dev`：启动本地 VitePress 开发服务器。
- `pnpm docs:build`：构建生产版本站点，输出到 `.vitepress/dist`。
- `pnpm docs:preview`：本地预览构建结果。

提交 PR 前建议至少执行一次 `pnpm docs:build`，用于发现链接错误、frontmatter 问题或配置异常。

## 代码风格与命名约定

Markdown 内容保持简洁直接，标题层级清晰，文案语气尽量与现有中文页面一致。

- 配置对象和 frontmatter 使用 2 空格缩进。
- 多单词页面文件名使用小写 kebab-case，例如 `template-examples.md`。
- 静态资源命名尽量语义化且保持稳定，例如 `public/screenshot01.webp`。

仓库当前没有单独的格式化工具，修改时请与周边文件风格保持一致。

## 测试指南

当前仓库没有自动化测试框架，主要依赖构建检查和手动验收。

- 必跑 `pnpm docs:build`。
- 通过 `pnpm docs:dev` 抽查改动页面显示是否正常。
- 内容更新后确认导航链接、图片资源和外部链接可正常访问。

## 提交与 Pull Request 规范

提交信息统一使用类型前缀开头，格式建议为 `type: 简短说明`。一次提交尽量只做一件事，说明保持简洁明确。

常用类型示例：

- `feat: 新增赞助页面`
- `fix: 修正下载链接`
- `chore: 更新站点统计脚本`

推荐优先使用以下前缀：

- `feat:` 新功能、新页面、新入口
- `fix:` Bug 修复、链接修正、内容纠错
- `chore:` 配置调整、依赖更新、杂项维护

提交 PR 时请注意：

- 清楚说明用户可感知的改动内容。
- 有关联 issue 时附上链接。
- 页面布局或视觉内容有变化时附截图。
- 如有后续事项或已知限制，在描述中明确说明。
