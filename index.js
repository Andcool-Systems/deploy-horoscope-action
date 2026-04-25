import * as core from "@actions/core";

const API_URL = "https://deployhoroscope.ru/api/v1/day";

async function run() {
  try {
    const zodiac = core.getInput("zodiac").toLowerCase();

    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();

    if (!data.result || !Array.isArray(data.result.signs)) {
      throw new Error("Invalid API response structure");
    }

    const sign = data.result.signs.find(s => s.id === zodiac);

    if (!sign) {
      throw new Error(`Unknown zodiac sign: ${zodiac}`);
    }

    core.info(`🔮 ${sign.name_en}: ${sign.comment}`);
    core.info(`Status: ${sign.status}`);

    if (sign.status === "bad") {
        core.setFailed(`🚫 The stars say that today is not the best day for deployment.`);
    }

    if (sign.status === "neutral") {
      core.warning("⚠️ Risky deploy day (neutral)");
    }

    if (sign.status === "good") {
      core.info("✅ Stars are aligned. Ship it.");
    }

  } catch (err) {
    core.setFailed(err.message);
  }
}

run();