# TaskMaster-API

Legacy cloud task service used for the SEC 385 Module 4 DevSecOps lab
(Task 2: CI/CD Pipeline & Dependency Remediation).

## Stack
- Node.js / Express API (`src/server.js`)
- Python worker helper (`scripts/notify_worker.py`)
- Docker + Docker Compose
- GitHub Actions pipeline: `.github/workflows/devsecops-pipeline.yml`

## Pipeline
On every push/PR to `main`:
1. **SCA gate** — OWASP Dependency-Check + Snyk scan npm and pip manifests
2. **DAST gate** — builds the container, boots it, runs an OWASP ZAP baseline scan against `http://localhost:8080`

## Local run
```bash
docker compose up --build
curl http://localhost:8080/health
```

## Status
- [ ] Baseline (pre-remediation) run captured
- [ ] Node dependencies remediated (express, lodash, minimist)
- [ ] Python dependencies remediated (requests, urllib3)
- [ ] Security headers added (helmet)
- [ ] Container hardened to run as non-root
- [ ] Clean post-remediation run captured
