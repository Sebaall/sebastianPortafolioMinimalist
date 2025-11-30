window.addEventListener("load", () => {
        setTimeout(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, 1);
    });

    // Evita que Safari/Chrome “recuerden” el scroll tras recargar
    window.history.scrollRestoration = "manual";