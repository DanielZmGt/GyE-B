# Galeria y Enmarcados del Bajio

Aplicacion web para una galeria de enmarcados con tienda en linea, portafolio de trabajos y enmarcador virtual.

## Estructura del proyecto

```
GyE-B/
  backend/                  # API REST (FastAPI + Supabase)
    app/
      main.py               # Endpoints de la API
      models.py             # Modelos Pydantic
      supabase_client.py    # Cliente Supabase
      data.py               # Datos de referencia
    sql/
      01_tables.sql         # Creacion de tablas
      02_seed.sql           # Datos iniciales
      03_reset_and_seed.sql # Reset + seed (todo en uno)
    .envxample      .e      # Variables de entorno (plantilla)
    requirements.txt        # Dependencias Python

  galeria-y-enmarcados-del-bajio/   # Frontend (Next.js)
    app/                    # Paginas (App Router)
      page.tsx              # Home
      gallery/page.tsx      # Portafolio
      tienda/page.tsx       # Tienda
      virtual-framer/page.tsx # Enmarcador virtual
    components/             # Componentes (Atomic Design)
      atoms/
      molecules/
      organisms/
    data/                   # Datos del frontend
    public/                 # Assets estaticos
    package.json
```

## Tecnologias

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Motion (Framer Motion)
**Backend:** FastAPI, Python 3.11+, Pydantic
**Base de datos:** Supabase (PostgreSQL)

---

## Requisitos previos

- Node.js 18+ (recomendado 22)
- Python 3.11+
- pip
- Cuenta en [Supabase](https://supabase.com)

---

## Configuracion inicial (primera vez)

### 1. Configurar Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Ve a **SQL Editor** y ejecuta estos archivos en orden:
   - `backend/sql/01_tables.sql` — Crea las 8 tablas con RLS y politicas
   - `backend/sql/02_seed.sql` — Inserta los datos iniciales (30 productos, 30 portfolio, molduras, colores, servicios)
3. Ve a **Settings > API** y copia:
   - **Project URL** (ej: `https://xxxxx.supabase.co`)
   - **service_role key** (el JWT largo que empieza con `eyJ...`)

### 2. Configurar el Backend

```bash
cd backend

# Crear archivo de variables de entorno
cp .env.example .env
```

Edita `backend/.env` con tus credenciales:

```env
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Instala las dependencias:

```bash
pip install -r requirements.txt
```

### 3. Configurar el Frontend

```bash
cd galeria-y-enmarcados-del-bajio

npm install
```

---

## Levantar la aplicacion en desarrollo

### Opcion A: Levantar ambos servicios manualmente

**Terminal 1 — Backend (puerto 8000):**

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

**Terminal 2 — Frontend (puerto 3000):**

```bash
cd galeria-y-enmarcados-del-bajio
npm run dev
```

### Opcion B: Levantar ambos con un solo comando

Desde la raiz del proyecto (`GyE-B/`):

```bash
# Windows (PowerShell)
Start-Process -NoNewWindow -FilePath "cmd" -ArgumentList "/c cd backend && uvicorn app.main:app --reload --port 8000"
cd galeria-y-enmarcados-del-bajio && npm run dev
```

```bash
# Linux / macOS
cd backend && uvicorn app.main:app --reload --port 8000 &
cd galeria-y-enmarcados-del-bajio && npm run dev
```

### Verificar que funciona

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:8000/api/products](http://localhost:8000/api/products)
- **Documentacion API (Swagger):** [http://localhost:8000/docs](http://localhost:8000/docs)

---

## Endpoints de la API

| Metodo | Endpoint | Descripcion |
|--------|----------|-------------|
| `GET` | `/api/products` | Listar productos. Filtro: `?category=Enmarcado\|Montaje\|Restauracion` |
| `GET` | `/api/products/{id}` | Obtener producto por ID |
| `GET` | `/api/portfolio` | Listar portafolio. Filtro: `?category=Framing\|Mounting\|Maintenance` |
| `GET` | `/api/portfolio/{id}` | Obtener item de portafolio por ID |
| `GET` | `/api/moldings` | Listar molduras disponibles |
| `GET` | `/api/mat-colors` | Listar grupos de colores de matboard |
| `GET` | `/api/services` | Listar servicios |
| `POST` | `/api/quotes` | Crear cotizacion (persiste en DB, genera URL WhatsApp) |

### Ejemplo: Crear cotizacion

```bash
curl -X POST http://localhost:8000/api/quotes \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "Juan Perez",
    "customer_phone": "+524771234567",
    "items": [
      {"product_id": 1, "quantity": 2},
      {"product_id": 7, "quantity": 1}
    ],
    "message": "Entrega a domicilio"
  }'
```

---

## Deploy

### Frontend en Vercel

1. **Sube tu repositorio a GitHub** (si aun no lo has hecho):

   ```bash
   git add -A
   git commit -m "feat: app lista para deploy"
   git push origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com) e inicia sesion con GitHub
   - Haz clic en **"Add New" > "Project"**
   - Selecciona tu repositorio `GyE-B`

3. **Configura el proyecto en Vercel:**
   - **Framework Preset:** Next.js (se detecta automaticamente)
   - **Root Directory:** `galeria-y-enmarcados-del-bajio`
   - **Build Command:** `npm run build`
   - **Output Directory:** (dejar vacio, Next.js lo maneja)

4. **Variables de entorno en Vercel** (si el frontend necesita llamar al backend):
   - Ve a **Settings > Environment Variables** en tu proyecto de Vercel
   - Agrega:

     ```
     NEXT_PUBLIC_API_URL=https://tu-backend-url.com
     ```

5. Haz clic en **Deploy**

Cada push a `main` hara deploy automaticamente.

### Backend en Vercel (Serverless)

1. Crea un archivo `vercel.json` en `backend/`:

   ```json
   {
     "builds": [
       {
         "src": "app/main.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "app/main.py"
       }
     ]
   }
   ```

2. Crea un proyecto separado en Vercel para el backend:
   - **Root Directory:** `backend`

3. Agrega las variables de entorno en Vercel:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. Deploy.

### Backend alternativa: Railway / Render

Si prefieres un servidor tradicional en vez de serverless:

**Railway:**

1. Ve a [railway.app](https://railway.app)
2. Conecta tu repo, selecciona `backend/` como root
3. Railway detecta Python automaticamente
4. Agrega las variables de entorno (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`)
5. Configura el comando de inicio: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

**Render:**

1. Ve a [render.com](https://render.com)
2. Crea un **Web Service**, conecta tu repo
3. **Root Directory:** `backend`
4. **Build Command:** `pip install -r requirements.txt`
5. **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
6. Agrega las variables de entorno

---

## Resetear datos en Supabase

Si necesitas limpiar y reinsertar los datos desde cero, ejecuta `backend/sql/03_reset_and_seed.sql` en el SQL Editor de Supabase. Este archivo hace TRUNCATE de todas las tablas y reinserta los datos limpios.

---

## Notas

- El backend usa la **anon key** de Supabase actualmente. Para operaciones de escritura protegidas, usa la **service_role key**
- Las imagenes se sirven desde la carpeta `public/assets/` del frontend
- El CORS del backend esta configurado para `http://localhost:3000`. Actualiza `allow_origins` en `backend/app/main.py` con tu dominio de produccion al hacer deploy
- Las cotizaciones se persisten en Supabase y generan un enlace de WhatsApp para contacto directo
