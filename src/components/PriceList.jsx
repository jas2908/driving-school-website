import React from 'react'

const PriceList = () => {

    const sections = [
        {
            title: "Kurs",
            items: [
                ["Trafikalt grunnkurs", "2000,-"],
                ["Mørkekjøringsdemo", "2000,-"],
                ["Førstehjelpskurs", "1000,-"],
                ["Bilkjøringens risiko (teori 2t)", "500,-"],
                ["Kjøring i landeveismiljø (5t)", "5000,-"],
                ["Planlegging og variert miljø (4t)", "3900,-"],
                ["Refleksjon og oppsummering (2t)", "500,-"],
                ["Leie av bil førerprøve Oslo/Lillestrøm", "3200,-"],
                ["Leie av bil førerprøve Drøbak", "5600,-"],
                ["Oppvarmingstime (45 min)", "850,-"],
                ["Oppvarmingstime (60 min)", "1250,-"]
            ]
        },
        {
            title: "Kjøretimer",
            items: [
                ["Kjøretime (45 min) før kl. 16:15", "875,-"],
                ["Kjøretime (60 min)", "1250,-"],
                ["Kjøretime kveld/helg", "975,-"],
                ["Info & analyse (90 min)", "1750,-"],
                ["Dobbeltime før kl. 16:15", "1750,-"],
                ["Dobbeltime kveld/helg", "1950,-"],
                ["Trinnvurdering trinn 2", "900,-"],
                ["Trinnvurdering trinn 3", "1300,-"],
                ["Sikkerhetskurs på bane", "7200,-"]
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

                <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#0c2b4b" }}>
                    Full prisliste
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                                    padding: "8px 0",
                                    borderBottom: "1px solid #f0f0f0"
                                }}>
                                    <span style={{ fontSize: "14px", color: "#333" }}>
                                        {item[0]}
                                    </span>
                                    <strong style={{ color: "#0c2b4b" }}>
                                        {item[1]}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default PriceList