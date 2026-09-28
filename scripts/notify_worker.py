"""
Background worker stub: polls an internal webhook and forwards task
notifications. Uses requests/urllib3 — included here so the pip
dependency scan (OWASP Dependency-Check) has real, imported packages
to evaluate rather than an unused requirements.txt.
"""
import requests


def ping_health(base_url: str = "http://localhost:8080") -> bool:
    try:
        resp = requests.get(f"{base_url}/health", timeout=5)
        return resp.status_code == 200
    except requests.RequestException:
        return False


if __name__ == "__main__":
    print("healthy:", ping_health())
