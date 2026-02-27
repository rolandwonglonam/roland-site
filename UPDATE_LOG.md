# 个人网站更新记录

## 2026-02-24

### 完成的工作

1. **内容中文化**
   - 将所有页面内容抽离到 `src/content/pages/` 下的 Markdown 文件
   - 中文版本：home.md, about.md, research.md, services.md, contact.md

2. **添加个人照片**
   - 照片路径：`public/profile.jpg`
   - 首页 Hero 区域已配置

3. **部署上线**
   - 手动构建部署到 `rolandwayne` 项目
   - 网址：`www.rolandwayne.com`

### 当前状态

| 项目 | 域名 | GitHub 连接 | 状态 |
|------|------|------------|------|
| roland-site | roland-site.pages.dev | ✅ 连接到 rolandwonglonam/roland-site | 自动部署 |
| rolandwayne | www.rolandwayne.com | ❌ 手动部署 | 待配置 |

### 未来工作

- [ ] 将 `rolandwayne.com` 自定义域迁移到 `roland-site` 项目
- [ ] 配置 GitHub 自动部署
- [ ] 删除闲置的 `rolandwayne` 项目

---

## 更新内容流程

### 方式一：手动部署（当前）

```bash
cd "/Users/rolandwong/Documents/Obsidian Vault/AI_Roland/02-商业/个人网站"
npm run build && npx wrangler pages deploy dist --project-name rolandwayne
```

### 方式二：GitHub 自动部署（推荐）

1. Cloudflare Dashboard → roland-site → 设置 → 自定义域
2. 添加 `rolandwayne.com` 和 `www.rolandwayne.com`
3. 删除 `rolandwayne` 项目

之后流程：
```bash
# 改完 Markdown 后
git add -A && git commit -m "content: 更新xxx" && git push
# 自动部署
```

### 内容文件位置

| 页面 | 内容文件 |
|------|---------|
| 首页 | `src/content/pages/home.md` |
| 关于 | `src/content/pages/about.md` |
| 研究 | `src/content/pages/research.md` |
| 服务 | `src/content/pages/services.md` |
| 联系 | `src/content/pages/contact.md` |
