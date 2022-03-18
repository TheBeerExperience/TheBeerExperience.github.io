// BREWER & BEER INFORMATION
// =========================
const brewers = [
    {
        number: 1,
        name: "Hophemel",
        link: "https://www.hophemel.be",
        location: "bovendek",
        description:
            "Het brouw-verhaal van de Hophemel is ontstaan uit een klein begonnen, maar snel gegroeide huisbrouwerij die de lat hoog legt en het experiment totaal niet schuwt. Na een aantal jaren werd de drang om naar buiten te komen met de hieruit ontstane bieren echter zo groot dat Brouwerij HopHemel in het najaar van 2020 officieel het licht zag. ",
        beers: [
            {
                name: "Florentius Black IPA",
                days: "Beschikbaar op zaterdag",
                procent: "6,20%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "This black but hoppy beer is brewed with frozen fresh hops by Yakima Valley Hops and delivers a tropical and at the same time slightly malted, burned nose with a bitter taste. A mindfuck!",
            },
            {
                name: "Clovis DIPA",
                days: "Beschikbaar op zaterdag",
                procent: "8,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "A blonde, strong, tropical double IPA, dryhopped with cryo-hops.",
            },
            {
                name: "Angela Ferrero Rocher Pastry Stout",
                days: "Beschikbaar op zaterdag",
                procent: "8,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Heavy, dark stout with flavours of chocolate and hazelnuts – refering to the famous praline.",
            },
            {
                name: "Gildas Beetroot Sour IPA",
                days: "Beschikbaar op zaterdag",
                procent: "7,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "A sour and at the same time slightly bitter beer, hopped with citraand infused with (red) beetroot juice. Philly Sour yeast.",
            },
            {
                name: "Florentius Black IPA",
                days: "Beschikbaar op zondag",
                procent: "6,20%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "This Black IPA is brewed with frozen fresh hops and delivers a hoppy and slighty malted, burned nose with a bitter taste.",
            },
            {
                name: "Ignatius Mulberry & Blackberry saison",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "A slightly spicy, dry saison, subtle infused with fresh mulberries & blackberries.",
            },
            {
                name: "Marcellus Monx Coffee Barley Wine",
                days: "Beschikbaar op zondag",
                procent: "10,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "A strong, sweet, caramelish brown-red beer, infused with freshly brewed coffee by Monx Roasters from Suncourts ;-)",
            },
            {
                name: "Niklaus Zuid-Afrikaans blond / Huisbier K35",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "A classic bitter blonde beer, brewed with South-african hops and infused with Rooibos-tea.",
            },
        ],
    },
    {
        number: 2,
        name: "Brasserie Surréaliste",
        link: "https://www.brasseriesurrealiste.com",
        location: "bovendek",
        description: "Brasserie Surréaliste is één van de nieuwe bierprojecten uit Brussel. \"Beyond the rules, rabbits and reality, they create the beers of our dreams\"",
        beers: [
            {
                name: "Surréaliste",
                days: "Beschikbaar op zaterdag",
                procent: "5,60%",
                price: "1",
                volume: "tap",
                description: "Pale Ale dry-hopped with Citra, Mosaic and Simcoe",
            },
            {
                name: "Blueberries Effect",
                days: "Beschikbaar op zaterdag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles",
                description: "Barrel aged sour with blueberries and blackberries",
            },
            {
                name: "Double Trouble",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "vat",
                description: "Double IPA hopped with Citra, Galaxy, Mosaic, and Nelson",
            },
            {
                name: "Dream in Mosaic",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,50%",
                price: "1",
                volume: "vat",
                description: "India Pale Ale brewed with oats and hopped only with Mosaic",
            },
            {
                name: "Dance Rave Dance",
                days: "Beschikbaar op zondag",
                procent: "4,20%",
                price: "1",
                volume: "vat",
                description: "Session IPA w. Citra, Nelson, Motueka",
            },
            {
                name: "Venus Effect",
                days: "Beschikbaar op zondag",
                procent: "4,50%",
                price: "1",
                volume: "tap",
                description:
                    "Gose-style sour ale dry-hopped with Chinook, El Dorado and Idaho 7",
            },
        ],
    },
    {
        number: 3,
        name: "Brasserie de l'Abbaye des Rocs",
        link: "https://nl.abbayedesrocs.com/ons",
        location: "bovendek",
        description:
            "Uit Honnelles, Henegouwen, komt Abbaye de Rocs, een ware klassieker!  In 1979 kregen zij als eerste brouwerij na WO II een vergunning om een microbrouwerij te creëren in België. Het materiaal dat nodig is om bier te produceren bestond niet voor zulke kleine hoeveelheden en de eerste productiemachines werden tot stand gebracht op basis van recuperatiemateriaal.",
        beers: [
            {
                name: "Saison",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,40%",
                price: "1",
                volume: "fles 33cl",
                description: "Zeer frisse ongefilterde saison met hoppige nasmaak . Voor deze saison werd een wilde hopsoort uit eigen tuin gecultiveerd en gereproduceerd."
            },
            {
                name: "Montagnarde",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Sterk amberbier, ongefilterd met kruidige nasmaak."
            },
            {
                name: "Roc's Stout",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,50%",
                price: "1",
                volume: "fles 33cl",
                description: " Stout belgian style met toetsen van kruiden en koffie."
            },
            {
                name: "Triple Impériale",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,50%",
                price: "2",
                volume: "fles 33cl",
                description: "Zwaar en sterk donker bier met zeer ronde afdronk met kruidige toetsen vanille en zoethout."
            }
        ],
    },
    {
        number: 4,
        name: "Enigma",
        location: "bovendek",
        link: "https://www.enigmabrewery.be/",
        description:
            "Enigma speelt op The Beer Experience een ware thuismatch. Brouwer Mark is afkomstig van Heusden-Zolder en verovert ondertussen België (en Europa) met zijn bieren in diverse stijlen, van blonde ales tot double IPA's. ",
        beers: [
            {
                name: "Hopnytized Everyday IPA",
                days: "Beschikbaar op zaterdag",
                procent: "5,50%",
                price: "1",
                volume: "blik 33cl",
                description: "Blonde IPA",
            },
            {
                name: "Hopnytized Golden IPA",
                days: "Beschikbaar op zaterdag",
                procent: "8,50%",
                price: "1",
                volume: "blik 33cl",
                description: "Blonde IPA, Festival Exclusive !!!",
            },
            {
                name: "El Dorado Tripel IPA",
                days: "Beschikbaar op zaterdag",
                procent: "10,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Blonde Tripel IPA",
            },
            {
                name: "Ragnaröck Blond",
                days: "Beschikbaar op zondag",
                procent: "5,50%",
                price: "1",
                volume: "fles 33cl",
                description: "Blonde",
            },
            {
                name: "Hopnytized Kveik IPAV2",
                days: "Beschikbaar op zondag",
                procent: "7,00%",
                price: "1",
                volume: "blik 33cl",
                description: "Blonde IPA",
            },
            {
                name: "Hopnytized DIPAV2",
                days: "Beschikbaar op zondag",
                procent: "9,00%",
                price: "1",
                volume: "blik 33cl",
                description: "Blonde IPA",
            },
            {
                name: "Hades Imperial Stout",
                days: "Beschikbaar op zondag",
                procent: "10,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Donkere Imperial Stout",
            },
        ],
    },
    {
        number: 5,
        name: "De Wilde Brouwers (zaterdag)",
        link: "https://www.dewildebrouwers.be",
        location: "bovendek",
        description:
            "Deze brouwerij uit Merelbeke slaat regenwater op en zuivert deze tot perfect brouwwater met behulp van omgekeerde osmose technologie. De energie om hun brouwerij te doen draaien komt van onze zonnepanelen. In deze brouwerij brouwen zij bieren van lage, hoge en wilde gisting volgens onze Belgische traditie.",
        beers: [
            {
                name: "Flora Sour Cherry",
                days: "Beschikbaar op zaterdag",
                procent: "3,50%",
                price: "1",
                volume: "fles 33cl",
                description: "Zacht zure kriek gerijpt op Bordeaux vaten"
            },
            {
                name: "Cydonia Barocca",
                days: "Beschikbaar op zaterdag",
                procent: "8,00%",
                price: "1,5",
                volume: "fles 33cl",
                description: "Een krachtige tripel van lage gisting met een warme kruidigheid en een fijne toets van kweepeer, een vergeten vrucht."
            },
            {
                name: "Oud Brood",
                days: "Beschikbaar op zaterdag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles 33cl",
                description: "Gemaakt i.s.m. bio bakkerijen. Voor dit bruin bier worden overschotten van biologisch desembrood getoast en verkruimeld."
            },
            {
                name: "David 8.5",
                days: "Beschikbaar op zaterdag",
                procent: "8,50%",
                price: "1,5",
                volume: "fles 33cl",
                description: "Strong Blond - Een dorstlesser van formaat met een subtiele bitterheid, verfijnde frisse hopsmaken, met citrus en perzik in de neus. Zilver op de World Beer Awards 2021."
            }
        ],
    },
    {
        number: 6,
        name: "Aerts Paradijs",
        link: "https://www.hetaertsparadijs.be/",
        location: "bovendek",
        description:
            "Brouwerij ‘t Aerts Paradijs is een kleine lokale brouwerij in Koersel onder leiding van Jeroen Aerts.\n" +
            "Op ambachtelijke wijze worden hier ciders, bieren en vruchtensappen geproduceerd, een échte lokale artisanale brouwerij.\n",
        beers: [
            {
                name: "Paradijs Saison",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,90%",
                price: "1",
                volume: "fles 33cl",
                description: "Ongefilterd tarwebier gemaakt met belgische saisongist. Kruidig, met een aangename bitterheid van de gebruikte hoppen. De gist voegt nog een extra citrussmaak toe.  ",
            },
            {
                name: "Paradijs Brons",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Donkere dubbel, typisch Belgisch, met een aangenaam en vol aroma. Gebrouwen met 2 soorten hop wat een complexe smaak brengt. Caramelachtige karakter geeft het redelijk zoete afdronk. ",
            },
            {
                name: "Paradijs Goud",
                days: "Beschikbaar op zaterdag",
                procent: "8,70%",
                price: "1",
                volume: "fles 33cl",
                description: "Vlot drinkbaar, zoeter bier van het type Tripel. Gebrouwen met 3 types granen: gerst, tarwe en haver. Vol karakter. Koriander en appelsienzoet geven een extra kruidige toets aan het smakenpallet.",
            }
        ],
    },
    {
        number: 7,
        name: "North Antwerp Brewery",
        link: "https://www.northantwerpbrewery.com/",
        location: "bovendek",
        description:
            "Zet twee gepassioneerde jongemannen van Brasschaat samen en je krijgt North Antwerp Brewery. Passie, innovatie, kwaliteit en iets exotisch.....verrassende ferme bieren uit het noorden van Antwerpen.",
        beers: [
            {
                name: "Haru Sakura Infused",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,90%",
                price: "1",
                volume: "tap",
                description: "Florale, droge tripel waarbij handgeplukte Japanse kersenbloesem (sakura) geïnfuseerd is. Het florale karakter ervan zorgt ook voor een lichte zoetigheid. Heel toegankelijk en fluweelzacht bier."
            },
            {
                name: "ACAN'S Mallow Tree",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,00%",
                price: "1",
                volume: "blik",
                description: "ACAN’S Mallow Tree (cacaofruit sour ale) is een fris, zoetzuur en fruitig bier met tonen van lychee, bestaande uit 80% bier en 20% jus van de cacaovrucht."
            },
            {
                name: "Black Koji",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,50%",
                price: "1,5",
                volume: "fles 33cl",
                description: "Gebrouwen met 50% gerijpte Koji-gerst, zelf “gemout” volgens oude Japanse traditie. Bij deze techniek komen aroma’s van tropische vruchten en chocolade vrij met een toets van umami. Koji is een schimmel die het hoofdingrediënt bij het maken van sake, sojasaus en het brouwen van miso is."
            },
            {
                name: "Mizu Koji Amazake Barley Wine",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "16,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Mizu Koji Amazake Barley Wine is een hybride tussen Amazake (ruwe sake) en bier. De Amazake heeft een spontane melkzuurfermentatie ondergaan waarna deze geblend is met Barley Wine,  alsook geïnfuseerd met jasmijnbloesem. Fruitig en floraal smakenpallet, toetsen van umami."
            }
        ],
    },
    {
        number: 8,
        name: "Bèrringse Bier Brouwers",
        link: "https://www.koolputter.com",
        location: "bovendek",
        description:
            "Deze Bèrringse Bier Brouwers uit, ja, Beringen, ontwikkelen en brouwen de lekkerste mijnwerkersbieren sinds 2004. Uniek, straf, karaktervol en gegeerd in de mijngemeenten en omstreken.",
        beers: [
            {
                name: "Koolputter Zwart",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "10,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Imperial stout - zachte maar straffe stout",
            },
            {
                name: "Koolputter Goud",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,10%",
                price: "1",
                volume: "fles 33cl",
                description: "Stevige tripel",
            },
            {
                name: "Chef-Prion 2021",
                days: "Beschikbaar op zaterdag",
                procent: "6,50%",
                price: "1",
                volume: "fles 33cl",
                description: "De droogste White IPA van 't land !",
            }
        ],
    },
    {
        number: 9,
        name: "De Nachtraafbrouwers",
        link: "http://www.nachtraafbier.be/",
        location: "bovendek",
        description:
            "De Nachtraafbrouwers uit Diksmuide, de firma achter het gamma liefhebbersbieren Nachtraaf. “Een nachtraaf is diegene die het laatst gaat slapen, hij of zij die er het beste tegen kan”. Een omschrijving die volgens de brouwers dan ook perfect past bij een goed degustatie-bier.",
        beers: [
            {
                name: "De Witte Raaf",
                days: "Beschikbaar op zaterdag",
                procent: "5,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Traditioneel troebel witbier in de traditie van Pierre Celis uit Hoegaarden in de jaren ‘60. Prikkelende aroma’s van citroen en koriander. De tarwe zorgt voor een zachtheid en een dorstlessende nasmaak.",
            },
            {
                name: "Nachtraaf Dubbel",
                days: "Beschikbaar op zaterdag",
                procent: "7,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Levend bruin speciaalbier dat mooi verder evolueert tijdens de tweede gisting op fles. Licht moutige, fruitige smaak en een zachtzoete nasmaak. Een romige, stevige schuimkraag.",
            },
            {
                name: "Nachtraaf Tripel",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Goudgeel bier met fijne pareling en stevige witte kraag. Hoppige smaak met moutige achtergrond en licht fruitachtige vanillesmaak.",
            },
            {
                name: "Nachtraaf Quadrupel",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "10,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Donkere amberbruine en heldere Barley met stevige, romige schuimkraag. De smaak is vol en zachtzoet met toetsen van karamel, gebrande mout en koffielikeur. In de lijn van de wereldvermaarde donkere Belgische Trappistenbieren.",
            },
            {
                name: "Nachtraaf Zomers Blondje",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Saisontype bier van hoge gisting. Moderne variant op de originele Henegouwse 'Saisons'. Goed gehopt en gekruid met dorstlessend karakter.",
            },
            {
                name: "Nachtraaf Speciale-Amber",
                days: "Beschikbaar op zaterdag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description: "De traditionele brouwwijze van de typische 'Spéciale Belge' vertaald naar een modern helder bier van hoge gisting, met een toegankelijke en evenwichtige zoet-bitter balans. De smaak neigt naar het licht-fruitige, de afdronk is dan weer eerder hoppig.",
            }
        ],
    },
    {
        number: 10,
        name: "De Leite",
        link: "www.deleite.be/nl/",
        location: "compressorenhal",
        description:
            "De Leite in Ruddervoorde, is het levenswerk van Luc Vermeersch. Hij richtte de brouwerij op in 2008 en bouwde z’n zaak stelselmatig uit van een hobby tot een familiale kmo.",
        beers: [
            {
                name: "Enfant Terriple",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,20%",
                price: "1",
                volume: "fles 33cl",
                description: "Blonde tripel met fijne bitterheid en lichte citrustoets omkransd met een sober kruidige moutsmaak",
            },
            {
                name: "Cuvée soeur Ise",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,00%",
                price: "1,5",
                volume: "tap",
                description: "Zacht zure tripel kriek",
            },
            {
                name: "Paljas bruin",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Zacht donker, de 4 mouten zorgen voor fijne chocolade en koffietoetsen.",
            },
            {
                name: "Cuvée oncle Pol",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles 33cl",
                description: "Vlaams rood-bruin afgerond met mooie hoppige bitterheid",
            },
            {
                name: "Paljas Rosé",
                days: "Beschikbaar op zondag",
                procent: "3,80%",
                price: "1",
                volume: "tap",
                description: "Zoet fruitbier",
            },
        ],
    },
    {
        number: 11,
        name: "Brouwerij Alvinne",
        link: "https://www.alvinne.com/",
        location: "compressorenhal",
        description:
            "Uit Moen komt Brouwerij Alvinne. Alvinne is in Europa een pionier op het vlak van houtrijping en met hun eigen ontwikkelde gist brouwen ze (zure) bieren van wereldklasse",
        beers: [
            {
                name: "Cuvee de Mortagne Margaux \"Chateau Kirwan\"",
                days: "Beschikbaar op zaterdag",
                procent: "12,80%",
                price: "1,5",
                volume: "tap",
                description: "Barrel aged quadrupel - De Land van Mortagne gerijpt op 1ste gebruik Chateau Kirwan Margaux rode wijn vaten",
            },
            {
                name: "Phi Rabarber",
                days: "Beschikbaar op zaterdag",
                procent: "8,00%",
                price: "1",
                volume: "tap",
                description: "Sour ale - Blond zuur fruitbier van gemengde gisting (Morpheusgist) waarop een vijftal maanden rabarber heeft gemacereerd",
            },
            {
                name: "Souterrain",
                days: "Beschikbaar op zaterdag",
                procent: "10,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Tarwewijn (wheatwine) - Volmondig, romig, stevig",
            },
            {
                name: "Farmhouse Sour #5",
                days: "Beschikbaar op zaterdag",
                procent: "8,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Farmhouse sour - Blend van Saison & Tripel van gemengde gisting, blend van bier gerijpt op Moscatel, Witte Porto en Bordeaux rode wijn vaten.",
            },
            {
                name: "Mano Negra Peated Whisky Barrel Aged",
                days: "Beschikbaar op zondag",
                procent: "10,00%",
                price: "1,5",
                volume: "tap",
                description: "Belgian Imperial Stout - Gerijpt op Kilchoman peated whisky vat",
            },
            {
                name: "Cuvée Jakub",
                days: "Beschikbaar op zondag",
                procent: "7,00%",
                price: "1",
                volume: "tap",
                description: "Blonde Sour Ale gerijpt op een Chateauneuf du Pape foeder (25hl)",
            },
            {
                name: "Morpheus Saison",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Klassieke saison gebrouwen met zowel een saisongist als onze Morpheusgist waarvan de melkzuurbacteriën geneutraliseerd werden",
            },
            {
                name: "Cuvée La Calavera",
                days: "Beschikbaar op zondag",
                procent: "5,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Collaboration brew met La Calavera (Sp.) - Fris vlot drinkbaar zuur bier gerijpt op Witte Port en rode wijn vaten (blend), met maceratie van granaatappel, pompelmoes, sinaasappel en kaneel.",
            }
        ],
    },
    {
        number: 12,
        name: "d'Oude Maalderij",
        link: "www.doudemaalderij.com",
        description: "D'oude Maalderij werd gesticht in 2011 te Koolskamp. Brouwer Jef brouwt met de filosofie dat hij steeds de roerstok zelf ter hand neemt om zo oprecht en eerlijke de aloude traditie en meesterlijke kunst van brouwen te boefenen en dit enkel met hoogstaande ingrediënten. Meermaals verkozen als beste brewpub van België!",
        beers: [
            {
                name: "Mox Jet",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,50%",
                price: "1",
                volume: "fles 33cl",
                description: "Bounty dipped in coffee, bier met natuurlijke toevoeging van koffie, cacao en kokos"
            },
            {
                name: "Mox Emerald",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Blond, met toevoeging van verse oostindische kers"
            },
            {
                name: "Antibirus",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,00%",
                price: "1",
                volume: "tap",
                description: "Lockdownbier, gently smoked pilsner"
            },
            {
                name: "Ristorno's en rabatten",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,00%",
                price: "1",
                volume: "tap",
                description: "Black IPA, gebrouwen ter ere van de belastingscontrole"
            },
            {
                name: "Halloweener",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,90%",
                price: "1",
                volume: "tap",
                description: "Smoked butternutstout, vers gesneden en gerookte butternut stout"
            },
            {
                name: "Lorelei",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "14,00%",
                price: "2",
                volume: "tap",
                description: "Barrel aged barley wine, 8 maand gerijpt op gouden carolus single malt whisky vaten"
            },
            {
                name: "Lorelei #2",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "14,00%",
                price: "2",
                volume: "fles",
                description: "Barrel aged barley wine, 22 maand gerijpt op gouden carolus single malt whisky vaten"
            },
            {
                name: "Stoffoasje",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "fles",
                description: "Niet gefilterde, niet gepasteuriseerde Belgische triple"
            }
        ],
        location: "compressorenhal"
    },
    {
        number: 13,
        name: "De Ranke ",
        link: "http://www.deranke.be/nl/bieren",
        location: "compressorenhal",
        description:
            "Deze mooie brouwerij uit Dottignies, was een ware trendsetter in de opkomst van de bittere bieren met hun legendarische XX-bitter. De brouwerij werkt uitsluitend met lokale grondstoffen, hop uit de regio Poperingen en mout van Belgische Mouterijen.",
        beers: [
            {
                name: "Guldenberg",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,00%",
                price: "1",
                volume: "tap",
                description: "Volmondig abdijbier dat balanceert tussen zoet en bitter. Gedry-hopped met Hallertau Mittelfrüh wat de zacht-bittere smaak en aroma geeft."
            }, {
                name: "XX-Bitter",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,50%",
                price: "1",
                volume: "tap",
                description: "Zeer bitter, maar toch evenwichtig. Uitgesproken hopsmaak die lang blijft aanhouden."
            }, {
                name: "Saison de Dottignies",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "tap",
                description: "Henegouwse saison met mooie smaakbalans : vol van smaak, licht om drinken. Stevig gehopt en dorstlessend."
            }, {
                name: "Cuvée De Ranke",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,00%",
                price: "1,5",
                volume: "tap",
                description: "Versnijbier van gemengde gisting, combinatie van bier op vaten verouderd en lambic.Volle zure smaak met een hint van eik door houtlagering."
            }
        ],
    },
    {
        number: 14,
        name: "Brouwerij De Bock",
        link: "https://www.brouwerijdebock.be/",
        location: "compressorenhal",
        description:
            "Micro-brouwerij De Bock met bijhorend proeflokaal opende in 2018 in Beveren. Er stroomde zoveel bier door de aders van Pieter dat naast de job als brouwer bij The Musketeers er nog plaats was voor een eigen brouw-project. De bieren zijn een ode aan de grootvaders van zaakvoerders Pieter & Jordi.",
        beers: [
            {
                name: "Remi",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,20%",
                price: "1",
                volume: "tap",
                description: "Golden Ale - Remi is een fris en fruitig bier met een bittere subtiele afdronk, In de neus heb je aroma's van citrus (hop) en banaan (gist). Bitterheid 35 IBU"
            },
            {
                name: "Desideer",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,20%",
                price: "1,5",
                volume: "tap",
                description: "Strong Dark Ale - Desideer is een stevig, rond en volmondig donker bier. Zijn unieke smaak en aroma worden gekenmerkt door caramel, appelsien en anijstoetsen. Bitterheid 24 IBU."
            },
            {
                name: "Korneel",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "0,30%",
                price: "1",
                volume: "fles 33cl",
                description: "Alcoholvrij - Korneel is een volmondig, dorstlessend alcoholvrij bier met frisse citrustoetsen in de neus en een lichtzure nasmaak."
            }
        ],
    },

    {
        number: 15,
        name: "DOK Brewing",
        link: "www.dokbrewingcompany.be",
        location: "compressorenhal",
        description:
            "In Gent, in een prachtige hal op Dok Noord, vind je deze geweldige brewpub met 30 taps. De inspiratie voor hun brewpub-concept vonden ze in het buitenland. Ze produceren niet de klassieke stijlen maar leren ons alle andere stijlen en smaken beter kennen.",
        beers: [
            {
                name: "Aster The Hoppit",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,90%",
                price: "1",
                volume: "tap",
                description:
                    "American IPA, strak, met toetsen van meloen, kruisbes en mandarijn",
            },
            {
                name: "Hop Joeri Hop",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1",
                volume: "tap",
                description:
                    "Fresh hop saison met Belgische verse ongedroogde Sorachi Ace hop",
            },
            {
                name: "Vlaai me to the moon",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,50%",
                price: "2",
                volume: "tap",
                description:
                    "Pastry stout. Gentse vlaai in een glas",
            },
            {
                name: "Rost goed drinkt goed",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "4,50%",
                price: "1",
                volume: "tap",
                description:
                    "Irish red ale, moutig & creamy",
            }
        ],
    },
    {
        number: 16,
        name: "Brouwerij De Meester",
        link: "https://www.brouwerij-demeester.be/",
        location: "compressorenhal",
        description:
            "Wat begon als een kleine micro-brouwerij met brasserie is ondertussen uitgegroeid naar een meer dan volwaardige brouwerij in Lendelede die uitblinkt in verschillende stijlen, van tripels, over IPA's naar gerijpte bieren!",
        beers: [
            {
                name: "Maître Brut",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "11,00%",
                price: "1",
                volume: "fles",
                description:
                    "Brut bier, sprankelend aperitiefbier met een krachtig fruitig karakter en een fijne hoptoets in de nasmaak. 4 maanden gelagerd op chardonnay wijnvaten.",
            },
            {
                name: "Mok Master",
                days: "Beschikbaar op zaterdag",
                procent: "13,00%",
                price: "1,5",
                volume: "tap",
                description:
                    "Imperial Coffee Stout met toetsen van gebrande koffie, eik en chocolade. 6 maanden gerijpt op Heaven Hill bourbon whisky vaten.",
            },
            {
                name: "Grain Master",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "13,00%",
                price: "1,5",
                volume: "tap",
                description:
                    "Double mash barley wine, 6 maanden gerijpt op Bourbon Whisky vaten Gouden Carolus single malt.",
            },
            {
                name: "Meestereske Tripel Fresh Hop",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "tap",
                description:
                    "Tripel met florale fruitige bitterheid en een zachte afdronk. Gebrouwen met verse centennial hop, oogst 2021",
            },
            {
                name: "Black Master",
                days: "Beschikbaar op zondag",
                procent: "12,00%",
                price: "1,5",
                volume: "tap",
                description:
                    "Een diep donkere Imperial Stout met lichte turf, koffie en chocolade. 4 Maanden gerijpt op Bourbon Whisky vaten Gouden Carolus single malt.",
            }
        ],
    },
    {
        number: 17,
        name: "Dilewyns / Vicaris",
        link: "https://www.vicaris.be",
        location: "compressorenhal",
        description:
            "Brouwerij Dileweyns is een familiebrouwerij uit Dendermonde. Vader én dochter staan aan het roer van deze mooie brouwerij, vooral bekend van hun uitgebreid gamma Vicaris-bieren.",
        beers: [
            {
                name: "Vicaris Tripel",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "tap",
                description:
                    "Goudblonde ongefilterde tripel, zacht en toegankelijk bier met fruitige toets. De milde bitterheid en lichte moutigheid geven een heerlijke afdronk en aangenaam mondgevoel.",
            },
            {
                name: "Vicaris Lino",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Stroblond bier met friszoet aroma,  vanilletoesten , aangename hoppigheid en een zachte afdronk. Eerste bier ter wereld gebrouwen met vlas",
            },
            {
                name: "Vicaris Tripel Geuze",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,00%",
                price: "1,5",
                volume: "fles 33cl",
                description:
                    "Dit uniek type bier is een ideale dorstlesser door het complexe samenspel van de scherpe zurigheid van de spontaan vergiste lambiek die geblend werd met de fruitige, zachte Vicaris Tripel.",
            },
            {
                name: "Vicaris Generaal",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Donkere versie van de Tripel krijgt door bijkomstig gebruik van speciaalmouten.  Karaktervollevolle smaak en rijk aroma. Een speciaal gekozen hop zorgt voor de juiste bitterbalans met de geroosterde mout. ",
            }
        ],
    },
    {
        number: 18,
        name: "Stadsbrouwerij Gruut",
        link: "https://www.gruut.be",
        location: "compressorenhal",
        description:
            "De Gentse stadsbrouwerij werd in 2009 opgericht door Annick De Splenter (familie van Mieke De Splenter van Kasteelbrouwerij De Dool). Het Gruut bier onderscheidt zich van andere bieren door het feit dat er geen hop gebruikt wordt. Er werd samengewerkt met de Gentse universiteit om de beste kruiden te vinden om de hop te vervangen.",
        beers: [
            {
                name: "Gruut blond",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,50%",
                price: "1",
                volume: "tap",
                description:
                    "Gruit bier - Bier met een variatie van verscheidene moutsoorten en ongefilterd. Neutrale, lichtzachte smaak met een bittere afdronk. Speciale selectie Gruut kruiden.",
            },
            {
                name: "Gruut Amber",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,60%",
                price: "1",
                volume: "tap",
                description:
                    "Gruit bier - Een pale ale op de oude Engelse methode zonder gebruik te maken van extra suikers. Selectie van 4 mouten in combinatie met de Gruut kuiden. Een gebalanceerde peperachtige droogheid met een vermoeden van zure sinaas in de afdronk.",
            },
            {
                name: "Gruut Bruin - Glutenvrij",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Gruit bier - Cuvée, met een vlot aangenaam zacht begin en een nooit geproefde blijvende, bijzondere nasmaak. Komende van een variatie aan nootsoorten.",
            },
            {
                name: "Gruut Inferno",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Gruit bier - Een ale met een delicaat intens aroma. Gouden kleur en unieke smaak, populair bij biergenieters van alle leefdtijden.",
            }
        ],
    },
    {
        number: 19,
        name: "Poppels",
        link: "www.poppels.se",
        description: "Ja, ook in Zweden kunnen ze bier brouwen. De Poppels Brouwerij ligt in Jonsered, een buitenwijk van Göteborg in Zweden, één van Europa’s hotspots op biergebied. Ze brouwen hun bier volledig biologisch. Wij houden van Poppels voor hun lekkere hoppige bieren met duidelijke signatuur",
        beers: [
            {
                name: "Session IPA",
                days: "Beschikbaar op zaterdag",
                procent: "4,20%",
                price: "1",
                volume: "tap",
                description: "Core range"
            },
            {
                name: "Imperial NEIPA",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "tap",
                description: "Core range. Sappige New England IPA, dry hopped tijdens de vergisting. Smaakvol, bitter. hopbommetje."
            },
            {
                name: "Rhum and Bourbon BA Stout",
                days: "Beschikbaar op zaterdag",
                procent: "13,50%",
                price: "1,5",
                volume: "fles 33cl",
                description: "Selection Range, zeer smaakvolle stout. Dik, donker en straf, met toetsen chocolade, drop, bruine suiker en vanille"
            },
            {
                name: "Strawberry Sour",
                days: "Beschikbaar op zaterdag",
                procent: "4,50%",
                price: "1",
                volume: "blik",
                description: "Core range"
            }, {
                name: "Passion Pale Ale",
                days: "Beschikbaar op zondag",
                procent: "5,20%",
                price: "1",
                volume: "tap",
                description: "Core range"
            }, {
                name: "DIPA",
                days: "Beschikbaar op zondag",
                procent: "8,00%",
                price: "1",
                volume: "fles 33cl",
                description: "Core range"
            }, {
                name: "Margarita Salty Sour",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "blik",
                description: "Experimental Series. Het zout als contrastmaker geeft een speciaal mondgevoel en nuanceert enige zurigheid. Extra diepte in het bier door de cirtrus. Complex, speels en interessant."
            }
        ],
        location: "machines",
    },
    {
        number: 20,
        name: "BRAUW",
        link: "https://www.brauw.be",
        location: "machines",
        description:
            "Wauw, rauw, Brauw! De Genkse stadsbrouwerij Brauw brouwt niet enkel hun eigen bieren, ze geven ook andere brouwers de kans om te brouwen in hun gezellige brewpub. BRAUW draait om passie voor het brouwen en voor het bier.",
        beers: [
            {
                name: "Jan Withops",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,50%",
                price: "1",
                volume: "tap",
                description:
                    "White IPA - Jan Withops is een White IPA. Dit bier combineert het beste van 2 stijlen. De moutstort en de kruiden zijn typisch voor een belgisch witbier. De hopgift is geïnspireerd op IPA’s, maar dan wel Europees gekleurd.",
            },
            {
                name: "Armout Macleod",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,40%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Scotch Wee Heavy - Armout Macleod is een strong scotch ale (Wee Heavy). Bij dit bier komen de aroma’s grotendeels van de mouten, die verantwoordelijk zijn voor de carameltoetsen aanwezig in het bier.",
            },
            {
                name: "Brauwsel#007",
                days: "Beschikbaar op zaterdag",
                procent: "5,70%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Gose - Brauwsel #007 is het 7de experiment van BRAUW. Bij dit bier hebben we de gist Philly Sour getest. De gist geeft fruitige aroma's in combinatie met een melkzuur. Zoals de stijl voorschrijft is er ook zout toegevoegd.",
            },
            {
                name: "Skogafoss",
                days: "Beschikbaar op zaterdag",
                procent: "10,70%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Belgian quadruppel - Puffin Brewery; Skógafoss is one of the most powerful and largest waterfalls in Iceland. To give this beer some extra power, it has been infused with Brennivín, the national drink of Iceland. A distilled liquor made from fermented potato pulp, flavored with caraway seeds and angelica.",
            },
            {
                name: "Brauwsel#008",
                days: "Beschikbaar op zondag",
                procent: "3,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Eenkoorn-bier - Brauwsel#008 is het 8ste experiment van BRAUW. Bij dit bier hebben we het alternatieve graan Eenkoorn uitgeprobeerd. Het bier is gemaakt met  40% eenkoorn. ",
            },
            {
                name: "Ferme IPA",
                days: "Beschikbaar op zondag",
                procent: "6,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "IPA Amarillo Amber - Een red IPA om U tegen te zeggen, een licht zoete aanzet van caramel dat meteen weggespoeld wordt door een droge hopbitterheid die goed gepaard gaat met de tropische Citrus aroma’s.",
            },
        ],
    },
    {
        number: 21,
        name: "Old Street Brewery",
        link: "https://www.oldstreetbrewery.com",
        location: "balzaal",
        description:
            "Old Street Brewery maken geweldige ambachtelijke bieren in Amerikaanse stijl in East-Londen. Old Street Brewery is 'a band of drunken misfits' looking to bring you good vibes and great beer!!!",
        beers: [
            {
                name: "Hypotenjuice",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,00%",
                price: "1",
                volume: "vat 30 liter",
                description: "Hypotenjuice is a dank and hazy juice monster, fully hop charged with generous reserves of Citra and Mosaic, followed up with Sabro hops during fermentation for a massive tropical hit. The mash is 40% oats and wheat for that thick and creamy mouthfeel we all love. Rounded out with a subtle bitterness and intense ripe tropical fruit flavours.",
            },
            {
                name: "24 Hour Pumpkin People",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "10,00%",
                price: "1",
                volume: "vat 20 liter",
                description: "Imperial Stout - 24 Hour Pumpkin People is an idea we had early on in the pandemic to turn our annual pumpkin beer into a 24 hour boiled spiced imperial stout. Utilising all the free time we had, we wrote a monster recipe consisting of 500kg of honey roasted pumpkin, two mash-ins of 11 Malt types, freshly toasted spices, root ginger and Madagascan vanilla. This culminated into the thickest, darkest winter warmer you could wrap a glove around! This current batch (2021) we have doubled down on all the attributes we liked of the previous year and we have dialled in this to be our best attempt to date. The beauty of this beer relies upon the quality of the ingredients, having used incredible organic Crown Prince pumpkins from Bedlam Farms Organic and beautiful English malt from Crisp Maltings.",
            },
            {
                name: "Lucky Egg",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,50%",
                price: "1",
                volume: "vat 30 liter",
                description: "Lucky Egg is our take on a winter sour; think cool runnings! We created a sour base beer loaded with full-flavoured malts and fermented it with a souring agent alongside our house pale ale yeast, adding body and fruit esters. After conditioning on toasted coconut, we blended in over 120kg of mango and passionfruit puree, creating what could only be recognised as the perfect tropical juice to keep you healthy and happy over the winter months! Kiss the Lucky Egg!",
            },
            {
                name: "Infinite Bliss",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "4,80%",
                price: "1",
                volume: "vat 20 liter",
                description:
                    "A light, refreshing, and smashable pale ale. Our signature brew, Infinite Bliss is the ultimate crowd-pleaser. Hopped with Citra, Mosaic, and Centennial, it goes down smooth with craft aficionados and newcomers!",
            },
        ]
    },
    {
        number: 22,
        name: "K.E.G.S.",
        link: "https://www.kegsbrouwerij.nl",
        location: "balzaal",
        description:
            "K.E.G.S. staat voor Kwaliteit, Educatie, Geestverruiming en Smaak. Vanuit Amsterdam bewaart deze jonge brouwerij mee de Nederlandse biercultuur op The Beer Experience.",
        beers: [
            {
                name: "French Rye Saison",
                days: "Beschikbaar op zaterdag",
                procent: "6,40%",
                price: "1",
                volume: "tap",
                description:
                    "Saison - Een droog, fruitig bier dankzij de Franse Saison gist die meer suikers kan omzetten dan andere Ale gisten. Kruidige hopsoorten en een flinke hoeveelheid rogge zorgen voor een verfrissende bite.",
            },
            {
                name: "Kveik Pale Ale",
                days: "Beschikbaar op zaterdag",
                procent: "4,80%",
                price: "1",
                volume: "tap",
                description:
                    "Pale Ale - Een verfrissende Pale Ale, gemaakt met Kveik, gist afkomstig van Noorse farmhouse brouwers. Doordat men deze gist traditioneel op houten ringen bewaarde heeft deze bijzondere eigenschappen ontwikkeld.",
            },
            {
                name: "Coffee IPA",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,10%",
                price: "1,5",
                volume: "tap",
                description:
                    "IPA - Donker van smaak maar verwarrend licht van kleur door toevoeging van Ethiopische cold-brew koffie. Fruitige hop en koffiearoma’s wisselen elkaar af voor een bijzondere smaakervaring.",
            },
            {
                name: "Extra Stout",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,30%",
                price: "1,5",
                volume: "tap",
                description:
                    "Extra Stout - Zwart als de nacht met de smaak van geroosterd graan en laurier. Stout draait om graan, daarom gebruiken we drie verschillende graansoorten maar ook drie verschillende manieren om ze te behandelen voor net dat beetje Extra.",
            },
            {
                name: "Ot!",
                days: "Beschikbaar op zondag",
                procent: "8,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Double IPA - Een collab en ode aan onze vriend Ot Louw, bij velen bekend als een gepassioneerd bierliefhebber en uitdrager van bijzonder bier. Stevig en hoppig zoals Ot ze het liefst dronk.",
            },
            {
                name: "Serious Lager",
                days: "Beschikbaar op zondag",
                procent: "5,00%",
                price: "1",
                volume: "tap",
                description:
                    "Pale Lager - Serious beer for a serious impact. Een smaakvolle lager met veel Munich mout en nobele hopsoorten. Tien procent van de opbrengst gaat naar het Wereld Natuur Fonds !",
            },
        ],
    },
    {
        number: 23,
        name: "Force Majeure",
        link: "https://www.forcemajeure.be/",
        location: "balzaal",
        description:
            "Force Majeure uit Genk ontwikkelt enkel en alleen alcoholvrije bieren. Triatleet Stijn Panis combineerde in 2019 zijn goesting in speciaalbier met zijn passie voor ondernemen. Het resultaat: Force Majeure. Het eerste échte Belgische alcoholvrije biermerk. 100% Belgisch, 100% smaak en toch 0% alcohol.",
        beers: [
            {
                name: "Force Majeure Traditional blond",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "0,40%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Een nieuw blond bier met een vertrouwde smaak, da’s onze Traditional blond. Vol en toch fris, balancerend op de grens tussen bitter en hoppig. 100% smaakt en 0% alcohol",
            },
            {
                name: "Force Majeure Tripel",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "0,40%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Onze Tripel is een echte smaakmarathon. Hij loopt vlot mee langs zijn grote broers, en finisht met een onverwacht kruidige afdronk. Hiervoor applaudisseren zelfs de meest getrainde kenners van speciaalbier. Drie granen, driedubbele smaak, nul alcohol.",
            },
            {
                name: "Force Majeure Bruin",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "0,40%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Dit bruin bier gaat ‘vollen bak’ voor een echt Belgische traditie. Toetsen van karamel, kaneel en een hint van gebrande mout: een écht Belgisch bruin bier en toch 0% alcohol",
            },
            {
                name: "Force Majeure Kriek",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "0,40%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "De Kriek bewijst dat echt fruitbier ook zonder alcohol kan. Met z’n frisfruitige, licht zurige afdronk is deze klassieker eindelijk geen verboden vrucht meer voor wie op zoek is naar 100% fruitbier en 0% alcohol.",
            },
            {
                name: "Force Majeure Tripel Hop",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "0,40%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Hop hop hop! Mag het wat meer zijn? Speciaal voor de liefhebbers van sterk, bitter bier speelt je favoriete ingrediënt hier de hoofdrol. Meer hopppiness.",
            },
        ],
    },
    {
        number: 24,
        name: "Triporteur / BOM",
        link: "www.triporteurbeer.com",
        location: "balzaal",
        description:
            "Belgian Original Maltbakery & Brewery uit Roeselare, vooral bekend onder de naam Triporteur, maken hun eigen bierrecepten op basis van nieuwe mouten die zij speciaal voor het bier ontwerpen. Samen met de andere ingrediënten vormen de mouten een ‘BOMpakket’ waarmee een zigeunerbrouwerij de bieren brouwt.",
        beers: [
            {
                name: "Triporteur from Heaven",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,20%",
                price: "1",
                volume: "tap",
                description:
                    "Moderne versie van een traditionele Belgische hoppige ale, gebrouwen met huisgebakken mout.  Duidelijke hoparoma van de Europese aromatische hopsoorten East Kent Golding en Styrian Golding en de Amerikaanse Cascade hop. ",
            },
            {
                name: "Triporteur Full Moon",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "10,20%",
                price: "1",
                volume: "tap",
                description:
                    "Parodie op de klassieke \"12\" bieren. Gebrouwen met vers geroosterde BOM mout en gerijpt op Belgische eik die we zelf verzagen met een kettingzaag.",
            },
            {
                name: "Triporteur Bling Bling Ipa",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,80%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Decadente golden ale gebrouwen met 24-karaat goudvlokken. Over-the-top gepimpt met pakken hop, maar verbazend gebalanceerd en zacht. Stoer van buiten, maar super zacht van binnen.",
            },
            {
                name: "Triporteur Wild & Funky",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,40%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Dit is een zuur bier. Het is de perfect dorstlesser op een warme zomerdag. Gebrouwen met appel- en perenstroop.",
            },
            {
                name: "Vuillaert",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,70%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Verfrissend Belgisch blondje dat proeft als Venetië. Gebrouwen met pasta, italiaanse kruiden en appelsienen.",
            },
        ],
    },
    {
        number: 25,
        name: "Brasserie De La Senne",
        link: "https://www.brasseriedelasenne.be/",
        location: "balzaal",
        description:
            'Brasserie De La Senne stond mee aan de wieg van de "nieuwe golf" van craft bier in Brussel (en België). Zij produceren bittere bieren vanaf hun prilste begin – en zij bestaan om bittere bieren te produceren!',
        beers: [
            {
                name: "Taras Boulba",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "4,50%",
                price: "1",
                volume: "tap",
                description:
                    "Noble Hop Session Beer - Taras Boulba is dorstlessend bier, licht en verfrissend, maar met een sterk karakter. Blond en licht troebel, aroma’s van nobele hops in dry-hopping, kruidige, bloemige en licht citroenachtige toets. Krachtige bitterheid, droge finale. Toetsen van mout en verse granen, en fruitige/kruidige fermentatie-aroma’s.",
            },
            {
                name: "Zinnebir",
                days: "Beschikbaar op zaterdag",
                procent: "5,80%",
                price: "1",
                volume: "tap",
                description:
                    "Belgian Pale Ale - Zinnebir is een goudkleurig, perfect gebalanceerde Pale Ale. Fruitige en hoppige aroma’s richting gedroogde abrikozen en sinaasappelconfituur. Een moutig karakter en mooie bitterheid. Hun allereerste bier, geboren in de kelders van een Brussels kraakpand (2002).",
            },
            {
                name: "Stouterik",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,00%",
                price: "1",
                volume: "tap",
                description:
                    "Dry Stout - Stouterik is een klassieke “Dry Stout” volgens Ierse traditie, doordrinkbaar, maar met een eigen karakter. De kleur is diep zwart met een nuance van robijn. Gebrande koffie-accenten, gebalanceerd door een zacht romig karakter. Fijne bitterheid, met een droge en verbazend verfrissende finale.",
            },
            {
                name: "Jambe-de-Bois",
                days: "Beschikbaar op zaterdag",
                procent: "8,00%",
                price: "1",
                volume: "tap",
                description:
                    "Hoppy Tripel - Jambe-de-Bois is een genereus gehopte Tripel. Gebalanceerd en verleidelijk. Fermentatie-aroma’s overheersen, toetsen van peer en rijpe banaan. De hop geeft bloemige en kruidige accenten (witte peper, nootmuskaat). Het alcoholgehalte maakt de smaak tamelijk rond, maar door de afwezigheid van restsuikers is de finale droog en licht bitter.",
            },
            {
                name: "Brussels Calling",
                days: "Beschikbaar op zondag",
                procent: "6,50%",
                price: "1",
                volume: "tap",
                description:
                    "Blond Belgian IPA - De Brussels Calling heeft een fruitige (bergamot, perzik) en af en toe florale (narcis) neus. In de mond worden deze aroma's intenser, met daaronder een moutige basis. Nieuwe florale toesten en zelfs wat eucalyptus. In de finale is er fruitigheid en een lange, droge bitterheid. Stevig gedryhopt is, te zien in de gesluierde kleur!",
            },
            {
                name: "Zenne Pils",
                days: "Beschikbaar op zondag",
                procent: "4,90%",
                price: "1",
                volume: "tap",
                description:
                    "Unfiltered Craft Lager - Zenne Pils is een bier van lage gisting. Gebrouwen in de traditionele decoctie-methode wat diepte en complexiteit aan het moutige karakter geeft. Licht troebel met een fijne bitterheid. Genereus gehopt met nobele oude variëteiten van Duitse hops.",
            },
        ],
    },
    {
        number: 26,
        name: "Swiekes",
        link: "https://www.swiekes.be",
        location: "balzaal",
        description:
            "Swiekes is ontstaan nadat hun brouwer, met de mooie naam ‘Kalverliefde’ het levenslicht zag als gelegenheidsgeschenk voor het huwelijk van een nichtje. Het bier blijkt echter een schot in de roos en er wordt besloten om het op de markt te brengen onder de naam Swiekes. De naam verwijst naar een oude bijnaam van Marc, de brouwer van het gezelschap.",
        beers: [
            {
                name: "Swiekes Tripppel",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "1",
                volume: "Tap + fles 33cl",
                description:
                    "Back to Basics heerlijk gecarboniseerde en fijn doordrinkbare tripel met fruitige toetsen (banaan, sinaas). Dry hopped met citrus hoppen.",
            },
            {
                name: "Swiekes Black Out",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,80%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Strong dark ale met een stevige body en een lekker lange afdronk. In de neus fruitige toetsen van peer, rozijn, een vleugje dadel, verder kandij en amandel. Smaak van chocolade, drop, koffie, rozijnen en caramel met een zeer subtiele onderliggende hoptoets",
            },
        ],
    },
    {
        number: 27,
        name: "Het Anker",
        link: "www.hetanker.be/",
        location: "balzaal",
        description:
            "De Mechelse stadsbrouwerij Het Anker geniet wereldwijd faam met het gerenommeerde Gouden Carolusbier. Ze stamt uit 1471 en is een van de oudste brouwerijen van België.",
        beers: [
            {
                name: "Gouden Carolus Tripel  ",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,00%",
                price: "1",
                volume: "tap",
                description:
                    "Tripel - Bier met een volmondige smaak die toch dorstlessend werkt",
            }, {
                name: "La Cambre Blond ",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1",
                volume: "tap",
                description:
                    "Blond - Brussels abdijbier, blond en verfrissend",
            }, {
                name: "Gouden Carolus Whisky Infused",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "11,70%",
                price: "1,5",
                volume: "fles",
                description:
                    "Donker speciaalbier - krachtig en volmondig met subtiele toetsen van vanille, eikenhout en chocolade. Een keizerlijk brouwsel om te koesteren.",
            }, {
                name: "La Cambre IPA ",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "4,90%",
                price: "1",
                volume: "fles",
                description:
                    "IPA - Brussels abdijbier, verfrissend en rijkelijk gehopt",
            }
        ],
    },
    {
        number: 28,
        name: "Lupulus",
        link: "https://www.lupulus.be",
        location: "balzaal",
        description:
            "Brouwerij Lupulus uit Courtil, Henegouwen, is een echte familiebrouwerij waar de vader en zijn 2 zonen aan het hoofd staan. De Latijnse naam voor hop is Humulus Lupulus, wat letterlijk vertaald « kleine nederige wolf » betekent.  Vandaar de naam, Lupulus, en het logo met de kleine wolf.",
        beers: [
            {
                name: "Lupulus Blonde",
                days: "Beschikbaar op zaterdag",
                procent: "8,50%",
                price: "1",
                volume: "tap",
                description:
                    "Goudblonde tripel, lichtjes gesluierd, met een ivoorkleurige schuimkraag. Citrus en mout aroma's, lichtjes hoppig. Fris en gecontroleerde bitterheid, met kruidige smaak van thijm.",
            }, {
                name: "Lupulus Fructus",
                days: "Beschikbaar op zaterdag",
                procent: "4,20%",
                price: "2",
                volume: "tap",
                description:
                    "Fruitbier. Rode kleur \"vermillon\" bedekt met een roos kleurige schuim. Aroma's van frambozen en zure kersen. Fruitige smaken met een pittige nasmaak.",
            }, {
                name: "Lupulus Blanche",
                days: "Beschikbaar op zaterdag",
                procent: "4,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Witbier, licht gesluierd en met een fijne schuimkraag. Een fris aromatische neus met een zachte toets van citrus. Verfrissende smaken, met een aangename lichte bittere toets in de afdronk.",
            }, {
                name: "Lupulus Bruin",
                days: "Beschikbaar op zaterdag",
                procent: "8,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Een artisanaal bruin bier, licht donker, met mooie heldere reflecties. Verschillend van de traditionele bruine dubbels, door zijn zachte karakter en lichte citrus van aroma's in de afdronk.",
            },
            {
                name: "Lupulus Hopera",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "tap",
                description:
                    "Pale Ale. Amberkleurig, lichtjes troebel bier. Een krachtige neus, met een breed aromatisch hoppig palet. Droog , met een uitgesproken maar gebalanceerde bitterheid.",
            }, {
                name: "Lupulus Hibernatus",
                days: "Beschikbaar op zondag",
                procent: "9,50%",
                price: "1",
                volume: "tap",
                description:
                    "Dark Ale.Lupulus Sterk donker bier. Eens aan het kookpunt, wordt een beetje canneel toegevoegd. De mix met getorrificeerde gist geeft dit bier een krachtig karakter. De nasmaak is bitterzoet en eindigd met koffiearoma's.",
            }, {
                name: "Lupulus Organicus",
                days: "Beschikbaar op zondag",
                procent: "8,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Bio tripel. Goudkleurig, lichtjes gesluierd met een witte kol. Florale aroma's met een lichte geur van gist. Fruitige en kruidachtige smaken met een aangename bitterheid op het einde van de degustatie.",
            }, {
                name: "Lupulus Pils",
                days: "Beschikbaar op zondag",
                procent: "5,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Pilsje tussendoor, toch ?",
            }
        ],
    },
    {
        number: 29,
        name: "De Keukenbrouwers",
        link: "https://www.dekeukenbrouwers.be",
        location: "balzaal",
        description:
            "Deze microbrouwerij uit Hove is misschien één van de kleinste brouwerijen van België. Ze zijn bekend van hun Hip-Hop-bieren.",
        beers: [
            {
                name: "HipHop Tripel3X6",
                days: "Beschikbaar op zaterdag",
                procent: "8,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Lichte Tripel - Gebrouwen met tarwe, pilsmout en haver met duidelijk een lichte hop toets aanwezig",
            }, {
                name: "HipHop Double IPA",
                days: "Beschikbaar op zaterdag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Double IPA - Gemaakt van 100% Munich mout, meervoudige hop gift tijdens de kook en gedryhopt.",
            }, {
                name: "HipHop Funky Chicken",
                days: "Beschikbaar op zaterdag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Een IPA met een extra toets van Australische Habanero pepers die een tinteling geven die leuk samen gaat met de aromatische hoppen.",
            }, {
                name: "HipHop Blond",
                days: "Beschikbaar op zaterdag",
                procent: "4,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Licht blond Bier - Vlot drinkbare dorstlesser.",
            },
            {
                name: "HipHop Milkshake",
                days: "Beschikbaar op zondag",
                procent: "6,50%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "IPA met een milkshake toets, de fruitigheid van hop en zoet van melksuiker.",
            }, {
                name: "HipHop Orange Crush",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "tap",
                description:
                    "IPA - Met Mandarina Bavaria hop en stevige hoeveelheid appelsienschil toegevoegd, bier met een serieuze citrus toets.",
            }, {
                name: "HipHop Weyninckhoven",
                days: "Beschikbaar op zondag",
                procent: "6,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Saison - Een bescheiden Kasteel Bier/Saison, een mengbier van twee verschillende brouwsels. Zeer toegankelijk voor iedere bierliefhebber.",
            }, {
                name: "HipHop Monk Johnny",
                days: "Beschikbaar op zondag",
                procent: "10,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Quadruppel - Gebrouwen met maximale dosis moutstort waaronder geroosterde mouten met toevoeging van de vBelgische specialiteit kandijsuiker. Ga zitten en geniet van deze goddelijke drank.",
            }
        ],
    },
    {
        number: 30,
        name: "Ter Dolen",
        link: "https://www.terdolen.be/bieren",
        location: "balzaal",
        description: "Deze brouwerĳ uit Helchteren is geïnstalleerd in de voorkamers van een middeleeuws kasteel en behoort ondertussen tot de klassiekers van Limburg. De brouwerĳ bevindt zich kortbij, op slechts drie (lange) straten van TBE en is een trekpleister voor fietsers en wandelaars in deze regio.",
        beers: [
            {
                name: "Ter Dolen Blond",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,10%",
                price: "1",
                volume: "tap",
                description:
                    "Het eerste Limburgs Abdijbier in 1994 gecreëerd op Ter Dolen. Gebrouwen met twee soorten mout en twee edele hopsoorten, hergist op fles. Een volle zachte smaak, een goede dorstlesser.",
            },
            {
                name: "Ter Dolen Armand",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,00%",
                price: "1",
                volume: "tap",
                description:
                    "Een fruitig blond bier met een explosie van citrus, resultaat van dry-hopping met de Amerikaanse hopsoort Cascade. Om de hoparoma’s te bewaren wordt het bier niet gefilterd. Licht troebel met een kraakwitte schuimkraag. Ontworpen ter ere van de medestichter “Armand Desplenter”, vader van Mieke Desplenter.",
            },
            {
                name: "Ter Dolen Tripel",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,10%",
                price: "1",
                volume: "tap",
                description:
                    "Een volwaardige volmout tripel van koperblonde kleur, met twee soorten mout en twee soorten hop. Door bij het brouwen uitsluitend graan te gebruiken wordt de malsheid nog versterkt en heeft dit bier een rijke volmondigheid.",
            },
            {
                name: "Ter Dolen Kriek",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "4,50%",
                price: "1",
                volume: "tap",
                description:
                    "Ongefilterd bier van hoge gisting met toevoeging van vers kriekensap, gemaakt van één soort mout en tarwe en twee soorten hop. Met een finishing touch van kruiden als koriander en sinaasappelschillen. Het is een zoet fruitbier met een citroenzure toets zonder de echte biersmaak te verloochenen.",
            }
        ],
    },
    {
        number: 31,
        name: "Butchers Tears",
        link: "https://www.butchers-tears.com/",
        location: "ZwarteZaal",
        description: "Uit het mooie Amsterdam komt Butcher's Tears. Zij brouwen moderne bieren van open gisting met een voorliefde voor het verfijnen van de klassieke technieken en houden de rijke Europese biercultuur in ere!",
        beers: [
            {
                name: "Nobody's Darling",
                days: "Beschikbaar op zaterdag",
                procent: "7,00%",
                price: "1,5",
                volume: "vat van 20 liter",
                description: "Stock Pale Ale"
            },
            {
                name: "Monster Soup SSS",
                days: "Beschikbaar op zaterdag",
                procent: "10,50%",
                price: "1,5",
                volume: "vat van 20 liter",
                description: "1877 Reid Triple Stout"
            }, {
                name: "So What",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,00%",
                price: "1,5",
                volume: "vat van 20 liter",
                description: "English Strong Ale blended with malt vinegar"
            },
            {
                name: "Splash",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,20%",
                price: "1,5",
                volume: "vat van 20 liter",
                description: "Collab with Nevel, chevalier table beer with bog myrtle"
            }, {
                name: "De Fluiter",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,10%",
                price: "1",
                volume: "fles 33cl",
                description: "Beirisch/Dark Lager"
            }, {
                name: "Headroom",
                days: "Beschikbaar op zondag",
                procent: "7,50%",
                price: "1,5",
                volume: "vat van 20 liter",
                description: "London Double Brown Stout"
            },
            {
                name: "Aruspex",
                days: "Beschikbaar op zondag",
                procent: "8,00%",
                price: "1,5",
                volume: "vat van 20 liter",
                description: "Peated Old Burton Ale"
            }
        ]
    }, {
        number: 32,
        name: "Kemker Kultuur",
        link: "https://www.brauerei-kemker.de",
        location: "ZwarteZaal",
        description:
            "Brauerei Kemker Kultuur is het project van Jan Kemker en zijn partner Nicole Marzec. De bouwerij, gelegen net buiten het Duitse Münster, startte in 2017 en specialiseert zich in klassieke stijlen, houtgerijpte zure bieren en ciders.",
        beers: [
            {
                name: "Appel Wien",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1,5",
                volume: "vat van 20 liter",
                description:
                    "Spontanious Farmhouse Cider made from apples of local field orchads, fermented in american oak barrels. Nothing added, nothing removed.",
            },
            {
                name: "Mandarina",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles 75cl",
                description:
                    "Barrel-aged saison brewed with organic barley and wheat malt. Hopped with Mandarina Bavaria and Styrian Goldings. Fermented in barrels for more than a year. ",
            },
            {
                name: "Venn",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles 75cl",
                description:
                    "Gagelbier. Bog myrtle added like in the medieval Munster gruit beers. A blend that aged for 21 months in red wine barrels.",
            },
            {
                name: "Aenne",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles 75cl",
                description:
                    "Hoppy Saison brewed with organic barley malt and good amount of Golding and Saaz wholesome hops. Wild beer dedicated to grandma Anni.",
            },
            {
                name: "Aolt Beer",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles 75cl",
                description:
                    "Batch 13-2021. Historic sour beer of Münster aged in Chardonnay barrels for nearly two years. Wine-like character with lots to discover.",
            },
            {
                name: "Stadtland Bier",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "3,50%",
                price: "1,5",
                volume: "fles 75cl",
                description:
                    "Easy drinking Saison. Brewed with organic malts, German and British hops en fermented the Kemker houseculture. Moderately Dry-hopped.",
            },
            {
                name: "Gentiana",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "7,00%",
                price: "1,5",
                volume: "fles 75cl",
                description:
                    "Amaro Ale, inspired by European bitter liquors and gruit culture. Gentian root, hogweed, lemon verbena and bog myrtle. Beer with interplay between bitter and sourness.",
            },
            {
                name: "Fröjaor",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "1,5",
                volume: "fles 75cl",
                description:
                    "Herbal beer dedicated to the seasons. Flowery aroma with pithy bitterness due to dandelions. Blended in red wine barrels.",
            },
        ],
    },
    {
        number: 33,
        name: "De La Sambre",
        link: "https://www.brasseriedelasambre.com",
        location: "ZwarteZaal",
        description:
            "Brasserie De La Sambre bevindt zich in Spy, in een prachtige meer dan 800 jaar oude hoeve. Het is een prachtige en inspirerende plek waar ze zowel moderne bieren als traditionele Waalse bieren brouwen. Let op het prachtige logo dat perfect match met de location van The Beer Experience.",
        beers: [
            {
                name: "Ceréjhe",
                days: "Beschikbaar op zaterdag",
                procent: "6,80%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Ceréjhe' is used to designate cherries in Wallonian dialect. A delicate blend of saison (spring barley, Wallonian Winter barley, spelt & wheat) fermented with our own strain, 1 year old lambic and Mont Ventoux cherries. The cherries underwent a 7 months long fermentation at cold temperature and were left intact during the entire process to allow the aromas to slowly diffuse into the beer. The maceration was then back blended with the base saison to reach a balance between the saison, the lambic and the cherries. Not meant to be a cherry bomb, more a delicate note of these beautiful fruits.",
            },
            {
                name: "Poere du Cwin",
                days: "Beschikbaar op zaterdag",
                procent: "6,70%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Poere Di Cwin' is used to designate quince in Wallonian dialect. A blend of saison (spring barley, Wallonian Winter barley, spelt), 1 year old lambic and Wallonian quince, fermented for 1 year in ex-Meursault barrel. Rustic notes from the grains and the saison yeast profile blend with the complexity and tea notes of the quince. The barrel offers a solid wooden backbone and the white wine imparts some minerality and refreshes the overall beer profile.",
            },
            {
                name: "Socoron barrel-aged",
                days: "Beschikbaar op zaterdag",
                procent: "6,70%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Socoron' is used to designate 6 row winter barley in Wallonian dialect and translates as \"Escourgeon\" in French. This traditional saison is brewed with malted and raw local 6 row winter barley which is more challenging to work with and has a much lower yield which explains its rarity in modern beer. However, it creates a deep rustic profile with earthy and bready notes. A traditional farmhouse yeast strain combining high attenuation and a complex fermentation profile that displays white spices, lemon, grapes and grassy herbal notes. This version is then aged in Meursault barrel that has been emptied the day before the beer was transferred in it. We didn't sanitize the barrel so that the micro-flora from the wine can impart its identity to the base beer. The flora imparts a nice tart kick that brightens the overall beer while the wood character from the barrel provides additional structure.",
            }
        ],
    },
    {
        number: 34,
        name: "Chien Blue",
        link: "https://www.chienbleu.ch/",
        location: "ZwarteZaal",
        description:
            "Uit Genéve, Zwitserland, komt Chien Bleu Brasserie en ze brengen bieren die traditie combineert met moderniteit. De bieren in het reguliere assortiment worden gefermenteerd met gisten uit agrarische tradities met de nadruk op granen, evenals Europese en Amerikaanse hop.",
        beers: [
            {
                name: "Chien Bleu Otto",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,90%",
                price: "2",
                volume: "fles 33cl",
                description:
                    "Blend of Bière de Garde with Autumn Fruits aged 20 months (20% of the blend) and an Amber Ale aged 6 months in Barrels. Added with Local Herbs and Orange / Grapes maceration",
            },
            {
                name: "Chien Bleu Giotto",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Blended of 60% young prune beer with 20% grape beer (Pinot Noir)and 20% spontaneous cherry beer from 2019",
            },
            {
                name: "Chien Andalou",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Three spontan beers blend with Solera method, 3 years (20%), 2 years (20%) & 1 year (60%). Barrel aged in Sherry and Pedro Ximenez",
            },
            {
                name: "Abricot 2021",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,70%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Saison / Farmhouse ale met abrikozen",
            },
            {
                name: "Pêche Jaune 2021",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,70%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Saison / Farmhouse ale met perziken ",
            },
            {
                name: "Sybil",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,20%",
                price: "2",
                volume: "fles 75cl",
                description:
                    "Saison / Farmhouse ale met aardbei, rabarber en sparrenknoppen",
            },
        ],
    },
    {
        number: 35,
        name: "Antidoot Wilde Fermenten",
        link: "https://www.antidoot.be",
        location: "ZwarteZaal",
        description:
            "Twee broers, de ene filosoof, de andere arts, droomden van een eigen bier. Ze experimenteerden met eigen oogst en met de wilde gisten die in het Hageland in de lucht hangen. Regels gingen op de schop, de grenzen met wijn en cider vervaagden. Intussen heeft Antidoot wereldfaam bereikt en zo zetten zij Kortenaken op de wereldkaart van het bier.",
        beers: [
            {
                name: "Gorsem / Framboos 2021",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,50%",
                price: "2,5",
                volume: "fles 75cl",
                description:
                    "Zowel de lokale Gorsemkriek (a ratio van 200 gr/l) als frambozen (100 gr/l) zijn toegevoegd aan een bier dat 16 maanden op vat rijpte. Gebotteld in aug. 2020. De pittige fruit maceratie proef je met een wonderlijke directheid.",
            },
            {
                name: "Illuminé / Perzik-Nectarine",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "2,5",
                volume: "fles 75cl",
                description:
                    "Organische perzikken en nectarines (300 gr/l) zijn toegevoegd aan een bier dat 16 maanden op vat rijpte. Gebotteld in aug. 2020. Verrassend subtiel, aromatische kwaliteiten van beide fruiten, net als de lichte zuurheid van het bier, pure harmonie.",
            },
            {
                name: "TBD Ongedorst",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,00%",
                price: "2",
                volume: "fles 75cl",
                description: "Farmhouse ale gemaakt met gerstemout, ongepelde spelt en ruwe haver. Mooi aroma, funky karakter, droge afdronk. Rijpte twee jaar in eiken vaten, gebotteld in nov. 2021.",
            },
            {
                name: "L'Ambigu Alsace",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "8,50%",
                price: "2",
                volume: "fles 75cl",
                description: "In 2020 maakte Antidoot een gemacereerde wijn van typische Alsatische druiven. Na de primaire gisting werd de wijn aan een 9 maanden oud vat bier toegevoegd waarna ze samen opnieuw 9 maanden verouderden.",
            },
        ],
    },
    {
        number: 36,
        name: "Beer4Nature",
        link: "https://www.beer4nature.be",
        location: "terras",
        description:
            "Drie dynamische Kempenzonen met een passie voor bier en een passie voor natuur. Alle winsten van Beer4nature worden aangewend om bossen te kopen zodat er ook in de toekomst nog bossen zijn waar we allemaal kunnen wandelen, spelen of gewoonweg genieten van de natuur!",
        beers: [
            {
                name: "Hert",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,70%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Eerste bier van B4N en de bestseller. Een vol, kruidig blond bier met ietwat hoppig karakter en frisse en fruitige afdronkt. ",
            },
            {
                name: "Voske",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "5,30%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "De gracieuze speelsheid en het eigenzinnig karakter van de vos zijn ondergebracht in het bier. Pilsmouten én karamelmouten die de rossige, vossige kleur geven. Afgewerkt met een eigenzinnige lambiekgist, krijgt het Voske een heel pure smaak en een fris zuurtje.",
            },
            {
                name: "Ne Kemping original",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "6,20%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Nieuw. De frisse, fruitige geur van dit natuurlijk goudgele bier verraadt de zomerse kampeerweide. De subtiele bitterheid en de milde zoetheid maken het een smaakvolle dorstlesser.",
            },
            {
                name: "Wisent",
                days: "Beschikbaar op zaterdag en zondag",
                procent: "9,00%",
                price: "1",
                volume: "fles 33cl",
                description:
                    "Quadrupel, Oak Aged Bourbon Infused. Bruin, machtig, Bizon-der bier. Donkere kleur, vol van smaak, beetje houtsmaak.",
            }
        ],
    },
];
const extraBrewer = {
    number: 5,
    name: "Vicus (zondag)",
    link: "www.vicusbier.be",
    location: "bovendek",
    description:
        "In het Kempisch dorpje Ham waagde brouwer Rudy zich enkele jaren geleden aan het uittesten van een aantal recepten in een oude wasmachine. Al snel verwende hij ons rijke bierland met een nieuwe creatie ambachtelijk gebrouwen bier. Vrienden proefden dit artisanale product en beslisten om deze hobby uit te bouwen tot een heus project. Ondertussen sprongen cafés, restaurants en drankcenters op de kar waardoor het nieuwe bier, genaamd Vicus, op menige (bier)kaart belandde. De wasmachine werd intussen ingeruild voor echte brouwketels waardoor het Vicus-verhaal zich nog steeds verder blijft ontwikkelen.",
    beers: [
        {
            name: "Vicus Tripel",
            days: "Beschikbaar op zondag",
            procent: "8,00%",
            price: "1",
            volume: "fles 33cl",
            description: "Amberblond, zacht bier met fijne bitterheid. Fruitig aroma en pittige moutsmaak. Volwaardig degustatiebier dat voor een breed publiek in de smaak valt.",
        },
        {
            name: "Vicus Scura",
            days: "Beschikbaar op zondag",
            procent: "7,00%",
            price: "1",
            volume: "fles 33cl",
            description: "Dit bier haalt zijn karakter uit de gebrande mouten. Deze zorgen voor fijne koffie en chocolade toetsen. Karaktervol bier met een lange afdronk.",
        },
        {
            name: "Vicus Oro",
            days: "Beschikbaar op zondag",
            procent: "5,50%",
            price: "1",
            volume: "fles 33cl",
            description: "Categorie van de \"speciale belge\" . Amber bier en dorstlesser die zich vlot laat drinken.",
        },
        {
            name: "Vicus Inverno",
            days: "Beschikbaar op zondag",
            procent: "11,00%",
            price: "1",
            volume: "fles 33cl",
            description: "Een donker 'degustatiebier', zeer rijk aan smaken door de juiste mix van 6 moutsoorten, kruiden en enkele fijne hopsoorten.",
        }
    ]
}

function showBrewerInformation(button) {
    sessionStorage.clear();
    // ASSIGN BROUWER
    let brouwer = brewers.find((brouwer) => brouwer.number === button);

    clearAllData();

    // DESKTOP
    if (getDeviceType() === "desktop") {
        // SHOW DATA
        document.getElementById("brouwerName").innerHTML = (brouwer.number.toString() + ". " + brouwer.name);
        document.getElementById("brouwerDescription").innerHTML = brouwer.description;
        document.getElementById("brouwerLink").innerHTML = brouwer.link.substring(
            brouwer.link.indexOf(".") + 1
        );

        // SET HREF
        document.getElementById("brouwerLink").href = brouwer.link;

        // SHOW BEERS
        for (let i = 0; i < brouwer.beers.length; i++) {
            // ASSIGN
            let currentBeer = brouwer.beers[i];

            // SHOW NAME
            const name = document.createElement("h5");
            name.classList.add("beerItem");
            const nameText = document.createTextNode(
                currentBeer.name + " - " + currentBeer.procent
            );
            name.appendChild(nameText);

            const allBeers = document.getElementById("allBeers");
            allBeers.appendChild(name);

            // SHOW DETAILS
            const listElement = document.createElement("ul");
            allBeers.appendChild(listElement);
            //Description
            const description = document.createElement("li");
            description.classList.add("beerListItem");
            description.innerHTML = currentBeer.description;
            listElement.appendChild(description);
            //Volume
            const volume = document.createElement("li");
            volume.classList.add("beerListItem");
            volume.innerHTML = "Beschikbaar uit " + currentBeer.volume;
            // listElement.appendChild(volume);
            //Price
            const price = document.createElement("li");
            price.classList.add("beerListItem");
            price.innerHTML = "Prijs: " + currentBeer.price + " bon(nen)";
            listElement.appendChild(price);
            //Days
            const days = document.createElement("li");
            days.classList.add("beerListItem");
            days.innerHTML = currentBeer.days;
            listElement.appendChild(days);
        }
        if (button === 5) {
            // SHOW DATA
            document.getElementById("brouwerName-2").innerHTML = (extraBrewer.number.toString() + ". " + extraBrewer.name);
            document.getElementById("brouwerDescription-2").innerHTML = extraBrewer.description;
            document.getElementById("brouwerLink-2").innerHTML = extraBrewer.link.substring(
                extraBrewer.link.indexOf(".") + 1
            );

            // SET HREF
            document.getElementById("brouwerLink-2").href = extraBrewer.link;

            // SHOW BEERS
            for (let i = 0; i < extraBrewer.beers.length; i++) {
                // ASSIGN
                let currentBeer = extraBrewer.beers[i];

                // SHOW NAME
                const name = document.createElement("h5");
                name.classList.add("beerItem");
                const nameText = document.createTextNode(
                    currentBeer.name + " - " + currentBeer.procent
                );
                name.appendChild(nameText);

                const allBeers = document.getElementById("allBeers-2");
                allBeers.appendChild(name);

                // SHOW DETAILS
                const listElement = document.createElement("ul");
                allBeers.appendChild(listElement);
                //Description
                const description = document.createElement("li");
                description.classList.add("beerListItem");
                description.innerHTML = currentBeer.description;
                listElement.appendChild(description);
                //Volume
                const volume = document.createElement("li");
                volume.classList.add("beerListItem");
                volume.innerHTML = "Beschikbaar uit " + currentBeer.volume;
                // listElement.appendChild(volume);
                //Price
                const price = document.createElement("li");
                price.classList.add("beerListItem");
                price.innerHTML = "Prijs: " + currentBeer.price + " bon(nen)";
                listElement.appendChild(price);
                //Days
                const days = document.createElement("li");
                days.classList.add("beerListItem");
                days.innerHTML = currentBeer.days;
                listElement.appendChild(days);
            }
        }
        // MOBILE
    } else {
        // Get the modal
        const modal = document.getElementById("BrouwerModal");
        modal.classList.add("brewerModal");

        // SHOW BROUWER DATA
        document.getElementById("brouwerName-mobile").innerHTML = (brouwer.number.toString() + ". " + brouwer.name);
        document.getElementById("brouwerDescription-mobile").innerHTML = brouwer.description;
        document.getElementById("brouwerLink-mobile").innerHTML = brouwer.link.substring(
            brouwer.link.indexOf(".") + 1
        );

        // SET HREF
        document.getElementById("brouwerLink-mobile").href = brouwer.link;

        // SHOW BEERS
        for (let i = 0; i < brouwer.beers.length; i++) {
            // ASSIGN
            let currentBeer = brouwer.beers[i];

            // SHOW NAME
            const name = document.createElement("h5");
            name.classList.add("beerItem-mobile");
            const nameText = document.createTextNode(
                currentBeer.name + " - " + currentBeer.procent
            );
            name.appendChild(nameText);

            const allBeers = document.getElementById("allBeers-mobile");
            allBeers.appendChild(name);

            // SHOW DETAILS
            const listElement = document.createElement("ul");
            allBeers.appendChild(listElement);
            //Description
            const description = document.createElement("li");
            description.classList.add("beerListItem-mobile");
            description.innerHTML = currentBeer.description;
            listElement.appendChild(description);
            //Volume
            const volume = document.createElement("li");
            volume.classList.add("beerListItem-mobile");
            volume.innerHTML = "Beschikbaar uit " + currentBeer.volume;
            // listElement.appendChild(volume);
            //Price
            const price = document.createElement("li");
            price.classList.add("beerListItem-mobile");
            price.innerHTML = "Prijs: " + currentBeer.price + " bon(nen)";
            listElement.appendChild(price);
            //Days
            const days = document.createElement("li");
            days.classList.add("beerListItem-mobile");
            days.innerHTML = currentBeer.days;
            listElement.appendChild(days);
        }
        if (button === 5) {
            // SHOW BROUWER-2 DATA
            document.getElementById("brouwerName-mobile-2").innerHTML = (extraBrewer.number.toString() + ". " + extraBrewer.name);
            document.getElementById("brouwerDescription-mobile-2").innerHTML = extraBrewer.description;
            document.getElementById("brouwerLink-mobile-2").innerHTML = extraBrewer.link.substring(
                extraBrewer.link.indexOf(".") + 1
            );

            // SET HREF
            document.getElementById("brouwerLink-mobile-2").href = extraBrewer.link;

            // SHOW BEERS
            for (let i = 0; i < extraBrewer.beers.length; i++) {
                // ASSIGN
                let currentBeer = extraBrewer.beers[i];

                // SHOW NAME
                const name = document.createElement("h5");
                name.classList.add("beerItem-mobile-2");
                const nameText = document.createTextNode(
                    currentBeer.name + " - " + currentBeer.procent
                );
                name.appendChild(nameText);

                const allBeers = document.getElementById("allBeers-mobile-2");
                allBeers.appendChild(name);

                // SHOW DETAILS
                const listElement = document.createElement("ul");
                allBeers.appendChild(listElement);
                //Description
                const description = document.createElement("li");
                description.classList.add("beerListItem-mobile-2");
                description.innerHTML = currentBeer.description;
                listElement.appendChild(description);
                //Volume
                const volume = document.createElement("li");
                volume.classList.add("beerListItem-mobile-2");
                volume.innerHTML = "Beschikbaar uit " + currentBeer.volume;
                // listElement.appendChild(volume);
                //Price
                const price = document.createElement("li");
                price.classList.add("beerListItem-mobile-2");
                price.innerHTML = "Prijs: " + currentBeer.price + " bon(nen)";
                listElement.appendChild(price);
                //Days
                const days = document.createElement("li");
                days.classList.add("beerListItem-mobile-2");
                days.innerHTML = currentBeer.days;
                listElement.appendChild(days);
            }
        }
        modal.style.display = "block";
    }
}

// FOOD
// ====
const food = [
    {number: 1, name: "Portie gemengd", food: [{name: "Portie (gemengd) kaas en salami", price: "1,5 jetons"}]},
    {
        number: 2,
        name: "Gebrande winning",
        food: [{
            name: "Knocking on a heavens door: Kop/ pickels/ toast",
            price: "3 jetons"
        }, {
            name: "Orlof: 36 uur gegaarde varkens nek/ Bourgogne de Flandres/ eisbien/ Oude Orval kaas/ rode kool ",
            price: "3 jetons"
        }, {name: "Panna cotta van hopscheuten: hopscheuten/ krab/ kwartelei/ waterkers ", price: "4 jetons"}]
    },
    {number: 3, name: "Hilaire", food: [{name: "Biltong (Beef Jerky) en gedroogde kaantjes", price: "2 jetons"}]},
    {
        number: 4,
        name: "Friet",
        food: [{name: "Echte Belgische frietjes", price: "2 jetons"}, {
            name: "vlees bij friet",
            price: "1 jeton"
        }, {name: "hamburger", price: "2 jetons"}, {name: "braadworst", price: "2 jetons"}, {
            name: "mexicano",
            price: "2 jetons"
        }]
    },
    {
        number: 5,
        name: "Smokey food",
        food: [{name: "Cheesy Bacon Burger ", price: "3,5 jetons"}, {
            name: "Cheesy Veggie Burger",
            price: "3 jetons"
        }, {name: "Nacho’s pulled chicken to share", price: "3 jetons"}, {
            name: "Veggie Nacho's to share ",
            price: "2,5 jetons"
        }, {name: "Low & Slow BBQ Spareribs ", price: "3,5 jetons"}]
    },
    {
        number: 6,
        name: "Rainerie",
        food: [{name: "Broodje porchetta", price: "2 jetons"}, {
            name: "stuk pizza",
            price: "2 jetons"
        }, {name: "portie pasta", price: "2 jetons"}]
    },

]

function showFoodInformation(location) {
    sessionStorage.clear();
    // ASSIGN FOOD
    let chosenFoodItem = food.find((foodItem) => foodItem.name === location);

    clearAllData();

    if (getDeviceType() === "desktop") {
        // SHOW DATA
        document.getElementById("foodName").innerHTML = (chosenFoodItem.name);


        for (let i = 0; i < chosenFoodItem.food.length; i++) {
            // ASSIGN
            let currentFood = chosenFoodItem.food[i];

            const allFood = document.getElementById("allFood");
            // SHOW DETAILS
            const listElement = document.createElement("ul");
            allFood.appendChild(listElement);
            //Description
            const foodName = document.createElement("li");
            foodName.classList.add("foodListItem");
            foodName.innerHTML = currentFood.name + " - " + currentFood.price;
            listElement.appendChild(foodName);
        }
    } else {
        // Get the modal
        const modal = document.getElementById("FoodModal");
        modal.classList.add("foodModal");

        // SHOW BROUWER DATA
        document.getElementById("foodName-mobile").innerHTML = (chosenFoodItem.name);
        for (let i = 0; i < chosenFoodItem.food.length; i++) {
            // ASSIGN
            let currentFood = chosenFoodItem.food[i];

            const allFood = document.getElementById("allFood-mobile");
            // SHOW DETAILS
            const listElement = document.createElement("ul");
            allFood.appendChild(listElement);
            //Description
            const foodName = document.createElement("li");
            foodName.classList.add("foodListItem-mobile");
            foodName.innerHTML = currentFood.name + " - " + currentFood.price;
            listElement.appendChild(foodName);
        }
        modal.style.display = "block";
    }
}

function showFillerInformation() {
    sessionStorage.clear
    clearAllData();
    if (getDeviceType() === "desktop") {
        document.getElementById("foodName").innerHTML = "Dit is een spoelstand waar je na iedere biertasting je glas kan uitspoelen.";
    } else {
        const modal = document.getElementById("spoelModal");
        modal.classList.add("foodModal");
        document.getElementById("spoel").innerHTML = "Dit is een spoelstand waar je na iedere biertasting je glas kan uitspoelen.";

        modal.style.display = "block";
    }

}

// MUSIC
// =====
function showMusic() {
    sessionStorage.clear();
    clearAllData();
    const timesheet = document.getElementById("Timesheet");
    timesheet.style.display = "block";
}

// EXTRA
// =====
const clearAllData = () => {
    //BEER
    // Delete brewers on HTML
    document.getElementById("brouwerName").innerHTML = "";
    document.getElementById("brouwerDescription").innerHTML = "";
    document.getElementById("brouwerLink").innerHTML = "";
    document.getElementById("brouwerName-2").innerHTML = "";
    document.getElementById("brouwerDescription-2").innerHTML = "";
    document.getElementById("brouwerLink-2").innerHTML = "";
    // Delete brewers on modal
    document.getElementById("brouwerName-mobile").innerHTML = "";
    document.getElementById("brouwerDescription-mobile").innerHTML = "";
    document.getElementById("brouwerLink-mobile").innerHTML = "";
    document.getElementById("brouwerName-mobile-2").innerHTML = "";
    document.getElementById("brouwerDescription-mobile-2").innerHTML = "";
    document.getElementById("brouwerLink-mobile-2").innerHTML = "";
    // Delete beers on HTML
    document.getElementById("allBeers").innerHTML = '';
    document.getElementById("allBeers-2").innerHTML = '';
    // Delete beers on modal
    document.getElementById("allBeers-mobile").innerHTML = '';
    document.getElementById("allBeers-mobile-2").innerHTML = '';


    // FOOD
    // Delete foodName on HTML
    document.getElementById("foodName").innerHTML = "";
    // Delete foodName on modal
    document.getElementById("foodName-mobile").innerHTML = "";
    // Delete allFood on HTML
    const oldBeers = document.getElementById("allFood");
    oldBeers.innerHTML = '';
    // Delete allFood on modal
    document.getElementById("allFood-mobile").innerHTML = "";

    hideModal();
}

const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

function hideModal() {
    const brewermodal = document.getElementById("BrouwerModal");
    brewermodal.style.display = "none";
    const foodmodal = document.getElementById("FoodModal");
    foodmodal.style.display = "none";
    const spoelModal = document.getElementById("spoelModal");
    spoelModal.style.display = "none";
    const timesheet = document.getElementById("Timesheet");
    timesheet.style.display = "none";
}