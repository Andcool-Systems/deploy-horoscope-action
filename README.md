# 🔮 Deploy Horoscope Gate

> Your production is now officially controlled by the stars.

This GitHub Action checks today's deployment horoscope and **blocks your deploy** if the stars say it's a bad idea.

No overrides. No mercy. No deploy.

Powered by: https://deployhoroscope.ru

## ✨ Features

* 🔮 Daily horoscope-based deploy decisions
* 🚫 Hard fail on bad days
* ⚠️ Warning on risky days
* ✅ Safe deploy when stars align
* 🧠 Zero configuration philosophy


## 🚀 Usage

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: 🔮 Horoscope gate
        uses: username/deploy-horoscope-action@v1
        with:
          zodiac: gemini

      - name: 🚀 Deploy
        run: echo "Deploying to production..."
```

## ⚙️ Inputs

| Name   | Required | Description                     |
| ------ | -------- | ------------------------------- |
| zodiac | ✅        | Your zodiac sign (`aries`, etc) |


## 🔮 Behavior

| Status  | Result    |
| ------- | --------- |
| good    | ✅ Deploy  |
| neutral | ⚠️ Warning |
| bad     | ❌ Fail    |


## 🧠 Philosophy

Modern deployment pipelines rely on:

* tests
* code reviews
* CI checks

This action ignores all of that and relies on something far more powerful:

**✨ astrology ✨**


## ⚠️ Disclaimer

This action will randomly block your deploys based on an external API and celestial mechanics.

If your production goes down because of this —
the stars warned you.

## 🛠️ Development

```bash
git clone https://github.com/Andcool-Systems/deploy-horoscope-action
```

---

**created by AndcoolSystems**