import React from 'react'

const PriceList = () => {

    const sections = [
        {
            title: "Kurs",
            items: [
                ["Trafikalt grunnkurs", "2000,-"],
                ["Trafikant i mørket", "2000,-"],
                ["Førstehjelpskurs", "1000,-"],
                ["Bilkjøringens risiko (teori 2t)", "500,-"],
                ["Kjøring i landeveismiljø (5t)", "5000,-"],
                ["Planlegging og variert miljø (4t)", "3900,-"],
                ["Refleksjon og oppsummering (2t)", "500,-"],
                ["Sikkerhetskurs på bane inkl gebyr", "7200,-"]
            ]
        },
        {
            title: "Kjøretimer",
            items: [
                ["Kjøretime (45 min)", "900,-"],
                ["Kjøretime helg", "1000,-"],
                ["Info & analyse", "1800,-"],
                ["Dobbeltime før kl. 16", "1800,-"],
                ["Dobbeltime helg", "2000,-"],
                ["Trinnvurdering trinn 2", "900,-"],
                ["Trinnvurdering trinn 3", "1300,-"]
            ]
        },
        {
            title: "Førerprøve",
            items: [
                ["Leie av bil til førerprøve Oslo (60 min før)", "4450,-"],
                ["Leie av bil til førerprøve Lillestrøm (60 min før)", "5000,-"],
                ["Leie av bil til førerprøve Drøbak (60 min før)", "5600,-"],
                ["Praktisk prøve gebyr", "1540,-"]
            ]
        },
        {
            title: "Offentlige gebyrer",
            items: [
                ["Teoriprøve", "480,-"],
                ["Førerprøve", "1490,-"],
                ["Førerprøvekort", "160,-"],
                ["Digitalt bilde", "100,-"],
                ["NAF-gebyr", "1550,-"]
            ]
        }
    ]

    return (
        <div id="pricing" style={{ padding: "60px 20px", background: "#f3f6f8" }}>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>

                <h2 style={{
                    textAlign: "center",
                    marginBottom: "40px",
                    color: "#0c2b4b"
                }}>
                    Full prisliste
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px"
                }}>

                    {sections.map((section, i) => (
                        <div key={i} style={{
                            background: "#fff",
                            borderRadius: "12px",
                            padding: "20px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                        }}>

                            <h3 style={{
                                marginBottom: "15px",
                                color: "#0c2b4b",
                                borderBottom: "2px solid #eee",
                                paddingBottom: "10px"
                            }}>
                                {section.title}
                            </h3>

                            {section.items.map((item, idx) => (
                                <div key={idx} style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    gap: "15px",
                                    padding: "8px 0",
                                    borderBottom: "1px solid #f0f0f0"
                                }}>
                                    <span style={{
                                        fontSize: "14px",
                                        color: "#333"
                                    }}>
                                        {item[0]}
                                    </span>

                                    <strong style={{
                                        color: "#0c2b4b",
                                        whiteSpace: "nowrap"
                                    }}>
                                        {item[1]}
                                    </strong>
                                </div>
                            ))}

                            {section.title === "Førerprøve" && (
                                <p style={{
                                    marginTop: "15px",
                                    fontSize: "14px",
                                    color: "#757575",
                                    lineHeight: "1.5"
                                }}>
                                    Leie av bil til andre stasjoner – ta kontakt.
                                </p>
                            )}

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default PriceList