# 全端架構文件：社群媒體自動化 SaaS
*版本: 1.0*
*日期: 2025-08-13*

### 1. 介紹
* **入門模板**：本專案將採用 **`create-t3-turbo`** 入門模板進行開發，以加速環境設定並遵循業界最佳實踐。

### 2. 高層次架構
* **技術摘要**：本專案將採用基於 T3 Stack 的全端 TypeScript Monorepo 架構。前端使用 Next.js，後端利用 Next.js API Routes 與 n8n，部署於 Google Cloud，資料庫為 PostgreSQL。此架構旨在實現快速開發、類型安全與無縫擴展。
* **平台與基礎設施**：
    * **平台**：Google Cloud
    * **關鍵服務**：Cloud Run, Cloud SQL for PostgreSQL, Cloud Tasks/Eventarc
    * **部署區域**：`asia-east1` (台灣)
* **架構圖**：
    ```mermaid
    graph TD
        User[👤 使用者] -- HTTPS --> WebApp[🌐 Next.js 全端應用 @ Cloud Run]
        WebApp -- 登入請求 --> GoogleAuth[🌎 Google 登入]
        WebApp -- 資料庫讀寫 (via Prisma) --> DB[(💽 PostgreSQL @ Cloud SQL)]
        WebApp -- 觸發抓取 --> CloudTask[🔄 Cloud Tasks]
        CloudTask -- 執行任務 --> N8N[⚙️ n8n 工作流]
        N8N -- 寫入結果 --> DB
    ```
* **架構模式**：全端類型安全 (tRPC)、資料庫 ORM (Prisma)、環境變數管理 (Zod)。

### 3. 技術棧
*(節錄，反映最終決策)*
| 類別 | 技術 | 用途 |
| :--- | :--- | :--- |
| 前端框架 | Next.js | 全端應用程式框架 |
| API 風格 | tRPC | 前後端通訊協定 |
| 資料庫 | PostgreSQL | 主要關聯式資料庫 |
| 資料庫 ORM | Prisma | 資料庫操作 |
| 身份驗證 | NextAuth.js | 使用者驗證 |
| **基礎設施** | **本地伺服器 (On-Premise)** | **MVP 階段的託管** |
| **監控與日誌** | **Grafana + InfluxDB + Loki** | **地端部署的監控** |

### 4. 資料模型
*(為求簡潔，此處僅列出模型名稱)*
* User (使用者)
* Project (專案)
* Video (影片資料)
* Tag (標籤)

### 5. API 規格 (tRPC)
*(為求簡潔，此處省略已確認的 tRPC Router 結構定義)*

### 6. 元件
* Web UI (前端 Web 應用)
* Backend API Layer (後端 API 層)
* Data Ingestion Engine (資料擷取引擎)
* Database (資料庫)

### 7. 外部 API
* Google OAuth 2.0 API
* n8n Webhook API
* YouTube Data API v3

### 8. 核心工作流程
*(核心流程為「使用者觸發資料抓取」，詳見先前已確認的序列圖)*

### 9. 資料庫綱要
*(核心規格為先前已確認的 `schema.prisma` 檔案內容)*

### 10. 前端架構
*(遵循 T3 Stack 最佳實踐，包含元件組織、狀態管理、路由與服務層的具體模式)*

### 11. 後端架構
*(採用 Next.js API Routes 的無伺服器架構，整合 Prisma 存取層與 NextAuth.js 驗證)*

### 12. 統一專案結構
*(採用 `create-t3-turbo` 提供的標準 Monorepo 資料夾結構)*

### 13. 開發工作流程
*(提供基於 pnpm 與 Docker 的本地開發環境設定與常用指令)*
