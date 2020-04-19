var x = document.getElementById("snackbar")
function updateMap() {
  //trac user loc
  const geoLocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }
  )
  //zoom to user loc
  map.addControl(geoLocate);
  geoLocate.on('geolocate', function (e) {
    map.flyTo({
      center: [e.coords.longitude, e.coords.latitude],
      zoom: 13.5 //set zoom 
    });
  });

  //Read Json file
  carea =[
    {
        "location": [
            19.07747605800006,
            72.84585164400005
        ],
        "address": "golibar,khar,mumbai 400055"
    },
    {
        "location": [
            19.057122126000024,
            72.84257840900005
        ],
        "address": "bala saheb galli, behram nagar, bandra east-400055"
    },
    {
        "location": [
            19.06255622300006,
            72.84389299600008
        ],
        "address": "pathar nagar, bharat nagar,BKC bandra east mumbai 400055"
    },
    {
        "location": [
            19.079634501000044,
            72.84805043900008
        ],
        "address": "Khalil chawl, saudi nagar, vakola santacruz east 400055"
    },
    {
        "location": [
            19.13369227000004,
            72.85877406700007
        ],
        "address": "madrasa masjid, fish market,jogeshwari east,mumbai-4000060"
    },
    {
        "location": [
            19.139143697000065,
            72.85325870700007
        ],
        "address": "Al faquir mohammad chawl,francis wadi, jogeshwari east 400060"
    },
    {
        "location": [
            19.14083695100004,
            72.86139945800005
        ],
        "address": "mateshwari chawl, behram baug rd, anandr nagar,jogeshwari east 400102"
    },
    {
        "location": [
            19.121833595000055,
            72.84127775000007
        ],
        "address": "usman ali adab chawl, gaondevi dongari, andheri west- 400058"
    },
    {
        "location": [
            19.136130152000078,
            72.84046189500003
        ],
        "address": "jaywanti chawl, sarota pada, andheri west, mumbai 400058"
    },
    {
        "location": [
            19.118127370000025,
            72.82231329800004
        ],
        "address": "ahatre, moragaon, juhu, mumbai 400049"
    },
    {
        "location": [
            19.144411138000066,
            72.80577015600005
        ],
        "address": "ramale house , dongri, versova,andheri west, mumbai-400061"
    },
    {
        "location": [
            19.09563540000005,
            72.89471325900007
        ],
        "address": "saidham chs,ghatkoper andheri road,kurla west, 400072"
    },
    {
        "location": [
            19.047690380000063,
            72.85787174600006
        ],
        "address": "gausiya masjid,dharavi Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, 400017, India"
    },
    {
        "location": [
            19.04372482200006,
            72.85004247900008
        ],
        "address": "janta society, abhudaya bank,dharavi Rizwan Raza, Dharavi Main Road, Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, 400017, India"
    },
    {
        "location": [
            19.005198476000032,
            72.82053658800004
        ],
        "address": "bdd chawl, worli SIEMENS Information Systems Ltd., H R Divekar Marg, BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.00195741300007,
            72.81694836500003
        ],
        "address": "kombdi galli,poddar hosp, worli ESIS Hospital WORLI, Ganpat Jadhav Marg, BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400018, India"
    },
    {
        "location": [
            19.018673800000045,
            72.81916850800008
        ],
        "address": "kranti lane, bua bhaye marg V B Worlikar Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.001004932000058,
            72.81754334100003
        ],
        "address": "bdd chawl,worli BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 40013, India"
    },
    {
        "location": [
            19.01796199100005,
            72.81869763300006
        ],
        "address": "arun prakash sangh G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.01787524200006,
            72.81815676500008
        ],
        "address": "behind BPT quarters,worli, mumbai G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.01939522200007,
            72.81872934700004
        ],
        "address": "near fish market, worli V B Worlikar Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.019012157000077,
            72.81788612000008
        ],
        "address": "daware house G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.075787209000055,
            72.86058542000006
        ],
        "address": "jadhav chawl,behind durga nursing home Durga Maternity and Surgical Nursing Home, Vidya Nagari Marg, Mathuradas Colony, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400098, India"
    },
    {
        "location": [
            19.07161731800005,
            72.91683116200005
        ],
        "address": "pragati chawl, khar east Bhairav Vidyalay, Kamaraj Nagar Road, Kamaraj Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [
            19.055734882000024,
            72.84233838600005
        ],
        "address": "hinga galli, behram nagar,bandra east A K Marg (Station Road), Garib Nagar, H/W Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [
            19.058336590000067,
            72.84446533900007
        ],
        "address": "amrut nagar, kherwadi,bandra east Gandhi Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [
            19.06253580200007,
            72.85837049100007
        ],
        "address": "Basera society BKC, bandra H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400 051, India"
    },
    {
        "location": [
            19.068773239000052,
            72.87925966100005
        ],
        "address": "fitwala compound, pipe road,madarsa, kurla west-400070"
    },
    {
        "location": [
            19.04327898100007,
            72.90931475200006
        ],
        "address": "din quarry road, panjrapole, mumbai 400071"
    },
    {
        "location": [
            19.034097449000058,
            72.89680688200008
        ],
        "address": "vashi naka, shiv sena office, chembur,400071"
    },
    {
        "location": [
            19.067503986000077,
            72.92123974200007
        ],
        "address": "ahilyabai holkar marg,jaffari school, 400043"
    },
    {
        "location": [
            19.06481929100005,
            72.92377942100006
        ],
        "address": "road no 5, shivaji nagar-400043"
    },
    {
        "location": [
            19.062435392000054,
            72.90668143500005
        ],
        "address": "mahtma phule chawl,PL lokhande marg, chembur-400089"
    },
    {
        "location": [
            19.03067654800003,
            72.89648767400007
        ],
        "address": "laxmi nagar,near railway track , mahul road,chembur 400074"
    },
    {
        "location": [
            19.095790587000067,
            72.90520535100006
        ],
        "address": "new daya sagar, near datta mandir-400084"
    },
    {
        "location": [
            19.096917292000057,
            72.90261551100008
        ],
        "address": "barve nagar colony,bhatwadi-400084"
    },
    {
        "location": [
            19.09547255500007,
            72.90107516000006
        ],
        "address": "basling chawl, RB kadam marg,bhatwadi 400084"
    },
    {
        "location": [
            19.097618392000072,
            72.90351675400007
        ],
        "address": "G7 municipal colony, near muktabai hospital,bhatwadi 400084"
    },
    {
        "location": [
            19.104374972000073,
            72.91610807900008
        ],
        "address": "kille shivneri society,ram nagar B,vikroli park site-400079"
    },
    {
        "location": [
            19.18841266800007,
            72.84977676700004
        ],
        "address": "masjid compound, near suchak hospital,malad east,mumbai 400 097"
    },
    {
        "location": [
            19.14302762500006,
            72.79245803000003
        ],
        "address": "aadarsh society, shivaji nagar, gate no 3, madh market, malad-400061"
    },
    {
        "location": [
            19.18816346500006,
            72.82285887600005
        ],
        "address": "NCC plot no. 38 ,malad west malvani-400095"
    },
    {
        "location": [
            19.190400055000055,
            72.85752212500006
        ],
        "address": "bambude chawl,pushpa park, malad east,mumbai-400097"
    },
    {
        "location": [
            19.187443294000047,
            72.86468327900008
        ],
        "address": "sainath society, santodh nagar, goregaon east-400063"
    },
    {
        "location": [
            19.18497540800007,
            72.82080140400006
        ],
        "address": "gate no 7, malvani,mumbai 400095"
    },
    {
        "location": [
            19.18560224500004,
            72.82084449000007
        ],
        "address": "plot no 50,gate no 7,malvani 400 095"
    },
    {
        "location": [
            19.240900619000058,
            72.85999383000006
        ],
        "address": "valmiki chawl,DN Dubey road, ambawadi,dahisar east-400066"
    },
    {
        "location": [
            19.257301175000066,
            72.87505035500004
        ],
        "address": "padwal chawl,ketkipada,dahisar east, 400068"
    },
    {
        "location": [
            19.255452959000024,
            72.86739020700003
        ],
        "address": "pasekar chawl,anand nagar, dahisar east, 400068"
    },
    {
        "location": [
            19.19958938600007,
            72.86403704100007
        ],
        "address": "lokmanya chawl, road no.2,wadarpada,kandivli east-400101"
    },
    {
        "location": [
            19.19049947700006,
            72.85939303400005
        ],
        "address": "rukiyabai noor mohammad chawl,bandongri kandivli east 400101"
    },
    {
        "location": [
            19.16279006700006,
            72.93112210400005
        ],
        "address": "viswashanti chs,near omega school,khandan,khindipada-400042"
    },
    {
        "location": [
            19.12836161100006,
            72.93512059200003
        ],
        "address": "ambika niwas,nehru nagar,kanjurmarg east-400042"
    },
    {
        "location": [
            19.124300408000067,
            72.91806422900004
        ],
        "address": "panchshil society chaitanya nagar,opp iit main gate,powai-400 076"
    },
    {
        "location": [
            19.115775391000057,
            72.93326254600004
        ],
        "address": "tagore nagar group no 8 vikroli east-400 083"
    },
    {
        "location": [
            19.13608530600004,
            72.93850292400003
        ],
        "address": "nanda sawant chawl no 14 sai nagar bhandup east-400042"
    },
    {
        "location": [
            19.160508221000043,
            72.92951270200007
        ],
        "address": "anand thakur chawl,khindipada-400078"
    },
    {
        "location": [
            19.16344982000004,
            72.93592354700007
        ],
        "address": "Khindipada darga road,mulund west-400078"
    },
    {
        "location": [
            19.161125259000073,
            72.92957415400008
        ],
        "address": "Anand thakur chawl,near shivshena shaka-400078"
    },
    {
        "location": [
            19.165588204000073,
            72.95062667900004
        ],
        "address": "JN Road, Mulund west-400 080"
    },
    {
        "location": [
            18.96328096600007,
            72.82193869700006
        ],
        "address": "dudhwala chawl, p b marg, grant roaad mumbai- 400 008"
    },
    {
        "location": [
            18.97121786300005,
            72.81615550800007
        ],
        "address": "ratan tata colony, ac market, tardeo, mumbai 400 034"
    },
    {
        "location": [
            18.965689033000046,
            72.82384359100007
        ],
        "address": "south face chawl, RS nimkar marg, Faras road, mumbai- 400 008"
    },
    {
        "location": [
            18.963369322000062,
            72.82348913300007
        ],
        "address": "amtulla apartment, arab lane, grant road, mumbai 400 008"
    },
    {
        "location": [
            19.08654117900005,
            72.88280617600003
        ],
        "address": "gulshan manzil, pereira wadi, st mary school, sakinaka,mumbai- 400 072"
    },
    {
        "location": [
            19.09323004500004,
            72.88264976100004
        ],
        "address": "gulzar society, hari masjid, jari mari, kurla west 400 070"
    },
    {
        "location": [
            18.91820679616992,
            72.82466783514951
        ],
        "address": "Ganesh murthi nagar part no.2 captain prakash peth marg colaba 400005"
    },
    {
        "location": [
            18.97920903427471,
            72.82740639624978
        ],
        "address": "Transit Camp Tank Pakhadi Street Kalapani Mominpura 400011"
    },
    {
        "location": [
            18.96552988800242,
            72.82531287437564
        ],
        "address": "Kamathipura 7th Lane Chawl No. 21 Kamathipura 7th lane  Kamathipura 400008"
    },
    {
        "location": [
            18.96971264165106,
            72.84194449407565
        ],
        "address": "Tulsiwadi Chawl Gunpowder Road Mazgaon 400010"
    },
    {
        "location": [
            18.96102937556583,
            72.82614395453689
        ],
        "address": "Kasam Hathi Chawl Kamathipura 1st Lane Kamathipura 400008"
    },
    {
        "location": [
            18.96280629630638,
            72.83180850194071
        ],
        "address": "Sanjay Gandhi Nagar  J J Marg Railway Compound Mazgaon 400010"
    },
    {
        "location": [
            19.02296329441896,
            72.8707374045943
        ],
        "address": "SANGAM NAGAR,S.P. ROAD,ANTOP HILL, WADALA EAST S P Road wadala east 400037"
    },
    {
        "location": [
            19.02804451927894,
            72.87339361227305
        ],
        "address": "BHARATIYA KAMALA NAGAR, S P ROAD, NEAR KARBALA MSJID, ANTOP HILL, WADALA EAST S P Road wadala east 400037"
    },
    {
        "location": [
            19.0276777,
            72.87024559999999
        ],
        "address": "SAI BABA MANDIR, VIJAY NAGAR , ANTOP HILL, WADALA c/o pandit(rented house) Wadala east 400037"
    },
    {
        "location": [
            19.01594201636252,
            72.86459743933852
        ],
        "address": "siddharth nagar koraba mithagar Wadala 400037"
    },
    {
        "location": [
            19.00588495770202,
            72.85492723138128
        ],
        "address": "Bhola Master Chawl Bhola Master Chawl Sewree Cross Road Near Railway Line Gate No 6 Wadala 400031"
    },
    {
        "location": [
            19.0055033555024,
            72.85497499323805
        ],
        "address": "mun chawl no 103 Mun Chawl no 103, Gate No 6 Municipal Chawl Sewree Cross Road Near Railwy Gate No 6 Wadala 400031"
    },
    {
        "location": [
            19.0414773,
            72.8484537
        ],
        "address": "Jasmin Mill road Gasita ram factory dharavi 400017"
    },
    {
        "location": [
            19.0097346,
            72.8255543
        ],
        "address": "Century Quartets P B Marg 0 worli village 400013"
    },
    {
        "location": [
            19.02163552269838,
            72.81812809953696
        ],
        "address": "DEVICHA OOTA,BND BIG HANUMAN MANDIR,JANTA COLONY DEVICHA OOTA,JANTA COLONY,NR BIG HANUMAN MANDIR buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            19.0185886,
            72.8188249
        ],
        "address": "KATKAR HOUSE buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            19.01747046395444,
            72.8202652293119
        ],
        "address": "NAVNEET CHOWK,JANTA COLONY buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            19.01751015045863,
            72.82032885506361
        ],
        "address": "GURU DATTA LANE GURU DATTA BAND PATHAK,JANTA COLONY,BND 169 BUSSTOP buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            19.198057222000045,
            72.85995734100004
        ],
        "address": "Not Mentioned R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400101, India"
    },
    {
        "location": [
            19.01728557984215,
            72.82028873932421
        ],
        "address": "GURU DATTA LANE GURU DATTA BAND PATHAK,JANTA COLONY,BND 169 BUSSTOP buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            19.01848536837272,
            72.81933247601101
        ],
        "address": "NAVTARUN RAHIVASHI SEVA SANGH buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            18.99259722335193,
            72.81860268592595
        ],
        "address": "JIJAMATA NAGR, WORLI 0 E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [
            18.99275572524642,
            72.81922314393609
        ],
        "address": "JIJAMATA NAGAR D WARD JIJAMATA NAGR, WORLI  E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [
            18.99230948632588,
            72.81832995692092
        ],
        "address": "MATA RAMABAI AMBEDKAR NAGAR JIJAMATA NAGR, WORLI E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [
            18.99288364253429,
            72.81993259850987
        ],
        "address": "V P NAGAR JIJAMATA NAGR, WORLI  E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [
            19.07444236466082,
            72.84233563066294
        ],
        "address": "Haji hussain chawl r/n3 masjit rd golibar road golibar santacruz East 400055"
    },
    {
        "location": [
            19.0567414,
            72.84165109999999
        ],
        "address": "rajak chawl R/N 16 opp. Golden bakery bandra east 400055"
    },
    {
        "location": [
            19.08701255492469,
            72.84541242234782
        ],
        "address": "Harish Chandra Viajy Khot Chawl R/57/11  New Agripada Agripada golibar santacruz East 400055"
    },
    {
        "location": [
            19.0650798,
            72.8565769
        ],
        "address": "SRA Patthar Nagar 3 C/103 Bharat Nagr BKC Bandra (E) 400055"
    },
    {
        "location": [
            19.08154070356635,
            72.85412494816593
        ],
        "address": "Moreshwar Chwal ,  Waghriwada  Vakola santacruz East 400055"
    },
    {
        "location": [
            19.13219749090547,
            72.85625580658747
        ],
        "address": "Koliwada Jog E 400060"
    },
    {
        "location": [
            19.10794573436695,
            72.8589177997727
        ],
        "address": "Kurban chawl Kurban chawl infront of ratna mahal hotel parsiwada ,chakala, andheri east 400059"
    },
    {
        "location": [
            19.13351105241615,
            72.85791979528604
        ],
        "address": "Radhabai chawl Radhabai chawl Jhula Maidan Meghwadi Jogeshwari East 400060"
    },
    {
        "location": [
            19.12680647922856,
            72.84890382165267
        ],
        "address": "Damodar Chawle Mogra Pada Andheri East 400069"
    },
    {
        "location": [
            19.0912396,
            72.8461938
        ],
        "address": "Sai Baba Chawle, Dr. Rajendra Prasad Nagar Vile Parle East 400099"
    },
    {
        "location": [
            19.10444256955326,
            72.8588016868696
        ],
        "address": "Mahatma Phule Nagar  Bamanwada Vile Parle East 400099"
    },
    {
        "location": [
            19.0957489,
            72.8372886
        ],
        "address": "DAULAT HOUSE V P ROAD GAONDEVI TEMPLE  ANDHERI WEST 400058"
    },
    {
        "location": [
            19.1156666,
            72.8398471
        ],
        "address": "GULSHAN WELFARE SOCEITY GILBERT HILL ROAD CHHABIL JANTA COLONY ANDHERI WEST 400058"
    },
    {
        "location": [
            19.11154079776221,
            72.86801623576561
        ],
        "address": "LOKSEVA ITIHAT SOC.CHAWL  JUHU GALLI  WIRELESS ROAD  OPP.KOHINOOR HOTEL ANDHERI WEST 400058"
    },
    {
        "location": [
            19.10459847451114,
            72.83969093313843
        ],
        "address": "PERIMAL CHAWL ROAD NO.5 V.M ROAD NEHARU NAGAR 0 VILE PARLE WEST 400056"
    },
    {
        "location": [
            19.1481828,
            72.8382859
        ],
        "address": "FARJANA MASJID 0 RAGHWENDRA MANDIR ROAD GULSHAN NAGAR JOGESHWARI WEST 400102"
    },
    {
        "location": [
            19.1447666,
            72.8395335
        ],
        "address": "RAM ADHAR SINGH CHAWL KRANTI NAGAR JOGESHWARI WEST 400102"
    },
    {
        "location": [
            19.06855084885717,
            72.87485988071177
        ],
        "address": "R NO 14 OPP TAXIMAN COLONY A BLOCK SULWEMAN VBLDG OPPOSITE BUDDHA COLONY NEAR GAREEB NAWAZ BLDG KURLA WEST 400070"
    },
    {
        "location": [
            19.07143306273204,
            72.88044628080176
        ],
        "address": "MARWADI CHAWL KURLA WEST 400070"
    },
    {
        "location": [
            19.1023426,
            72.88829659999999
        ],
        "address": "HITECH SEATING SYSTEM GALA NO 3 OPP PENINSULA HOTEL,SAKINAKA KURLA W KURLA WEST 400070"
    },
    {
        "location": [
            19.02170972486743,
            72.81807286522107
        ],
        "address": "GONTA LANE 49/E,GONTA LANE,SALE HOUSE buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            19.02170022182498,
            72.81808054625674
        ],
        "address": "GONTA LANE 49I,JANA NAKHWA HOUSE buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [
            19.15823098000004,
            72.93480833000007
        ],
        "address": "Not Mentioned Sonapur, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400 078, India"
    },
    {
        "location": [
            19.163992113000063,
            72.93615200100004
        ],
        "address": "Not Mentioned T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400082, India"
    },
    {
        "location": [
            19.06380500000006,
            72.92309720000003
        ],
        "address": "Not Mentioned Road Number 5, Milan Colony, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400043, India"
    },
    {
        "location": [
            19.06461470000005,
            72.92438060000006
        ],
        "address": "Not Mentioned Plot no.19, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400043, India"
    },
    {
        "location": [
            19.061277731000075,
            72.90787836400006
        ],
        "address": "Not Mentioned janta raod, Adarsh Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
    },
    {
        "location": [
            19.04678400000006,
            72.89541220000007
        ],
        "address": "Not Mentioned Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
    },
    {
        "location": [
            19.031168765000075,
            72.89623193800003
        ],
        "address": "Not Mentioned Ramakrishna Chemburkar Marg (Ghatkopar Mahul Road), Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
    },
    {
        "location": [
            19.060336850000056,
            72.88454790000003
        ],
        "address": "Not Mentioned S G Barve Marg (C S T Road), Sindhi Society, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.051802500000065,
            72.88662380000005
        ],
        "address": "Not Mentioned Chembur Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
    },
    {
        "location": [
            19.095527121000032,
            72.90004929700007
        ],
        "address": "Not Mentioned R B Kadam Road, Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            19.099685300000033,
            72.90289370000005
        ],
        "address": "Not Mentioned Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            19.093636238000045,
            72.90381498400006
        ],
        "address": "Not Mentioned jalaram mandir, R B Kadam Road, Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            19.102050000000077,
            72.90877440000008
        ],
        "address": "Not Mentioned Varsha Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400079, India"
    },
    {
        "location": [
            19.074525528000038,
            72.91376147700004
        ],
        "address": "Not Mentioned Kamaraj Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
    },
    {
        "location": [
            19.072405400000036,
            72.91409200000004
        ],
        "address": "Not Mentioned Kamaraj Nagar Road, Kamaraj Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [
            19.09033370900005,
            72.89895949700008
        ],
        "address": "Not Mentioned Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            19.18779420000004,
            72.82361530000003
        ],
        "address": "Not Mentioned Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [
            19.189522453000052,
            72.86554153700007
        ],
        "address": "Not Mentioned P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [
            19.188322500000027,
            72.82310850000005
        ],
        "address": "Not Mentioned Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [
            19.170750359000067,
            72.87787931800005
        ],
        "address": "Not Mentioned Nagari Niwara Colony, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400063, India"
    },
    {
        "location": [
            19.18579610000006,
            72.81704633100003
        ],
        "address": "Not Mentioned Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [
            19.180259400000068,
            72.86128000000008
        ],
        "address": "Not Mentioned P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [
            19.171587000000045,
            72.87878300000006
        ],
        "address": "Not Mentioned Nagari Niwara Colony, P/N Ward, Zone 4, Mumbai, Kulāba, Mumbai Suburban, Maharashtra, 400063, India"
    },
    {
        "location": [
            19.17184910000003,
            72.83825470000005
        ],
        "address": "Not Mentioned Motilal Nagar II, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400062, India"
    },
    {
        "location": [
            19.239500216000067,
            72.86063629500006
        ],
        "address": "Not Mentioned D N Dube Road, Shivaji Nagar, R/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400068, India"
    },
    {
        "location": [
            19.256246300000043,
            72.86491405000004
        ],
        "address": "Not Mentioned Vaishali Nagar, R/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400068, India"
    },
    {
        "location": [
            19.196305040000027,
            72.86486190000005
        ],
        "address": "Not Mentioned R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400101, India"
    },
    {
        "location": [
            19.118538889000035,
            72.83677777800006
        ],
        "address": "GULSHAN WELFARE SOCEITY, GILBERT HILL ROAD CHHABIL JANTA COLONY ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            19.056800000000067,
            72.84181944400007
        ],
        "address": "chawl no. 3, Razzak chawl Opp. Golden bakery Bandra East Mumbai- 400055"
    },
    {
        "location": [
            19.203413889000046,
            72.83129444400004
        ],
        "address": "Janseva Samiti Azad Compound Opp. chandrika hotel kandivali west- 400067"
    },
    {
        "location": [
            19.16785555555556,
            72.83926944444444
        ],
        "address": "jai bhavani chawl, Prem nagar, Goregaon west, 400062"
    },
    {
        "location": [
            19.014363889000037,
            72.82412777800005
        ],
        "address": "Siddique Mohammad Chawl Old Prabhadevi road Mumbai- 400025"
    },
    {
        "location": [
            18.99245833300006,
            72.81870000000004
        ],
        "address": "C Ward Jijamata Nagar E Moses Road Worli Mumbai- 400018"
    },
    {
        "location": [
            19.17902222200007,
            72.86228055600003
        ],
        "address": "M S MULLA CHAWL NEAR NOORANI MASJID RANI SATI MARG PATHANWADI MALAD EAST MUMBAI- 400097"
    },
    {
        "location": [
            19.08792222200003,
            72.89837777800005
        ],
        "address": "Chawl No. 3 Porbandarwala Chawl, LBS Road Opp Naval Park Gate Near Bawdi Near Dr. Anaees Clinic Chirag Nagar Ghatkopar W- 400086"
    },
    {
        "location": [
            18.973937765000073,
            72.82710467400005
        ],
        "address": "Chawl No. 1, BIT Chawl Agripada, Mejhraj sethi marg, Jhula Maidan, Byculla-400011"
    },
    {
        "location": [
            19.058625000000063,
            72.89171944400005
        ],
        "address": "Gangubai Patole Chawl Siddharth Colony Chembur Naka Chembur Mumbai- 400074"
    },
    {
        "location": [
            19.026408333000063,
            72.86132500000008
        ],
        "address": "Lal Mati kismat Nagar Wadala Mumbai-400037"
    },
    {
        "location": [
            19.09348055600003,
            72.88287777800008
        ],
        "address": "UNWALA COMPOUND KURLA ANDHERI ROAD BEHIND ANAND BHAWAN HOTEL ANDHERI MUMBAI- 400072"
    },
    {
        "location": [
            18.971330556000055,
            72.82773888900005
        ],
        "address": "Aksa Manzil M A road Madanpura Ghosh bazar Byculla Mumbai-400008"
    },
    {
        "location": [
            19.180404113000066,
            72.85017372800007
        ],
        "address": "595 Hindu Dabi Chawl Haji Bapu Road Malad East Mumbai- 400097"
    },
    {
        "location": [
            19.103522222000038,
            72.88942500000007
        ],
        "address": "KHADI NO 3 JAFAR COMPOUND SAKINAKA LINK ROAD ANDHERI MUMBAI- 400072"
    },
    {
        "location": [
            19.077519444000075,
            72.84454722200007
        ],
        "address": "Ramjeevan Chawl Near Ramakant Dairy 5th Golibar Road Santacruz East Mumbai- 400055"
    },
    {
        "location": [
            18.974183333000042,
            72.84828611100005
        ],
        "address": "Lakdi Bander Darukhana Udipi Hotel Mazgaon Mumbai- 400010"
    },
    {
        "location": [
            18.97535000000005,
            72.81226111100005
        ],
        "address": "DMD Jhopadpatti Tardeo Rd Tulsiwadi Tardeo Mumbai- 400034"
    },
    {
        "location": [
            19.067725000000053,
            72.84560000000005
        ],
        "address": "Sambhaji Seva Mandal Jawahar Nagar Khar East Mumbai- 400055"
    },
    {
        "location": [
            19.063130556000033,
            72.85412222200006
        ],
        "address": "Dyaneshwar Nagar Bandra East Mumbai- 400055"
    },
    {
        "location": [
            18.94767500000006,
            72.82577222200007
        ],
        "address": "Keshav Narsi bldg Mahadev shankar seth lane Chira Bazar 400003"
    },
    {
        "location": [
            18.95852968500003,
            72.82439547900003
        ],
        "address": "38H BoriChawl Fanaswadi Kalbadevi 400003"
    },
    {
        "location": [
            19.13117905000007,
            72.93502045000008
        ],
        "address": "Not Mentioned Aniket Nursing Home, Veer Savarkar Road, Chhatrapati Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400042, India"
    },
    {
        "location": [
            19.11762580000004,
            72.93276860000003
        ],
        "address": "Not Mentioned S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400083, India"
    },
    {
        "location": [
            19.135759767000025,
            72.93830499300003
        ],
        "address": "Not Mentioned auto parking road, Kanjur Village, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400042, India"
    },
    {
        "location": [
            19.12014080000006,
            72.92926630000005
        ],
        "address": "Not Mentioned S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400083, India"
    },
    {
        "location": [
            19.056780556000035,
            72.84175000000005
        ],
        "address": "Razzak Chawl Golden Bakery Kherwadi Road Bandra East Kherwadi Road, H/W Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [
            19.198150000000055,
            72.82790277800007
        ],
        "address": "Ekta Nagar, Galli No. 07, Old Link Road, Opp. Petrol Pump, Near Ashish Hotel Kandivali west 400067"
    },
    {
        "location": [
            19.210225000000037,
            72.82191111100008
        ],
        "address": "SagarCHS Charkop Sec 2 RSC 7,Kandivali west 400067"
    },
    {
        "location": [
            19.156961111000044,
            72.92876111100003
        ],
        "address": "Gurav Chawl, Tembhipada, Vaghobawadi, Bhandup West-400078"
    },
    {
        "location": [
            19.091742664000037,
            72.88225257400006
        ],
        "address": "Behind Jarimari Temple Kurla Andheri Road Sakinaka 400072"
    },
    {
        "location": [
            19.097379423000064,
            72.89193116700005
        ],
        "address": "Jaibunnisa chawl. Rajiv Nagar, Kurla Andheri Road, Near shivprabha building, Sakinaka, Mumbai-400072"
    },
    {
        "location": [
            19.089655556000025,
            72.88833888900007
        ],
        "address": "Sunder Baug Navjivan Mandal LBS marg Navjivan Mandal Kurla W Kamani 400070"
    },
    {
        "location": [
            19.083857849000026,
            72.88869310900003
        ],
        "address": "Juri Pathak Chawl, Vijay Nagar, Kurla Andheri Road, Opp Naaz hotel, Kurla West, Mumbai- 400072"
    },
    {
        "location": [
            18.90743333,
            72.80934722
        ],
        "address": "Add- Geeta Nagar\t\tDr. Homi Bhabha Road\tNear Navy Nagar\tColaba\t400021"
    },
    {
        "location": [
            18.95140833,
            72.83907778
        ],
        "address": "Add- Hutment\tSant Tukaram Road400003"
    },
    {
        "location": [
            19.02148611,
            72.81738611
        ],
        "address": "Add- Katkar House\tKesari Nath Buva Bhay Marg\tWorli Village\t400030"
    },
    {
        "location": [
            19.01710833,
            72.81858333
        ],
        "address": "Add- Waras Lane, Worli Koliwada\tKesari Nath Buva Bhay Marg\tWorli Village\t400030"
    },
    {
        "location": [
            19.00593056,
            72.82127222
        ],
        "address": "Add- Century Quartets\tP B Marg\tMahindra Towers\tWorli\t400013"
    },
    {
        "location": [
            19.13105278,
            72.84134722
        ],
        "address": "Add- LAXMI WELFAR SOCIETY\tDHANGAR WADI\tJUHU GALLIANDHERI WEST\t400058"
    },
    {
        "location": [
            19.11613889,
            72.84025
        ],
        "address": "Add- JUNED NAGAR\tC.D BARFIWALA ROAD\tJUHU GALLI\tANDHERI WEST\t400058"
    },
    {
        "location": [
            19.15121944,
            72.83562778
        ],
        "address": "Add- AADARSH CHAWL\tANAND NAGAROPPOSITE MEGA MALLJOGESHWARI WEST400102"
    },
    {
        "location": [
            19.141975,
            72.83720278
        ],
        "address": "Add- DHANGARWADA\tKARNATAKA SOCEITYBEHIND MAKKA MASJIDANDHERI WEST\t400058"
    },
    {
        "location": [
            19.10269167,
            72.83460278
        ],
        "address": "Add- AMBE MATA CHAWL NO 8\tNEHARU NAGAR\tVILE PARLE WEST400056"
    },
    {
        "location": [
            19.0034957,
            72.8205292
        ],
        "address": "BDD Chawl, GM Bhosle Marg, Worli, 400018"
    },
    {
        "location": [
            19.0076064888531,
            72.85458910596239
        ],
        "address": "PATHAN MASJID CHAWL,Sewri CROSS ROAD,Sewri, 400015"
    },
    {
        "location": [
            19.0671855,
            72.83650829999999
        ],
        "address": "Gomes Chawl, Golibar Road, Khar East- 400055"
    },
    {
        "location": [
            19.0683073,
            72.84490140000001
        ],
        "address": "Jawahar Nagar Chawl, Khar East, 400055"
    },
    {
        "location": [
            19.10834929026186,
            72.85911518632899
        ],
        "address": "Kurban chawl,parsiwada ,chakala, Andheri East- 400059"
    },
    {
        "location": [
            19.0726016,
            72.9133536
        ],
        "address": "Radhabai chawl, Jhula Maidan, Meghwadi, Jogeshwari East- 400060"
    },
    {
        "location": [
            19.1262049,
            72.8493324
        ],
        "address": "Damodar Chawl, Mogra Pada, Andheri East- 400069"
    },
    {
        "location": [
            19.1920911,
            72.8662232
        ],
        "address": "Sai Baba Chawl, Dr. Rajendra Prasad Nagar, Vile Parle East- 400099"
    },
    {
        "location": [
            19.13643289493979,
            72.84659276441087
        ],
        "address": "Somnath Dube Chawl, Sahkar Road, JOGESHWARI WEST- 400102"
    },
    {
        "location": [
            19.1047136457422,
            72.82883576350815
        ],
        "address": "JAY MAA SHARDHA CHAWLV.M ROAD NO. 05, NEHRU NAGR, VILE PARLE WEST- 400056"
    },
    {
        "location": [
            19.09561189785627,
            72.83682439438874
        ],
        "address": "DAULAT HOUSE, GAONDEVI TEMPLE, V P ROAD,ANDHERI WEST, 400058"
    },
    {
        "location": [
            19.121501,
            72.8413995
        ],
        "address": "AYUBLALA CHAWL,GAONDEVI DONGARI, ANDHERI WEST- 400061"
    },
    {
        "location": [
            19.2578774,
            72.85204499999999
        ],
        "address": "snehal chawl, opp Rock spring Kandarpada, Dahisar west, 400103"
    },
    {
        "location": [
            19.16526649391617,
            72.93240774657114
        ],
        "address": "Anand Thakur Chawl, Near Shivsena Shakha, Khindipada, 400078"
    },
    {
        "location": [
            19.14012549246693,
            72.93015575547555
        ],
        "address": "Ganesh Nager, Sitaram Jadhav Chawl, Behind Mangat Petrol Pump, Bhandup(W)- 400078"
    },
    {
        "location": [
            19.17134177376156,
            72.95345676475453
        ],
        "address": "Narayan CHS, Sai Hill, Bhandup (W)- 400078"
    },
    {
        "location": [
            19.12486163375296,
            72.91693322250231
        ],
        "address": "Panchshil society, Opp IIT Main Gate, Chaitanya Nagar,Powai Mumbai, 400076"
    },
    {
        "location": [
            19.12486105361848,
            72.9169122259238
        ],
        "address": "Panchshil society, Opp IIT Main Gate, Chaitanya Nagar,Powai Mumbai, 400076"
    },
    {
        "location": [
            19.13606380465565,
            72.93824274348354
        ],
        "address": "Sai Nagar, Nanda Sawant chawl, Bhandup East, 400042"
    },
    {
        "location": [
            19.1610323,
            72.9357215
        ],
        "address": "Rajiv Gandhi nagar Chawl, Dargah Road, Bhandup (W)- 400078"
    },
    {
        "location": [
            19.13997855093426,
            72.93009298018791
        ],
        "address": "Ganesh Nager, Sitaram Jadhav Chawl, Behind Mangat Petrol Pump, Bhandup(W)- 400078"
    },
    {
        "location": [
            19.12460920651214,
            72.84538538348113
        ],
        "address": "2/1, HAJI DAWOOD CHAWL, S V ROAD, AMBOLI, ANDHERI WEST- 400061"
    },
    {
        "location": [
            19.13255149951325,
            72.85642788434376
        ],
        "address": "Koliwada, Jogeshwari East, 400060"
    },
    {
        "location": [
            18.9717666,
            72.82660000000003
        ],
        "address": "Nayee Chawl, 3rd Ghelabhai Lane, Mandapura, Pin - 400008"
    },
    {
        "location": [
            18.97563119840761,
            72.82953529948274
        ],
        "address": "Chawl no. 14, Transit Camp, Tank Pakadi Street, Mominpura, Pin - 400011"
    },
    {
        "location": [
            19.01858859999999,
            72.81882490000004
        ],
        "address": "Arun Prakash Sang Society, Buva Bhai Marg, Worli Village, Pin - 400030"
    },
    {
        "location": [
            18.99141800000001,
            72.830998
        ],
        "address": "NM Joshi Police Station, Delile Road, Lower Parel, Pin - 400013"
    },
    {
        "location": [
            19.0732146,
            72.84578580000002
        ],
        "address": "Room no. 325, Navjeevan Chawl, Indira Nagar, Gavdevi Pipe Line, Vakola, Santa Cruz East, Pin - 400055"
    },
    {
        "location": [
            19.1783459,
            72.81644860000002
        ],
        "address": "Room No 136, NCC Plot No 14, Malvani Gate No 06, Malvani, Malad West, Pim - 400095"
    },
    {
        "location": [
            19.1893374,
            72.8183134
        ],
        "address": "Aman Ekta Chawl, Behind Pathanwadi Masjit, Rani sati marg, Pathamwadi, Malad East, Pin - 400097"
    },
    {
        "location": [
            19.18343078336639,
            72.81842621230511
        ],
        "address": "Room no 72, Chawl No 22, MHB Colony, Malwani, Malad West, Pin - 400095"
    },
    {
        "location": [
            19.20378407855691,
            72.83132614947365
        ],
        "address": "Janseva Samiti, Azad Compound, opp. Chandrika Hotel, Kandivali West, Pin - 400067"
    },
    {
        "location": [
            18.9662344,
            72.82341910000001
        ],
        "address": "68/G, Ground Floor, Mangali Kanduri Chawl, RN Nimkar Marg, Grant Road, Pin - 400008"
    },
    {
        "location": [
            19.00187573734854,
            72.8549131627703
        ],
        "address": "BMC Chawl no 104, Rahat Nagar, Sewree Cross Road, Behind Dr. Gadas Clinic, Wadala, Pin - 400031"
    },
    {
        "location": [
            19.010202778000064,
            72.82756944400006
        ],
        "address": "Kamgar nagar 2, New Prabhadevi Road, Prabhadevi, Mumbai - 400025"
    },
    {
        "location": [
            19.068630556000073,
            72.87996388900007
        ],
        "address": "FITWALA BLDG, BEHIND KING BAKERY, KUELA WEST, MUMBAI _ 400070"
    },
    {
        "location": [
            19.059900000000027,
            72.88810277800007
        ],
        "address": "Pada No. 2 , Thakkar Bappa Colony, Chembur, Mumbai - 400071"
    },
    {
        "location": [
            19.062763889000053,
            72.87304722200008
        ],
        "address": "Sagar Chawl, Kurla Court, Hari Masjid, Kurla West Mumbai- 400070"
    },
    {
        "location": [
            19.01098056,
            72.81913056
        ],
        "address": "Add- Shivaji Nagar\tSasmira Marg\tSasmira college\tWorli\t400030"
    },
    {
        "location": [
            19.090761111000063,
            72.90501111100008
        ],
        "address": "Veer Sambhaji Chawl, Ganesh nagar, Above Duckline Near Saibaba Mandir, ghatkoper west, Mumbai-400086"
    },
    {
        "location": [
            19.01832222200005,
            72.86669444400007
        ],
        "address": "Bhaiyasaheb Nagar, Barkat Ali Naka, BARKAT ALI NAKA,  WADALA EAST, Mumbai-400037"
    },
    {
        "location": [
            19.14137500000004,
            72.92383055600004
        ],
        "address": "Jitu Rai Yadav Chawl, Pratapnagar Road , Munshi Mahal, Bhandup (W), Mumbai-400078"
    },
    {
        "location": [
            19.15640833300006,
            72.92680000000007
        ],
        "address": "Priti Niwas Chawl, Maroda hill, Tembhipada, Bhandup (W), Mumbai-400078"
    },
    {
        "location": [
            19.092902778000052,
            72.88258333300007
        ],
        "address": "HARI MASJID, ANDHERI ROAD, JUNA KABRASTHAN ANDHERI (E), Mumbai-400072"
    },
    {
        "location": [
            19.068316667000033,
            72.84491111100004
        ],
        "address": "Gurubaksha Punjabi Chawl, Jawahar Nagar, Sai Baba Road, Khar East, Mumbai-400055"
    },
    {
        "location": [
            19.06312222200006,
            72.85413888900007
        ],
        "address": "Jai Ma Sharada Rahivasi Sevak ,Dnyaneshwar Nagar, Nalaside, Bandra East, Mumbai-400055"
    },
    {
        "location": [
            19.060572222000076,
            72.84231388900008
        ],
        "address": "Yunus Miyan Chawl ,Naupada ,Bandra East, Mumbai - 400055"
    },
    {
        "location": [
            19.086686111000063,
            72.84411944400006
        ],
        "address": "Mahakali Shivshankar Nagar, New Agripada ,Santacruz East, Mumbai-400055"
    },
    {
        "location": [
            19.07799166700005,
            72.87481111100004
        ],
        "address": "Parvez Chawl, Near Mohammadi Masjit, Shashtri Nagar, Kalina, Santacruz East, Mumbai - 400055"
    },
    {
        "location": [
            19.086866667000038,
            72.84554722200005
        ],
        "address": "Gajanan Rahivasi Sangh ,New Agripada, Santacruz East, Mumbai- 400055"
    },
    {
        "location": [
            19.063352778000024,
            72.85695833300008
        ],
        "address": "Pathar Nagar ,Bharat Nagar, BKC Road, Bandra East, Mumbai- 400055"
    },
    {
        "location": [
            19.063748780000026,
            72.85659800100007
        ],
        "address": "Plot No.8 Bharat Nagar Bandra East 400055"
    },
    {
        "location": [
            18.97225833300007,
            72.81301111100004
        ],
        "address": "Janta Nagar Building J D Marg Tardeo 400034"
    },
    {
        "location": [
            19.170763889000057,
            72.87108888900008
        ],
        "address": "Panchsheel Chawl Near Kailas Mandir SuryanagarVikhroli (W) 400083"
    },
    {
        "location": [
            19.13983055600005,
            72.92569722200005
        ],
        "address": "Kamble Compound, Near Panchsheel Buddhvihar, Pratap Nagar Road, Bhandup (W)-400078"
    },
    {
        "location": [
            19.202794444000062,
            72.82734722200007
        ],
        "address": "Deep Ganga CHSL, Neelkanth Nagar Mhada Colony Ganesh Nagar Kandivali west 400067"
    },
    {
        "location": [
            19.11710555600007,
            72.94157222200005
        ],
        "address": "Indira Vikas Seva Sangh chawl no.1 Kannamwar Nagar-II Opp.Bldg. no. 178, Vikhroli (E) 400083"
    },
    {
        "location": [
            19.074198856000066,
            72.84366331800004
        ],
        "address": "Madina Masjid Golibar Santacruz East 400055"
    },
    {
        "location": [
            18.91919167,
            72.82568611
        ],
        "address": "Add- Garib Janata Nagar Badhwar Park\t\tCaptain Prakash Pethe Marg\t\tCuffe Parade\t400021"
    },
    {
        "location": [
            18.95208889,
            72.825525
        ],
        "address": "Add- Bori Chawl\tKapreshwar Marg\tFanaswadi\tKalbadevi\t400003"
    },
    {
        "location": [
            19.017675,
            72.819675
        ],
        "address": "Add- Devicha Oota,Janata ColonyNear Big Hanuman Mandir\tKesari Nath Buva Bhay Marg\tWorli Village\tJanata Colony\t400030"
    },
    {
        "location": [
            19.01929444,
            72.817825
        ],
        "address": "Add- Ladkubai ChawalPakhari LaneKoliwadaWorli Village\t400030"
    },
    {
        "location": [
            19.01693333,
            72.81821389
        ],
        "address": "Add- Amar Sandesh Janta Colony\tKesari Nath Buva Bhay Marg\tWorli Village\tJanata Colony\t400030"
    },
    {
        "location": [
            19.01945833,
            72.81738611
        ],
        "address": "Add- Hirasheth Chawal, Worli Koliwada\tKesari Nath Buva Bhay Marg\tWorli Village\t400030"
    },
    {
        "location": [
            19.02079167,
            72.81786944
        ],
        "address": "Add- Vikas Lane\tKesari Nath Buva Bhay Marg\tWorli Village\t400030"
    },
    {
        "location": [
            19.020125,
            72.81663889
        ],
        "address": "Add- Achanak Krida Mandal Worli Koliwada\tKesari Nath Buva Bhay Marg\t400030"
    },
    {
        "location": [
            18.98578889,
            72.82861667
        ],
        "address": "Add- Ganesh nagar\tC Committee\tJ R Boricha Marg\tNear Arthur Road Jail\tSaatrasta\t400013"
    },
    {
        "location": [
            19.11834167,
            72.84248611
        ],
        "address": "Add- AMAN SOCIETY\tJUHU GALLI\tNEAR AQUSA MASJIDANDHERI WEST\t400058"
    },
    {
        "location": [
            19.10377222,
            72.83451944
        ],
        "address": "Add- Namaki Chawl Juhu Galli Police ChowkiAndheri West400058"
    },
    {
        "location": [
            19.10449722,
            72.8395
        ],
        "address": "Add- MANIKAM CHAWL\tVile Parle West 400056"
    },
    {
        "location": [
            19.06212222,
            72.90545556
        ],
        "address": "Add- Utkarsh NagarP L Lokhande Marg\tChembur\t400089"
    },
    {
        "location": [
            19.18565833,
            72.86441667
        ],
        "address": "Add- Old Ganesh wadi.\tBehind St Francis school\tLaxman nagar\t\tMalad East\t400097"
    },
    {
        "location": [
            19.17031389,
            72.83857778
        ],
        "address": "Add- Zadu Galli\tPrem Nagar\tUnnat Nagar Road No. 2Goregaon West\t400104"
    },
    {
        "location": [
            19.15728611,
            72.83352222
        ],
        "address": "Add- Suvidha Chawl\tBhagat Singh Nagar No. 1Goregaon West\t400104"
    },
    {
        "location": [
            19.17597222,
            72.86434722
        ],
        "address": "Add-Devisati vanicha pada,\tFilm City Road\tGoregaon East400063"
    },
    {
        "location": [
            19.21404444,
            72.83229722
        ],
        "address": "Add- Patil HouseM. G, road,\tNear Gaurav Garden,\tBundar Pakhadi,\tKandivali west\t400067"
    },
    {
        "location": [
            19.2051,
            72.83074167
        ],
        "address": "Add- Shivshakti Chawl,\tShivshakti Compound,\tGandhi Nagar,\t\tKandivali West\t400067"
    },
    {
        "location": [
            19.21427778,
            72.82120278
        ],
        "address": "Add- Nandanvan CHS,\tPlot No. 235Charkop,\t\tKandivali West\t400067"
    },
    {
        "location": [
            18.96478056,
            72.82665278
        ],
        "address": "Add- Bldg. 21/23\t7th Gully\tKamthipura\tByculla\t400008"
    },
    {
        "location": [
            18.97358107257152,
            72.82819127779756
        ],
        "address": "Shakkarwala Bldg, Baban Gully, Sankhali Street, Madanpura, Agripada, Mumbai- 400008"
    },
    {
        "location": [
            19.00764237417611,
            72.85460306006273
        ],
        "address": "SHARIFA MANZIL, SEWREE CROSS ROAD, BEHIND DYANESHWAR VIDYALAY, SEWAREE, MUMBAI- 400015"
    },
    {
        "location": [
            19.03527811054335,
            72.84033859611871
        ],
        "address": "Unique Heights, Opp Canossa high school, Mahim, Mumbai- 400016"
    },
    {
        "location": [
            19.09952416273312,
            72.8503605096011
        ],
        "address": "Harish Society Hosstel Dixit Road Behind Sathey Collage Vile Parle East Mumbai- 400057"
    },
    {
        "location": [
            19.12888480057469,
            72.83179699821888
        ],
        "address": "TITANIUM TOWER SAHAKAR NAGAR NEAR APNA BAZAR ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            19.01706077910868,
            72.85842755262297
        ],
        "address": "Vaibhav Building, Near Wadala Bridge, Wadala (E), Mumbai-400037"
    },
    {
        "location": [
            18.9608691652865,
            72.80976910638519
        ],
        "address": "Gopalani Najma Building, Krishna Sanghi Path, Opp A K Maidan, Gamdevi, Mumbai-400007"
    },
    {
        "location": [
            18.97692299925036,
            72.83013999864153
        ],
        "address": "BMC Bldg, B. J, Marg, Kanjarwada,Byculla, Mumbai- 400011"
    },
    {
        "location": [
            18.99132330006626,
            72.83635230117667
        ],
        "address": "WEILLINGTON HOUSE, NEAR SUPARI BAUG, PAREL, MUMBAI- 400012"
    },
    {
        "location": [
            19.07699469548021,
            72.8670808280763
        ],
        "address": "Holy View Building, Kalina, Santacruz East, Mumbai- 400055"
    },
    {
        "location": [
            19.06527948071137,
            72.83153811906516
        ],
        "address": "Orchid Building Nargis Dutt Road Opp Dilip Kumar bunglow Bandra West Mumbai- 400050"
    },
    {
        "location": [
            19.12938819950573,
            72.84720899913435
        ],
        "address": "CAMPZ SRA S V ROAD AMBOLI ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            19.08448019897095,
            72.88669256813886
        ],
        "address": "GULAB SHAH ESTATE LBS MARG OPP DELUX HOTEL KURLA WEST MUMBAI- 400070"
    },
    {
        "location": [
            19.06330897835481,
            72.9168835209811
        ],
        "address": "NATWAR PAREKH COMPOUND SHIVAJI NAGAR POLICE STATION MUMBAI- 400043"
    },
    {
        "location": [
            19.06853523898761,
            72.898013724631
        ],
        "address": "Tilak Nagar Colony, Tilak Nagar, Chembur Mumbai- 400089"
    },
    {
        "location": [
            19.17396856572831,
            72.84630525173975
        ],
        "address": "A. K. Tower S V Road Opp. DHS Goregaon West Mumbai-400104"
    },
    {
        "location": [
            19.0130725417454,
            72.86144910634152
        ],
        "address": "Sushruta Building, MBPT Hospital, Wadala (E), Mumbai- 400037"
    },
    {
        "location": [
            18.95419370915071,
            72.81652550739392
        ],
        "address": "Hermes House, Mama Parmanand Marg, Opera House, Charni road, Mumbai-400004"
    },
    {
        "location": [
            19.0333931924099,
            72.84237937734927
        ],
        "address": "Emerald, Mahim, MUmbai- 400016"
    },
    {
        "location": [
            19.07996722856729,
            72.85186629825503
        ],
        "address": "Dalkhaniya House, Nehru Road, Santacruz East, Mumbai- 400050"
    },
    {
        "location": [
            19.06184079698642,
            72.82633841875634
        ],
        "address": "Blooming Heights Pali Hill Road Bandra West Mumbai- 400050"
    },
    {
        "location": [
            19.11987853277129,
            72.85333609070446
        ],
        "address": "Suhana Building In Front Of Kamgar Kalyan Kendra Gundavali Andheri East Mumbai- 400069"
    },
    {
        "location": [
            19.1016106896019,
            72.8429012678552
        ],
        "address": "NIVANT CHS BAJAJ ROAD VILE PARLE WEST MUMBAI-400056"
    },
    {
        "location": [
            19.05924054971151,
            72.90605517320749
        ],
        "address": "Building No. 22 near bhau pradhan maidan, subhash nagar, Chembur, Mumbai 400070"
    },
    {
        "location": [
            19.1909158540494,
            72.85697812795233
        ],
        "address": "Oscar Apartment, Pushpa park, Malad east, Mumbai- 400097"
    },
    {
        "location": [
            19.05176531629363,
            72.86876974986349
        ],
        "address": "Bhangiri Building, Manakikar marg, Near Chunabhatti Phatak, Chunabhatti West, Mumbai- 400022"
    },
    {
        "location": [
            19.13943599981226,
            72.8304669998353
        ],
        "address": "ROYAL CLASSIC NEW LINK ROAD ANDHERI WEST MUMBAI-400058"
    },
    {
        "location": [
            18.96162694723421,
            72.8098051514458
        ],
        "address": "Angel building, Krishna Sanghi Path, August Krankti maidan,Gamdevi. Mumbai- 400007"
    },
    {
        "location": [
            19.0037054999598,
            72.854641700316
        ],
        "address": "MONARCH GARDEN, R A KIDWAI ROAD, SEWREE, MUMBAI-400015"
    },
    {
        "location": [
            19.08091769997176,
            72.85052099978601
        ],
        "address": "Yashodhan Building, SBI Golibar, Vakola, Mumbai- 400055"
    },
    {
        "location": [
            19.05110745357235,
            72.83811031175144
        ],
        "address": "Blue Flame Building S V Road Shanti Nursing Home Building - Next To Indian Oil Bandra West Mumbai- 400050"
    },
    {
        "location": [
            19.06838820369764,
            72.90118933556379
        ],
        "address": "Amarkunj Society, Pestam Sagar Road No.2, Chembur Mumbai- 400089"
    },
    {
        "location": [
            19.19852462089984,
            72.83819434321698
        ],
        "address": "Maxmay Building, tank road, orlem,Malad West , Mumbai- 400064"
    },
    {
        "location": [
            19.01757143368614,
            72.85470573257719
        ],
        "address": "Sainath Hotel, Near fish market, Wadala (W), Mumbai- 400031"
    },
    {
        "location": [
            18.96679090989981,
            72.80359900257447
        ],
        "address": "Shreevardhan Building, Oomar Park, B D Marg, Tata garden, Grant Road, Mumbai- 400026"
    },
    {
        "location": [
            19.0047532337361,
            72.8542365926646
        ],
        "address": "Rati Wadala, Near R A Kidwai Road,Police Station, Sewree, Mumbai- 400015"
    },
    {
        "location": [
            19.07186710058384,
            72.83189480057868
        ],
        "address": "Nav Bahar Building, 15th Road, Khar West, Mumbai- 400052"
    },
    {
        "location": [
            19.12935880004547,
            72.82793449917801
        ],
        "address": "WESTERN HEIGHTS J P ROAD ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            19.0623134004569,
            72.90236590017484
        ],
        "address": "Siddharth Residency, P.Y.Thorat Marg, Chembur, Mumbai- 400089"
    },
    {
        "location": [
            19.1843466952888,
            72.85297987264853
        ],
        "address": "Raheja park sanjivani hospital Malad east Mumbai- 400097"
    },
    {
        "location": [
            18.94860325856298,
            72.79673496472486
        ],
        "address": "Alankar Building, J Mehta marg, Teen Batti, Walkeshwar, Mumbai- 400006"
    },
    {
        "location": [
            19.00648138053184,
            72.83909133816472
        ],
        "address": "Tata Mills CHS, Parel, MUmbai-400012"
    },
    {
        "location": [
            19.08417945767946,
            72.85655347802563
        ],
        "address": "Kanishka Building, CISF camp, Kalina, Santacruz East, Mumbai- 400055"
    },
    {
        "location": [
            19.05134486335542,
            72.83802131167089
        ],
        "address": "Blue Flame CHS S V Road Indain oil petrol pump Bandra West Mumbai- 400050"
    },
    {
        "location": [
            19.16840665401436,
            72.88072014336265
        ],
        "address": "Lilly building Mantri park, Dindoshi Malad East Mumbai- 400097"
    },
    {
        "location": [
            18.95640253178899,
            72.80970322298411
        ],
        "address": "Suresh Bhavan, Chowpati Road, Opp Nana nani park, Malabar Hill, Mumbai-400007"
    },
    {
        "location": [
            19.10846073173013,
            72.84741959275999
        ],
        "address": "Durvankur Society Shahaji Raje Road Vile Parle East Mumbai- 400057"
    },
    {
        "location": [
            19.06890780056952,
            72.88148879845679
        ],
        "address": "TAYBAH APARTMENT KHAN ABDUL MASJID ROAD, BRAHMANWADI KURLA WEST MUMBAI - 400070"
    },
    {
        "location": [
            19.19041669914858,
            72.8447859996975
        ],
        "address": "Shivram Apartment , Ramchandra Lane Ramchandra Lane Malad west Mumbai- 400064"
    },
    {
        "location": [
            19.18015358202469,
            72.8612810261699
        ],
        "address": "Bahist Apartment , Near Bahji Market, Pathanwadi Malad east Mumbai- 400097"
    },
    {
        "location": [
            18.96371375732686,
            72.82159692418315
        ],
        "address": "Murga Giran Building, P B Marg, Kamathipura, Mumbai- 400008"
    },
    {
        "location": [
            19.1315240986456,
            72.83737529970459
        ],
        "address": "MINUMEENAR BLDG OFF VEERA DESAI ROAD ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            18.95873689508986,
            72.81309186956267
        ],
        "address": "J K Finance Tower, Gamdevi Road, Gamdevi, Mumbai- 400007"
    },
    {
        "location": [
            19.19130670024387,
            72.85477880019674
        ],
        "address": "Abhijit Indavan Complex Datta Mandir Road Malad East Mumbai- 400097"
    },
    {
        "location": [
            19.04252623436078,
            72.84860047423224
        ],
        "address": "Dr Baliga Nagar, jasimin mill Road, Dharavi Jasmin mill road, Dharavi, Mumbai- 400017"
    },
    {
        "location": [
            18.95573965767439,
            72.83465297601957
        ],
        "address": "Kashmiri Manzil, J.B.Shah marg Mumbai-400003"
    },
    {
        "location": [
            19.06804209869329,
            72.83035969975269
        ],
        "address": "Chinar 21st Rd, khar, Mumbai- 400050"
    },
    {
        "location": [
            19.12477400161239,
            72.84073500080945
        ],
        "address": "New heritage Near Collector Office Andheri West Mumbai- 400058"
    },
    {
        "location": [
            19.08515914687724,
            72.91089749451115
        ],
        "address": "Neelkanth, R N Marg, Opposite Tea Villa, Pant Nagar, Mumbai- 400075"
    },
    {
        "location": [
            19.14591470015221,
            72.85743459949869
        ],
        "address": "Hill view Near Western express Highway bimbisar nagar, goregaon East Mumbai-400065"
    },
    {
        "location": [
            18.96366310638834,
            72.82076340101509
        ],
        "address": "Siddhesh Deep Building, Balram Street Road, P B Marg, Grant road, Mumbai- 400006"
    },
    {
        "location": [
            19.1059825654918,
            72.83092712950975
        ],
        "address": "SHAGUN BLDG , N.S ROAD NO.9 JUHU VILLE PARLE WEST MUMBAI- 400056"
    },
    {
        "location": [
            19.11367847812761,
            72.83754002883059
        ],
        "address": "Junaid Nagar C D Burfiwala Road, Andheri West Mumbai-400058"
    },
    {
        "location": [
            19.11439161336555,
            72.82710780554929
        ],
        "address": "Dev Park, Chandan Cinema , Juhu, MUmbai- 400049"
    },
    {
        "location": [
            19.11791968983483,
            72.84025906804355
        ],
        "address": "Manisha Building Plot No 52 N S Road JVPD VILE PARLE WEST MUMBAI- 400056"
    },
    {
        "location": [
            18.95345324199871,
            72.80619073784844
        ],
        "address": "Doshi palace, Walkeshwar road, Malabar hill, Walkeshwar, Mumbai- 400006"
    },
    {
        "location": [
            19.17983885254994,
            72.86365680986358
        ],
        "address": "HUMERA PARK RANISATI MARG , PATHANWADI Malad East, Mumbai-400097"
    },
    {
        "location": [
            19.14411440020745,
            72.83854609965896
        ],
        "address": "ELITE RESIDENTCE SULATANA BEHRAM BAUG JOGESHWARI WEST MUMBAI- 400102"
    },
    {
        "location": [
            19.18579721799883,
            72.8190250943468
        ],
        "address": "Vaishali Apartment, MHADA Malwani Malad West Mumbai-400095"
    },
    {
        "location": [
            18.96156710112902,
            72.82123674039451
        ],
        "address": "12th Lane Khetwadi, Mithaiwala Mansion, Grant road, Near Balwas Hotel, Khetwadi, Mumbai-400007"
    },
    {
        "location": [
            18.96494001270727,
            72.81965254520328
        ],
        "address": "Kamar Building, K K Marg, Opp Navjivan society, Kamathipura, Mumbai- 400008"
    },
    {
        "location": [
            18.96394112501762,
            72.81041860429852
        ],
        "address": "Spenta Tower, Forjett street, Gawalia tank, Grant Road, Mumbai- 400036"
    },
    {
        "location": [
            18.93452541830031,
            72.83641077784328
        ],
        "address": "blossoms, modi strret, opp fish market, fort Mumbai- 400001"
    },
    {
        "location": [
            18.95233507140767,
            72.83440789142435
        ],
        "address": "Lucky Mansion, Mohd Ali Rd, Mumbai- 400003"
    },
    {
        "location": [
            18.95764931897959,
            72.83151239891433
        ],
        "address": "Makka Manzil, Nizam street, Bhendi bazar, Mumbai- 400003"
    },
    {
        "location": [
            19.04363890009815,
            72.84995790092489
        ],
        "address": "Vaibhav apartment, Dharavi main road, opposite Abhudaya Bank, Dharavi, Mumbai- 400017"
    },
    {
        "location": [
            18.99196790514752,
            72.81775716178409
        ],
        "address": "Mata ramabai ambedkar nagar, E Moses Road, Worli, Mumbai- 400018"
    },
    {
        "location": [
            19.05463498042277,
            72.83236681467743
        ],
        "address": "Rose mary building, Ice Factory Lane, Off Hill Road, Trios Mall Bandra West, Mumbai- 400050"
    },
    {
        "location": [
            19.12869021115957,
            72.86779607758176
        ],
        "address": "Guru Arjun Dev CHS Mahakali Caves Road Bindra Complex Andheri East Mumbai- 400093"
    },
    {
        "location": [
            19.07043859962363,
            72.88029069897017
        ],
        "address": "REGAL HOUSE BLDG PIPE LINE MARKAZ MASJID BUDDHA COLONY MUMBAI-400070"
    },
    {
        "location": [
            19.05840073080026,
            72.90080284214432
        ],
        "address": "sanket apartment,14 th road,near ambedkar Garden Chembur Mumbai- 400071"
    },
    {
        "location": [
            19.17438190122677,
            72.85367340062878
        ],
        "address": "kailash ram krupa kale bldg, Upper govind nagar, Mumbai- 400065"
    },
    {
        "location": [
            19.23158763497941,
            72.83848845147135
        ],
        "address": "Building no.5 MHB colony Old MHB Gorai Rd Borivali West Mumbai-400092"
    },
    {
        "location": [
            19.02479940254987,
            72.86654970070214
        ],
        "address": "Dosti orchid, Dosti Acres, Antop Hill, Wadala, Mumbai-400037"
    },
    {
        "location": [
            18.97302991187591,
            72.81515646083801
        ],
        "address": "Milan Building, Tardeo Rd, AC Market, Tardeo, Mumbai-400034"
    },
    {
        "location": [
            19.128385315892,
            72.83359826528728
        ],
        "address": "MHADA COLONY NO 2 TAPE DARGA OPP WADIA HIGHSCHOOL ANDHERI WESTMUMBAI- 400053"
    },
    {
        "location": [
            18.95642640223018,
            72.81308495457282
        ],
        "address": "Nemani apartment,N S patkar marg, Girgaon chowpatty, Mumbai- 400007"
    },
    {
        "location": [
            19.095851679272,
            72.84014426524446
        ],
        "address": "NANAWATI HOSPITAL, VILEPARLE WEST, MUMBAI- 400056"
    },
    {
        "location": [
            19.14139897355685,
            72.80671912033466
        ],
        "address": "THOMAS APPARTMENT OPP.NATRAJ BUILDING, VERSOVA ANDHERI WEST MUMBAI-400061"
    },
    {
        "location": [
            18.96569416268198,
            72.81339531220519
        ],
        "address": "Bhatia Hospital, Tardeo road, Old Chikalwadi, Grant Road, Mumbai-400007"
    },
    {
        "location": [
            18.95489671687805,
            72.82240452627661
        ],
        "address": "Kalyan Building, Sadashiv Cross Lane, Kandawadi, Grant Rd, Mumbai- 400007"
    },
    {
        "location": [
            18.96845021814094,
            72.82254177350617
        ],
        "address": "Kailash Apartment, JBB Rd, Dalal Estate, Mumbai Central-400008"
    },
    {
        "location": [
            18.92156681802486,
            72.83228100093567
        ],
        "address": "Abbas bldg,b k boman behram marg,back side of taj hotel, colaba,Mumbai-400005"
    },
    {
        "location": [
            18.95770413418953,
            72.8366787421493
        ],
        "address": "AmirAli Building, Shahida Marg, Mumbai- 400009"
    },
    {
        "location": [
            18.95924359636312,
            72.82760318369158
        ],
        "address": "Suryadarshan building, Santsena marg, second Kumbharwada, Girgaon, Mumbai-400003"
    },
    {
        "location": [
            18.99367330045698,
            72.8368930005215
        ],
        "address": "NARAYAN ASHRAM, GANESH GALLI ROAD, LALBAUG, PAREL, MUMBAI, 400012"
    },
    {
        "location": [
            19.02315925774155,
            72.83421819398319
        ],
        "address": "Dinkar Apartment, behind Suryavanshi Hall, Dadar west, Mumbai- 400016"
    },
    {
        "location": [
            18.9952865094402,
            72.82119253232985
        ],
        "address": "Lokhandwala residency, L.N. Pappan Marg, Near Four seasons hotel, Worli, MUmbai- 400013"
    },
    {
        "location": [
            19.07448920222779,
            72.83698530110755
        ],
        "address": "Sandeep building, 10th road, Khar West Mumbai- 400052"
    },
    {
        "location": [
            19.09401310101867,
            72.84439209980565
        ],
        "address": "Padmavati Azad Road Vile Parle East Mumbai- 400057"
    },
    {
        "location": [
            19.14480100092363,
            72.84076100109814
        ],
        "address": "KHATIZA HIGHTECH TOWER BEHRAM BAUG ROAD JOG FISH MARKET JOGESHWARI WEST MUMBAI- 400102"
    },
    {
        "location": [
            19.17612409915269,
            72.84443979920837
        ],
        "address": "Deep Sadan Building SV road Sunder nagar Goregaon Mumbai- 400064"
    },
    {
        "location": [
            19.03795160807325,
            72.85956456476535
        ],
        "address": "Jain Society, Road No.18, Manhar Niwas, Sion West, Mumbai- 400022"
    },
    {
        "location": [
            18.95567677838397,
            72.82030816702733
        ],
        "address": "Khotachi wadi, Dhobi Ghat, Girgaon, Mumbai- 400004"
    },
    {
        "location": [
            18.95403805772641,
            72.8333698831657
        ],
        "address": "Noor Hospital Building, Mohammed Ali Road, Mumbai-400003"
    },
    {
        "location": [
            18.97308107343798,
            72.82557268082134
        ],
        "address": "Suhag Palace, Reynold Road, Opp YMCA Ground, Agripada 400011"
    },
    {
        "location": [
            18.99076126945868,
            72.83659405557796
        ],
        "address": "SHRI GANESH NAGAR CO HOUSING SOCIETY, CHIWDA GALLI ROAD, LALBAUG, PAREL, MUMBAI-400012"
    },
    {
        "location": [
            19.0706594480422,
            72.83625993371663
        ],
        "address": "Hari Niwas, S V Road Next To Podar IB board school Khar West Mumbai- 400052"
    },
    {
        "location": [
            19.09573516189392,
            72.84659696670086
        ],
        "address": "Shivshakti shraddhanand road vileparle east Mumbai- 400057"
    },
    {
        "location": [
            19.12693997588879,
            72.82494255374525
        ],
        "address": "KANWAL BLDG FOUR BUNGLOWS OPP FISH MARKET ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            19.0525582473855,
            72.91082055166858
        ],
        "address": "Goldcrest Building W.T. Patil Marg amar cinema Chembur Mumbai- 400071"
    },
    {
        "location": [
            19.07538880001521,
            72.91242049986742
        ],
        "address": "Parasnath Building Sudha Park Near Railway Police ground Garodia Nagar Mumbai-400075"
    },
    {
        "location": [
            19.17045159949196,
            72.84311890004268
        ],
        "address": "OFF OPP. to Patel Petrol Pump ?????? ????????? ????? Goregaon West Mumbai-400062"
    },
    {
        "location": [
            19.03482733781931,
            72.85716533089918
        ],
        "address": "Shivaji Nagar CHS, Bhau Daji Rd,Sion West, Mumbai- 400022"
    },
    {
        "location": [
            18.92380419791584,
            72.83177018027394
        ],
        "address": "Munira bldg, Shahid bhagatsing road, near delhi darbar, colaba, Mumbai- 400005"
    },
    {
        "location": [
            19.01501899918175,
            72.81752900023633
        ],
        "address": "WPC, Sir Pochkhanwala Road, Worli, Mumbai-400030"
    },
    {
        "location": [
            19.05194474637618,
            72.82233891647793
        ],
        "address": "Vastu Building B J Road Bandra West Mumbai- 400050"
    },
    {
        "location": [
            19.07624796577155,
            72.87818323246717
        ],
        "address": "PRANAM HOUSING SOCIETY ANNASAGAR MARG 192 KURLA CST ROAD BEHIND NOOR HOSPITAL MATCH FACTORY MUMBAI- 400070"
    },
    {
        "location": [
            19.15757853949804,
            72.83750158881226
        ],
        "address": "Ganesh Maidan Motilal nagar no. 2 Goregaon West Mumbai- 400104"
    },
    {
        "location": [
            19.02367680249057,
            72.86751984937196
        ],
        "address": "Dosti Blossom, Antop Hill, Wadala East, Mumbai-400037"
    },
    {
        "location": [
            18.97688868938127,
            72.8245909737755
        ],
        "address": "Prabhat Building, R B Chandorkar Marg, Police Staion Agripada, Mumbai- 400011"
    },
    {
        "location": [
            19.00434094065949,
            72.84294171520754
        ],
        "address": "Tata foothpath, Near tata hospital, Parel, Mumbai- 400012"
    },
    {
        "location": [
            19.01837719743785,
            72.8376513452927
        ],
        "address": "Tavade building, Krushnaji Waman Chitale path, Dadar, Mumbai- 400028"
    },
    {
        "location": [
            19.11920580051535,
            72.8432858995386
        ],
        "address": "OM VIRAJ BLDG PALIRAM ROAD NEAR K WEST WARD ANDHERI WEST MUMBAI-400058"
    },
    {
        "location": [
            19.04671400004867,
            72.89526209991986
        ],
        "address": "Barrack no.25&32, Indira Nagar, Opp. Red Spice Hotel, Chembur Mumbai- 400071"
    },
    {
        "location": [
            19.16321210016212,
            72.83504380033443
        ],
        "address": "prathana hospital bldg, mg road behind kokan kinara hotel Goregaon Wesrt Mumbai- 400104"
    },
    {
        "location": [
            19.02543730124513,
            72.85979452744793
        ],
        "address": "Shamala Building, Lotlikar Lane, Matunga, Mumbai- 400019"
    },
    {
        "location": [
            19.07554433246204,
            72.83448866460277
        ],
        "address": "Ramadevi Mansion, Sea View Building West Avenue Road Santacruz West Mumbai- 400054"
    },
    {
        "location": [
            18.97464495635043,
            72.82651562073673
        ],
        "address": "Shirinbhai Chawl, Morland Road, Agripada Police Staion, Mumbai Central- 400008"
    },
    {
        "location": [
            19.00512767077463,
            72.8384526615479
        ],
        "address": "BEST Quaters, V Shantaram Road, Gurudam Kripa Housing Society, Parel, Mumbai- 400012"
    },
    {
        "location": [
            19.01915250043507,
            72.83784110052099
        ],
        "address": "Soubhagya apartment, S.K. Bole Marg, Laxmi Narayan Mandir, Dadar West, Mumbai- 400028"
    },
    {
        "location": [
            19.0659747822005,
            72.83273244196468
        ],
        "address": "Shiv Chhaya Building 14th Road Opp N M Medical Khar West MUmbai- 400052"
    },
    {
        "location": [
            19.11799970038123,
            72.87803739950975
        ],
        "address": "A wing Sevenhills hospital residential quarters Marol Maroshi Road Andheri East Mumbai- 400059"
    },
    {
        "location": [
            19.13682454728122,
            72.8300550757174
        ],
        "address": "RED ROSE, RAVIRAJ COMPLEX OFF NEW ROAD NEXT TO LAXMI INDUSTRIAL ISTATE ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            19.18682590000995,
            72.8324187000668
        ],
        "address": "Interface heights link road Behind D mart Malad West Mumbai- 400064"
    },
    {
        "location": [
            19.041691972000024,
            72.85052482000003
        ],
        "address": "madina nagar, 60 feet rd, dharavi Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, BOUNDARY, India"
    },
    {
        "location": [
            19.03408418379157,
            72.86449421138708
        ],
        "address": "Punjabi Camp, Near Hari Mandir, Sion Koliwada, Mumbai- 400022"
    },
    {
        "location": [
            18.95748908049424,
            72.8154273063236
        ],
        "address": "Fateh Manzil, Dr.D B Marg, Opera House, Girgaon, Mumbai-400004"
    },
    {
        "location": [
            19.00429543289544,
            72.83777706946024
        ],
        "address": "BIT CHAWL, VITTHAL CHAVAN MARG, NEXT TO DAMODAR HALL, PAREL, MUMBAI- 400012"
    },
    {
        "location": [
            19.08453970876808,
            72.83558818667073
        ],
        "address": "Indrayani Bulding Juhu Road Santacruz West Mumbai- 400054"
    },
    {
        "location": [
            19.09393493561787,
            72.84485483772468
        ],
        "address": "HOSTEL NO 2 HILL VIEW APARTMENT N. P. Thakkar Road VILEPARLE EAST MUMBAI- 400057"
    },
    {
        "location": [
            19.1407370683662,
            72.83404672126117
        ],
        "address": "DHEERAJ GAURAV HEIGHTS NEAR INFINITY MALL ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [
            19.06792045384607,
            72.88102301119729
        ],
        "address": "IMTIAZ BUILDING SHAMI COMPOUND BRAHMANWADI KALLU MUTTON SHOP KURLA WEST MUMBAI- 400070"
    },
    {
        "location": [
            19.0519766022141,
            72.92671793353959
        ],
        "address": "HIRANANDANI LALLUBHAI, LALLUBHAI POLICE STATION GOVANDI MUMBAI- 400043"
    },
    {
        "location": [
            19.06808990065536,
            72.89449589921708
        ],
        "address": "Building No.73 Gangotri Building Tansa Pipe Line Road Gangotri Building Chembur- 400071"
    },
    {
        "location": [
            19.19517419911304,
            72.84173629979354
        ],
        "address": "Farm manor Apartment Adarsh complex Malad West Mumbai-400064"
    },
    {
        "location": [
            19.15910000081551,
            72.84760200051514
        ],
        "address": "Swastik Residency road no 2 jawahar nagar Goregaon West Mumbai- 400104"
    },
    {
        "location": [
            19.01161317700957,
            72.85651402577717
        ],
        "address": "MBPT New Colony, Wadala (E), Mumbai- 400037"
    },
    {
        "location": [
            18.95671811361133,
            72.79948921077431
        ],
        "address": "Priyadarshani park, L J Marg, Navshanti Nagar, Malabar Hill, Mumbai 400006"
    },
    {
        "location": [
            18.96732999920528,
            72.83910999912936
        ],
        "address": "Shirin Manzil, Hawabai Chawl, St Merry Road, Tadwadi, Mazgaon, Mumbai-400010"
    },
    {
        "location": [
            19.05507717104451,
            72.83742301752646
        ],
        "address": "Zarina CHS S V Road Opp H P Petrol Pump & Jama Masjid Bandra West Mumbai- 400050"
    },
    {
        "location": [
            19.09641370006915,
            72.84916050024171
        ],
        "address": "VISHNU VILLA NARIMAN ROAD VILEPARLE EAST MUMBAI- 400057"
    },
    {
        "location": [
            19.04677011350242,
            72.89344832636205
        ],
        "address": "Inlak Hospital C.G. Road Inlak Hospital Chembur 400071"
    },
    {
        "location": [
            19.1572488926613,
            72.83307611374319
        ],
        "address": "masjid galli bhagat singh nagar no 1 near tayeba masjir Goregaon West Mumbai-400104"
    },
    {
        "location": [
            19.02144220299746,
            72.84822927534336
        ],
        "address": "Hindu Colony, IES Raje Shivaji Vidyalay Canteen, Dadar, Mumbai- 400014"
    },
    {
        "location": [
            19.23692268964234,
            72.84220703236863
        ],
        "address": "Police quarters,Yogi Nagar, Borivali west- 400092"
    },
    {
        "location": [
            19.2325083805349,
            72.86004746455633
        ],
        "address": "Siddhivinayak, Sukarwadi, Borivali west- 400092"
    },
    {
        "location": [
            19.2303818659108,
            72.82724671753233
        ],
        "address": "Yogeshwar CHS Plot no 40, Gorai 2, Pepsi Ground, Borivali west- 400092"
    },
    {
        "location": [
            19.24486717756416,
            72.84953588065856
        ],
        "address": "Raj Flodio , I C Colony, Borivali West- 400103"
    },
    {
        "location": [
            19.24896701644581,
            72.85039501699657
        ],
        "address": "Hill crest, Holy cross road, Thomas church, IC colony, Borivali west-400103"
    },
    {
        "location": [
            19.19378279195065,
            72.85883772103061
        ],
        "address": "Sunshine Society, Datta Mandir Road, Kandivali East- 400101"
    },
    {
        "location": [
            19.20057779943126,
            72.86807219901337
        ],
        "address": "Acme Oasis ,Akurli Road, opp. Mahindra & Mahindra, Kandivali East, Mumbai, 400101"
    },
    {
        "location": [
            19.20736033533321,
            72.81977715259843
        ],
        "address": "Tirumala Krupa, Kandivali, Charkop, Charkop Gaon, Kandivali West, Mumbai, 400067"
    },
    {
        "location": [
            19.21036570278617,
            72.86568642480607
        ],
        "address": "Videocon Tower, Kandivali East, Mumbai, 400101"
    },
    {
        "location": [
            19.19827942239157,
            72.85432179120784
        ],
        "address": "Kalpataru Garden Chs, Rajguru Flyover, Kandivali, Ashok Nagar, Kandivali East, Mumbai, 400101"
    },
    {
        "location": [
            19.21161665775317,
            72.84251673249412
        ],
        "address": "Ronak Arcade, S V Road, Opposite Telehpone Exchange, Kandiwali West- 400067"
    },
    {
        "location": [
            19.21132252239151,
            72.8732946446191
        ],
        "address": "EMP Bldg no.49, Thakur Village, Kandiwali West, 400101"
    },
    {
        "location": [
            19.19821808559484,
            72.85702182052151
        ],
        "address": "Amrut kanchan Society, Ashok nagar, Kandivali East- 400101"
    },
    {
        "location": [
            19.21301532345382,
            72.8415009464576
        ],
        "address": "Raj Arcade, Mahavir Nagar, Kandivali West- 400067"
    },
    {
        "location": [
            19.21185534157447,
            72.8516418566863
        ],
        "address": "Silver Avenue,Julekabai Chandu Chawl, Kandivali West- 400067"
    },
    {
        "location": [
            19.19505911291497,
            72.86733716483546
        ],
        "address": "Sagar Society SRA,Hanuman Nagar,Nr. Ayyappa Mandir,Kandivali East, Mumbai-400101"
    },
    {
        "location": [
            19.20141878575375,
            72.84210039343505
        ],
        "address": "Dharamveer chs,iraniwadi road no.3,kandivali west- 400067"
    },
    {
        "location": [
            19.21648885735142,
            72.84569676862795
        ],
        "address": "J3 Block no.3, Mahavir Nagar, Kandivali West, 400067"
    },
    {
        "location": [
            19.20661649962296,
            72.85040409871917
        ],
        "address": "Ladiwala Bhavan, kandivali west, 400067"
    },
    {
        "location": [
            19.12302909043466,
            72.91637099186661
        ],
        "address": "Divine CHS,Behind Tirandaz School, Powai- 400076"
    },
    {
        "location": [
            19.12167399056887,
            72.93912895666386
        ],
        "address": "MHADA Building, Vikhroli East- 400083"
    },
    {
        "location": [
            19.1447462723338,
            72.9329486837595
        ],
        "address": "Samruddhi Gardens Society, LBS Road,Bhandup West-400078"
    },
    {
        "location": [
            19.039267403000053,
            72.85491353500004
        ],
        "address": "muslim nagar,dharavi Machine Shop, 90 Feet Road, Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, BOUNDARY, India"
    },
    {
        "location": [
            19.017987179000045,
            72.81980024300003
        ],
        "address": "dharamraj bhandu cottage,bua bhaye marg G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.001709748000053,
            72.81849399200007
        ],
        "address": "bdd chawl, worli BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 40013, India"
    },
    {
        "location": [
            19.01835715900006,
            72.81840243300007
        ],
        "address": "dhrmaraj bhandu cottage, bua bhaye marg G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.01952039100007,
            72.81786931500005
        ],
        "address": "bholanath worlikar chawl G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [
            19.080310712000028,
            72.85698821900007
        ],
        "address": "kalyani niwas, barma bakery, vakola, santacruz Vakola Village, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400098, India"
    },
    {
        "location": [
            19.14959293075718,
            72.94582136514298
        ],
        "address": "Arogyasadan Society, Juvekar Road, Bhandup East- 400042"
    },
    {
        "location": [
            19.20827467432127,
            72.8323169699333
        ],
        "address": "PARK ROYAL CHS , OFF LBS ROAD, MULUND WEST- 400080"
    },
    {
        "location": [
            19.16642353291165,
            72.92747930334731
        ],
        "address": "MCGM QUARTERS, BHANDUP COMPLEX, MULUND WEST- 400080"
    },
    {
        "location": [
            19.17414334136941,
            72.96243320666285
        ],
        "address": "MANGAL SRUSHTI , NEELAM NAGAR, MULUND EAST- 400081"
    },
    {
        "location": [
            19.16339407384781,
            72.94483625566802
        ],
        "address": "Vivekanad Society, J.N.ROAD, , SARVODAY NAGR, MULUND WEST- 400080"
    },
    {
        "location": [
            19.01730156437571,
            72.81922835574561
        ],
        "address": "NO.25,buva bhaye marg,worli, village,Dadar,Mumbai-400030"
    },
    {
        "location": [
            18.95845886654826,
            72.83547541671486
        ],
        "address": "Heights Nishanpada Road Mumbai- 400009"
    },
    {
        "location": [
            18.95629257860853,
            72.83564771070274
        ],
        "address": "Masjid Building Nishanpada Road Mumbai- 400009"
    },
    {
        "location": [
            19.16066549990866,
            72.84871440038823
        ],
        "address": "8 Jawahar Nagar Road No. 8 Opposite Bank of Baroda Goregaon West Mumbai- 400104"
    },
    {
        "location": [
            18.94942490024278,
            72.83568129830951
        ],
        "address": "manzil, Old Bengalipura, Koliwada- 400003"
    },
    {
        "location": [
            18.97524860076407,
            72.82382180037979
        ],
        "address": "hardt Hospital Dr. A. Nair Road Agripada Police Station, Mumbai - 400011"
    },
    {
        "location": [
            18.97480981114631,
            72.82624095010003
        ],
        "address": "ing NO. 22 BIT Chawl Madhavrao Gangan Marg Near Fancy Market Agripada- 400011"
    },
    {
        "location": [
            19.16144100049506,
            72.83414650056405
        ],
        "address": "s Building Laxmi nagarGoregaon West Mumbai- 400104"
    },
    {
        "location": [
            19.03344767921452,
            72.85931359583236
        ],
        "address": "NO. 100, KRUSHNA KUNJ, OPP MANAV SEVA SANGH B A Road Sion East MUMBAI- 400022"
    },
    {
        "location": [
            19.04185019360662,
            72.84822475800539
        ],
        "address": "nd bldg,Jasmin Mill road,Gasita ram factory,dharavi,Mumbai-400017"
    },
    {
        "location": [
            18.95019627891617,
            72.83891488889894
        ],
        "address": "hi Godown, Masjid Side Road, Masjid Bandar, Mumbai-400009"
    },
    {
        "location": [
            18.9690894708455,
            72.82832897304651
        ],
        "address": "m Buiding 3rd Ghelabhai Lane Madanpura Mumbai- 400011"
    },
    {
        "location": [
            18.96521768508955,
            72.84138127778964
        ],
        "address": "Hussain Patel Marg Munna seth Compound Belveder Road, Bhandar Tekdi, Mazgaon, Mumbai - 400010"
    },
    {
        "location": [
            18.98563049970605,
            72.83137699977947
        ],
        "address": "ani Building (Anand Estate) N. M. Joshi Marg Chinchpokli, Mumbai 400011"
    },
    {
        "location": [
            18.99430915006503,
            72.8447583497175
        ],
        "address": "asindhu Chs Transit Camp, G D Ambekar Road Near, Monorail Poll no 11, Kalewadi, Mumbai - 400033"
    },
    {
        "location": [
            18.97440913376164,
            72.83234188462139
        ],
        "address": "l No.1 Panch Khate Chawl B. J. Marg Byculla Mumbai- 400008"
    },
    {
        "location": [
            19.14829666207511,
            72.94465870066692
        ],
        "address": "Yashodhara CHS Udayshree RoadBhandup (E) Mumbai- 400042"
    },
    {
        "location": [
            19.12840599845547,
            72.92525409846182
        ],
        "address": "Parivartan Society LBS Road K-1, MMRDA Colony, Kanjurmarg Railway Station Mumbai-400079"
    },
    {
        "location": [
            19.00558071101374,
            72.85414154401901
        ],
        "address": "rashtra Housing, Board Dyaneshwar Nagar R A Kidwai Road, Sewree,Mumbai-400015"
    },
    {
        "location": [
            18.97302309935158,
            72.82946620026283
        ],
        "address": "illa Arcade Sankhali Stree huda masjid Byculla Mumbai-400008"
    },
    {
        "location": [
            19.01749964617516,
            72.8207839224221
        ],
        "address": "NO 35,ADARSH NGR,buva bhaye marg,worli village,Dadar,Mumbai-400030"
    },
    {
        "location": [
            19.21211643273198,
            72.84074746570468
        ],
        "address": "mi residency, mahavir nagar,ekta nagar Kandivali West Mumbai- 400067"
    },
    {
        "location": [
            19.20169804237701,
            72.82654635237654
        ],
        "address": "no14 Ekta Nagar Mhada Kandivali West- 400067"
    },
    {
        "location": [
            18.96348750274705,
            72.83098459971492
        ],
        "address": "Height Barkat Ali Virani Marg Nagpada Mumbai- 400010"
    },
    {
        "location": [
            19.07724122656829,
            72.88068201295805
        ],
        "address": "IMAN BLDG,  NEW MILL ROAD, Mehboobi Sulemani Masjit, Near Gandhi Maidan, Kurla West - 400070"
    },
    {
        "location": [
            19.19700349193533,
            72.82162947200585
        ],
        "address": "iri Building, Oppo ST Paul School ,Malvani Gate No, Malvani,Malad west, Mumbai-400095"
    },
    {
        "location": [
            18.96654549401343,
            72.84650630105452
        ],
        "address": "ir Niwas, Brahmadev Khot Marg Mazgaon Mumbai- 400010"
    },
    {
        "location": [
            19.06845953377224,
            72.87994922319201
        ],
        "address": "ALA BLDG, PIPE ROAD ,KURLA WEST, Mumbai-400070"
    },
    {
        "location": [
            19.01754458422495,
            72.81905807872688
        ],
        "address": "QTR,buva bhaye marg/worli village,Dadar,Mumbai400030"
    },
    {
        "location": [
            19.17624769790309,
            72.86790399039066
        ],
        "address": "ay Gandhi Nagar, Dindoshi Court, Malad East, Mumbai 400097"
    },
    {
        "location": [
            18.96627254683592,
            72.81261419545214
        ],
        "address": "Hari Building V N Marg Gawalia Tank Grant Rd Mumbai-400007"
    },
    {
        "location": [
            18.96481070009375,
            72.81128709951503
        ],
        "address": "rn House Bldg Forjett Street Grant Rd Mumbai- 400007"
    },
    {
        "location": [
            18.96428769797326,
            72.81579278067214
        ],
        "address": "hkar Building Grant Rd Mumbai- 400007"
    },
    {
        "location": [
            18.96170459791564,
            72.83455537058657
        ],
        "address": "ad chamber L.N.Jadhav marg, Opp J.J. Hospital, Mumbai- 400009"
    },
    {
        "location": [
            18.94999470045629,
            72.82329779892072
        ],
        "address": "ke building, gangaram khatriwadi thakurdwar Kalbadevi, Mumbai- 400004"
    },
    {
        "location": [
            18.95854357177087,
            72.83701800338875
        ],
        "address": "him ManorBuilding, SVP Rd, Dongari, Mumbai- 400009"
    },
    {
        "location": [
            18.95581873980234,
            72.83170594325765
        ],
        "address": "os manzil Noor Bakery Ghoghari Muhalla Mumbai- 400003"
    },
    {
        "location": [
            19.24373489399126,
            72.84790500130553
        ],
        "address": "Haven LIC Colony Boriwali west Mumbai- 400103"
    },
    {
        "location": [
            18.95722170072738,
            72.82639770037575
        ],
        "address": "mpura Masjid Charni Road East Mumbai-400003"
    },
    {
        "location": [
            18.95371731230064,
            72.83379650503205
        ],
        "address": "Mansion, Tantanpura Road, Mumbai- 400003"
    },
    {
        "location": [
            19.05430541895303,
            72.8335676676619
        ],
        "address": "al wala bldg,opp fish market bazar road,bandra west, Mumbai - 400050"
    },
    {
        "location": [
            19.06673682362068,
            72.91874730159053
        ],
        "address": "SOCIETY, G.M LINK , Shivaji Nagar Police Station, Lotus Colony, Mumbai - 400043"
    },
    {
        "location": [
            19.07045983273889,
            72.88440876569665
        ],
        "address": "rak Complex, LIG Colony, Vinobha Bhave Nagar, Kurla West, Kurla, Mumbai - 400070"
    },
    {
        "location": [
            18.99219662184117,
            72.81810516671031
        ],
        "address": "ramabai ambedkar nagar,E Moses Road,Worli,Mumbai-400018"
    },
    {
        "location": [
            19.13483348957451,
            72.86007485193495
        ],
        "address": "han-E -Madina Masjid, Shani Maharaj Mandir Road, Prem Nagar, Jogeshwari East, Mumbai - 400060"
    },
    {
        "location": [
            19.12611395329413,
            72.84809110081648
        ],
        "address": "khan Chawl, Mogra Pada, Endheri East, Mumbai - 400069"
    },
    {
        "location": [
            19.00826370676675,
            72.8467899552739
        ],
        "address": "AON POLICE BLDG HEADQUARTERS,DADAR east, Mumabi-400014"
    },
    {
        "location": [
            19.014441758102,
            72.84283575815255
        ],
        "address": "BAI BUILDING,ABOVR SADHNA HOTEL,DADAR EAST, DADAR, MUMBAI - 400014"
    },
    {
        "location": [
            19.1054448851514,
            72.86005493244238
        ],
        "address": "tma Kabir Nagar, Bamanwada, Andheri East, Mumbai - 400099"
    },
    {
        "location": [
            19.12565764283596,
            72.88388967718569
        ],
        "address": "Marol Police Camp, Marol Maroshi Road, Customs Colony, Marol, Andheri East, Mumbai - 400059"
    },
    {
        "location": [
            19.01040865595671,
            72.82458414918285
        ],
        "address": "NO 6,ADARSH NAGAR,buva bhaye marg,worli village,Dadar,Mumabi-400030"
    },
    {
        "location": [
            19.08335845453444,
            72.88161523094853
        ],
        "address": "FLOOR SHEETAL APT CST Road, Behind Shital Cinema, Kurla West, Mumbai - 400070"
    },
    {
        "location": [
            19.00218609656497,
            72.8218707420464
        ],
        "address": "chawl no 111, SS amrutwar marg,worli, Dadar, Mubaii 400018"
    },
    {
        "location": [
            18.99626048305448,
            72.81482888043143
        ],
        "address": "mari sadan blg, worli hill road, worl, Dadar, Mumbai- 400018"
    },
    {
        "location": [
            19.00349502406569,
            72.82764953105583
        ],
        "address": "s Network, Kamala mill campus, lower parel, Mumbai- 400013"
    },
    {
        "location": [
            19.14232417458226,
            72.84083679347636
        ],
        "address": "er Soil CHS - Housing society, Raj Nagar, Jogeshwari, Mumbai - 400102"
    },
    {
        "location": [
            18.9861379567609,
            72.82723845533846
        ],
        "address": "hivinayak building, j r boricha marg, Mahalakshi East, Mumbai-400011"
    },
    {
        "location": [
            19.12030672556815,
            72.84589908001354
        ],
        "address": "adia Dispensary - Doctor SV Road, Railway Colony, Andheri West, Mumbai - 400058"
    },
    {
        "location": [
            19.1438143235692,
            72.84215647999565
        ],
        "address": "brothers, Behram Baug Road, Raj Nagar, Gautam Nagar, Jogeshwari, Mumbai - 400102"
    },
    {
        "location": [
            19.152122172937,
            72.82802751522046
        ],
        "address": "HAD BUILIDING, MILLAT NAGAR,JOGESHWARI WEST,400102"
    },
    {
        "location": [
            19.14139618192999,
            72.8357076746701
        ],
        "address": "shine Cosmic - Apartment building, Behram Baug, Andheri West, Mumbai 400053"
    },
    {
        "location": [
            19.10940817008933,
            72.83013479959206
        ],
        "address": "QUARTER, JUHU ROAD, MAKER KUNDAN GARDE< SANTACRUZ WEST, MUMBAI - 400049"
    },
    {
        "location": [
            19.00855350677077,
            72.83484827347749
        ],
        "address": "a house, Elphinstone road, Elphinstone, Mumbai- 400013"
    },
    {
        "location": [
            19.00972574341402,
            72.82980109814788
        ],
        "address": "hi Aasra CHS, new Prabhadevi Road, Saamna press, Prabhadevi, Mumbai400025"
    },
    {
        "location": [
            19.01149667888298,
            72.82578022054159
        ],
        "address": "hadevi SRA bldg no.2 , Rajabhau Desai Marg, Prabhadevi, Mumbai-400025"
    },
    {
        "location": [
            19.01595917144568,
            72.82937572223527
        ],
        "address": "hi prabha Building, sayani road, Opposite Ravindra Natya Mandir, Prabhadevi, Mumbai-400025"
    },
    {
        "location": [
            19.0171681145523,
            72.82655398727022
        ],
        "address": "d Chaya, tata press lane, Prabhadevi,Mumbai-400025"
    },
    {
        "location": [
            19.01245929740808,
            72.82846416293374
        ],
        "address": "ENCLAVE ,Appa Saheb Marathe Marg , Prabhadevi, Mumbai-400025"
    },
    {
        "location": [
            19.01239957080266,
            72.83021300585361
        ],
        "address": "rsh Cooperative Housing Society - Condominium complex, J A Raul Marg, Prabhadevi, Mumbai - 400025"
    },
    {
        "location": [
            19.00000241760243,
            72.82147289780036
        ],
        "address": "Chawl Building No. 101, Prof NG Bansode Marg, Amrutwar Mare, BDD Chawls Worli, Worli, Mumbai 400018"
    },
    {
        "location": [
            19.15668789426761,
            72.84568018524112
        ],
        "address": "ng kumud nagar SV road Goregaon West Mumbai- 400062"
    },
    {
        "location": [
            18.95971000161665,
            72.83315579981671
        ],
        "address": "o Siddique Hospital Building, Imamwada Rd, Mumbai- 400009"
    },
    {
        "location": [
            19.05515555555556,
            72.84276388888888
        ],
        "address": "Floor No 214 , Behram Nagar, Bandra East, 400055"
    },
    {
        "location": [
            19.08574722222222,
            72.8448361111111
        ],
        "address": "Ravi Tambolli Chawl, Nre Agripada, Santacruz East, 400055"
    },
    {
        "location": [
            19.05675833333334,
            72.84176388888888
        ],
        "address": "R/23, razam Chawl No 03, bandra east, 400055"
    },
    {
        "location": [
            19.05524444444444,
            72.83092222222221
        ],
        "address": "Flat no. 9,Sankalp Siddhi ,Kher Nagar ,Bandra East - 400055"
    },
    {
        "location": [
            19.0647,
            72.85949722222222
        ],
        "address": "Chawl No.60/926, Bharat Nagar, Bandra East - 400055"
    },
    {
        "location": [
            19.06745,
            72.84631944444443
        ],
        "address": "Room no.3 ,Dayaram Chawl ,New Deepakwadi ,Nirmal Nagar ,Khar East - 400055"
    },
    {
        "location": [
            19.05641111111111,
            72.84412499999999
        ],
        "address": "Opp. Nav Nirman Chawl, Ahmed Zakeria, Bandra East-400055"
    },
    {
        "location": [
            19.13468055555556,
            72.85989166666666
        ],
        "address": "C-13/183  , PREM NAGAR  , MASJID THAKUR MAIDAN, COMMUNIST PARTY GALLI, Jogeshwari East - 400060"
    },
    {
        "location": [
            19.09795833333333,
            72.85079444444443
        ],
        "address": "Room no 60 , Shastri nagar, Aliyavar Jung marg , Vile parle East - 400050"
    },
    {
        "location": [
            19.10656388888889,
            72.86858888888888
        ],
        "address": "Kadamwadi, Marol Pipeline , Andheri Kurla - 400059"
    },
    {
        "location": [
            19.11530833333334,
            72.85383611111111
        ],
        "address": "Govind Wadi, Behind Darpan Talkies, Chakala , Andheri East - 400093"
    },
    {
        "location": [
            19.11156111111111,
            72.84957777777777
        ],
        "address": "6/609, Building no. 3 , Tirupati Balaj, Sahar Rd, Saiwad, Andheri East - 400069"
    },
    {
        "location": [
            19.12399183997624,
            72.85027037811345
        ],
        "address": "Room 3 , Sitaram Mithai Wala Chawl, Mogra Pada Andheri East - 400069"
    },
    {
        "location": [
            19.10033611111111,
            72.84599166666666
        ],
        "address": "16 A, Fernandes Street , Tejpal Road, Vile Parle East - 400057"
    },
    {
        "location": [
            19.14522777777778,
            72.84733888888888
        ],
        "address": "405- B, AQUA Cooperative Society,  BUILDING NO.18 , AMRUT NAGAR, JOGESHWARI WEST - 400102"
    },
    {
        "location": [
            19.07038888888889,
            72.87995555555555
        ],
        "address": "R NO 72 , REGAL HOUSE BLDG , PIPE LINE, MARKAZ MASJID, BUDDHA COLONY - 400070"
    },
    {
        "location": [
            19.07611944444444,
            72.8788861111111
        ],
        "address": "R NO 3 ,PRANAM HOUSING SOCEITY BLDG ,ANNASAGAR MARG,192 KURLA CST ROAD ,BEHIND NOOR HOSPITAL ,MATCH FACTORY-400070"
    },
    {
        "location": [
            19.07444722222222,
            72.88048055555555
        ],
        "address": "35 IMTIAZ BUILDING, SHAMI COMPOUND , BRAHMANWADI KALLU MUTTON SHOP , KURLA WEST - 400070"
    },
    {
        "location": [
            19.18583055555556,
            72.84183888888889
        ],
        "address": "402, Dhavalgiri Building, Near Sonali Plaza, Liberty Garden , Malad west  - 400095"
    },
    {
        "location": [
            19.18166944444445,
            72.84060833333334
        ],
        "address": "A/601, SOLITAIRE STAR , NEAR DATTA MANDIR , SOMWARI BAZAR, MALAD WEST  -400064"
    },
    {
        "location": [
            19.18349722222222,
            72.860225
        ],
        "address": "OMKAR SRA BUILDING , SANTOSH NAGAR  , DINDOSHI, MALAD EAST- 400097"
    },
    {
        "location": [
            19.06301388888889,
            72.88560277777779
        ],
        "address": "R NO 302 3RD FLOOR Shree Harishwar Marg, Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.07038055555556,
            72.88439722222223
        ],
        "address": "101 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.07538888888889,
            72.88315833333333
        ],
        "address": "R3 building 8, Masrani Lane, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [
            19.07345277777778,
            72.88125833333332
        ],
        "address": "R NO 14 Pipe Line Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [
            19.07794722222222,
            72.8817
        ],
        "address": "43 Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [
            19.06064444444445,
            72.88725833333334
        ],
        "address": "42/C L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.06842222222222,
            72.87994444444443
        ],
        "address": "157 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.05531388888889,
            72.87068888888888
        ],
        "address": "Room no. 1708 Reliance Industries Ltd, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 022, India"
    },
    {
        "location": [
            19.07719166666667,
            72.88201388888888
        ],
        "address": "ROOM NO 3 Pipe Line Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [
            19.16321944444444,
            72.83446944444444
        ],
        "address": "Room no 615 R8, Millat society, Ram Mandir, Goregaon west - 400104"
    },
    {
        "location": [
            19.15335,
            72.88556944444446
        ],
        "address": "19, Royal Palm, Goregaon east - 400065"
    },
    {
        "location": [
            19.20050555555556,
            72.84860277777777
        ],
        "address": "1 , Shubhashish Building nearby 2 buildings , Parekh lane, Near badshah Residency, s.v road, kandivali west - 400067"
    },
    {
        "location": [
            19.20198333333333,
            72.82565555555556
        ],
        "address": "Room No 104, Bldg 31 Ekta nagar, MHADA Kandivali West - 400067"
    },
    {
        "location": [
            19.16726666666667,
            72.95730555555556
        ],
        "address": "AMBEY ASHIRWAD BLG 1 ,CHAFEKAR BANDHU ROAD ,MULUND EAST - 400081"
    },
    {
        "location": [
            18.9592588,
            72.827604
        ],
        "address": "Suryadarshan Building B wing Santsena marg second Kumbharwada Girgaon 400003"
    },
    {
        "location": [
            18.9151653,
            72.82994599999999
        ],
        "address": "sundernagar indu sarakikar marg near colaba market colaba 400005"
    },
    {
        "location": [
            18.92346139142684,
            72.83336606011292
        ],
        "address": "Narang  house arthur bunder road near Gate way of India Colaba 400005"
    },
    {
        "location": [
            18.95070823981872,
            72.82112684658343
        ],
        "address": "Md Ali Rogay Bldg Thakurdwar Road Near Saifee hospital Charni road  400004"
    },
    {
        "location": [
            18.9382633771475,
            72.83736535678327
        ],
        "address": "25,sahayog 5, Mint road opp GPO fort 400001"
    },
    {
        "location": [
            18.949316,
            72.8292431
        ],
        "address": "Vivek Bldg Kalbadevi road Badamwadi 400003"
    },
    {
        "location": [
            18.9523941,
            72.8030381
        ],
        "address": "Bay View Building Bay View Ridge Road Malabar Hill Malabar Hill 400006"
    },
    {
        "location": [
            18.95123939563695,
            72.80247436955051
        ],
        "address": "Goenka House Walkeshwar Rd Malabar Hill Malabar Hill 400006"
    },
    {
        "location": [
            18.9630285,
            72.8133971
        ],
        "address": "Orbit Heights Orbit Heights J D Marg Nanachowk Grant Road 400007"
    },
    {
        "location": [
            18.9735575,
            72.80876169999999
        ],
        "address": "Blue Gardenia Building Pedder Road Opposite Jaslok Hospital Cumbala Hill 400026"
    },
    {
        "location": [
            18.94819640601052,
            72.79640671747708
        ],
        "address": "Girnar Apartment Girnar Apartment Dungarsi Road Teen Batti Malabar Hill 400006"
    },
    {
        "location": [
            18.9674257,
            72.8235318
        ],
        "address": "Orchid Enclave Orchid Enclave Bellasis Road Dalal Estate Mumbai central 400008"
    },
    {
        "location": [
            18.97766003089335,
            72.81071188863162
        ],
        "address": "Hira Panna Building Hira Panna Building B D Marg Haji Ali Malabar Hill 400006"
    },
    {
        "location": [
            18.9535107,
            72.7973967
        ],
        "address": "Hanuvant Bhuvan Hanuvant Bhuvan Napean Sea Road Navshanti Nagar Malabar Hill 400006"
    },
    {
        "location": [
            18.9681186,
            72.8292522
        ],
        "address": "B Block B Block Bmc Bldg. Chandramani Buddhvihar Marg Two Tank Kamathipura 400008"
    },
    {
        "location": [
            18.9881006,
            72.83415269999999
        ],
        "address": "Siddhivinayak Bldg & Shivshakti Bldg Vishnu Ganesh Pingle Marg Near aachrekar garden Chinchpokli 400011"
    },
    {
        "location": [
            18.97686248992763,
            72.82774369678222
        ],
        "address": "A wing / Chawl No. 4 Building Khusnuma Apartment / BIT Chawl M A Road / M. S. Ansari Marg Kalapani Agripada 400011"
    },
    {
        "location": [
            18.9834974,
            72.8395609
        ],
        "address": "Patra Chawl  Chawl Patra Chawl B. J. Marg Byculla 400008"
    },
    {
        "location": [
            18.9658907,
            72.8306593
        ],
        "address": "Mustafa Manzil Building Mustafa Manzil  peerfan Street, Opp BMC School Nagpada 400008"
    },
    {
        "location": [
            18.9780203,
            72.8282842
        ],
        "address": "Dagdi Chawal Building Dagdi chawal B.J. Marg Dagadi Chawl Dagadi Chawl 400011"
    },
    {
        "location": [
            18.9885662,
            72.83493
        ],
        "address": "Vitthal Sadan Building Room no.26, N.M Joshi marg Byculla Stn. Buyculla 400011"
    },
    {
        "location": [
            19.07834762300007,
            72.84564794800008
        ],
        "address": "mehboob kasai chawl,vn desai, santacruz east V. N. Desai Municipal Hospital, Road No 11, Sen Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400055, India"
    },
    {
        "location": [
            19.01330763299244,
            72.85211919088238
        ],
        "address": "Sahkar Nagar Bldg  SAHAKAR NAGAR BLD Wadala West 400031"
    },
    {
        "location": [
            19.0247994,
            72.8665497
        ],
        "address": "Dosti Orchid Flat 901, Dosti  orchid, Dosti Acres Antop Hill  Wadala 400037"
    },
    {
        "location": [
            19.0052085,
            72.8484762
        ],
        "address": "A WING A WING AND B WING  MATOSHRI TOWER JER BAI WADIA ROAD BHOIWADA PAREL  400012"
    },
    {
        "location": [
            18.99896837015305,
            72.85375120691539
        ],
        "address": "BDD 13 &14 SEWREE BDD SEWREE CROSS ROAD OPP. SEWREE RAILWAY STATION SEWREE 400015"
    },
    {
        "location": [
            19.0026705,
            72.8533941
        ],
        "address": "B/13/74 MaharashSta Housing Board Maharashtra Housing Board Dyaneshwar Nagar R A Kidwai Road Sewree Sewree 400015"
    },
    {
        "location": [
            19.0082363,
            72.8467897
        ],
        "address": "BUILDING NO.1 ROOM NO. 53, SECOND FLOOR NAIGAON POLICE BLDG HEADQUARTERS DADAR 400014"
    },
    {
        "location": [
            19.0143453,
            72.8428319
        ],
        "address": "JANABAI BUILDING ROOM NO. 34, 3RD FLOOR ABOVR SADHNA HOTEL DADAR EAST  DADAR 400014"
    },
    {
        "location": [
            19.0025407,
            72.8265301
        ],
        "address": "world one tower world one SB marg Lower Parel 400013"
    },
    {
        "location": [
            19.0185886,
            72.8188249
        ],
        "address": "ADARSH NAGAR buva bhaye marg worli  worli village 400030"
    },
    {
        "location": [
            18.98527209328602,
            72.82696351519593
        ],
        "address": "laxmipooja c wing laxmipooja c wing laxmipooja society J R boricha marg near arthur road jail 400011"
    },
    {
        "location": [
            18.9960186,
            72.8322386
        ],
        "address": "31/shivkrupa 1st floor S.balaji pawar marg,currey road mumbai13 shivkrupa building S,balaji pawar marg currey road currey road 400013"
    },
    {
        "location": [
            19.0136672,
            72.8265078
        ],
        "address": "R.no. 2 , ground floor Charak Building Charak Building off veer Savarkar Marg beside Chavanni Maidan Prabhadevi 400025"
    },
    {
        "location": [
            19.001171,
            72.817256
        ],
        "address": "BDD chawl no 101,Bansode marg near Ambedkar school  worli 400018"
    },
    {
        "location": [
            19.0808,
            72.8567973
        ],
        "address": "HM Appartment Masjid Road Vakola Masjid Vakola 400055"
    },
    {
        "location": [
            19.06060011700896,
            72.85043992149176
        ],
        "address": "Govt Colony Govt colony Road Govt Colony 400050"
    },
    {
        "location": [
            19.06058966941793,
            72.85043275987861
        ],
        "address": "Govt Colony Govt colony Road 0 Govt Colony 400050"
    },
    {
        "location": [
            18.96306666666667,
            72.81490277777777
        ],
        "address": "Add- 1803, 18th floor, Amorina Heigts CHS  ,  Bhaji galli ,Grant road (W) 400007"
    },
    {
        "location": [
            18.97201944444444,
            72.81515277777777
        ],
        "address": "Add- Room No- 26, 3rd Floor, Firoza Mansion , Lamington Road Shapur Baug , Grant Road  - 400007"
    },
    {
        "location": [
            18.96694444444444,
            72.80754722222223
        ],
        "address": "Add- Room No-31, B Wing Kenilworth, Pedder Road (Gopalrao Deshmukh Marg), Haji Ali, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [
            18.96598611111111,
            72.81353888888889
        ],
        "address": "Add- R.N. 86, 8th floor Chikalwadi, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [
            18.91736667,
            72.82833611
        ],
        "address": "Add- 202, Mistry Chamber\t\tStrand Road\tNear Strand Road\tColaba400005"
    },
    {
        "location": [
            18.91927778,
            72.82738333
        ],
        "address": "Add- 202, Bandus Court\t\t1st Pasta Lane\t\tColaba\t400005"
    },
    {
        "location": [
            18.94022222,
            72.82704722
        ],
        "address": "Add- Birla Matoshree Quarters\tBombay Hospital Premises\tVitthaldas Thakrsi Marg\tMarine Lines\t400020"
    },
    {
        "location": [
            18.95930556,
            72.83317222
        ],
        "address": "Add- KGN CHS\tImamwada Road\t400009"
    },
    {
        "location": [
            18.96211944,
            72.83595
        ],
        "address": "Add- Samson Apt\tRamchandra Bhatt Marg400009"
    },
    {
        "location": [
            18.95540833,
            72.83476944
        ],
        "address": "Add- Nobel Tower\tZakeria Masjid Street400003"
    },
    {
        "location": [
            18.95488889,
            72.83106944
        ],
        "address": "Add- Bldg no 123\tAli Umar street\tMarine lines\t400003"
    },
    {
        "location": [
            18.95761667,
            72.83215833
        ],
        "address": "Add- Hotel delight\tI R road\tBhendi bazarMarine lines\t400003"
    },
    {
        "location": [
            18.98360833333333,
            72.83419166666665
        ],
        "address": "Add- E wing room no. 20 10th floor Dr Babasaheb Ambedkar Marg, E Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [
            18.97253055555555,
            72.82932222222222
        ],
        "address": "Add- Merchant Building Sheik Hafizuddin Marg (Sankli Street), E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400008, India"
    },
    {
        "location": [
            18.96689444444444,
            72.84080555555555
        ],
        "address": "Add- Belvedere hill St Peters School, Belvedere Road, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400009, India"
    },
    {
        "location": [
            19.01413055555556,
            72.8620111111111
        ],
        "address": "Add- 9/179 BPT Hospital, LM Nadkarni Road, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400011, India"
    },
    {
        "location": [
            19.02626111111111,
            72.8721611111111
        ],
        "address": "Add- Rm no. 501, Bharatiya Kamala Nagar, F/N Ward, Zone 2, Bharathiya Kamala Nagar, Mumbai City, Maharashtra, 400037, India"
    },
    {
        "location": [
            19.00627222222222,
            72.84681944444444
        ],
        "address": "Add- Flat No 205 G.D. Ambedkar Marg, Bhoiwada, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400031, India"
    },
    {
        "location": [
            18.99669166666667,
            72.84927777777777
        ],
        "address": "Add- A Wing Dosti Flamingos, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400015, India"
    },
    {
        "location": [
            19.00576666666667,
            72.84571944444444
        ],
        "address": "Add- 19/1390, Mamta Bldg Parel Institute Of Orthopaedic Specialities, Jerbai Wadia Marg, Bhoiwada, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400012, India"
    },
    {
        "location": [
            19.00147222222222,
            72.85279999999999
        ],
        "address": "Add- 901 Ashwamedh CHS Sadbhavana Nagar, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400033, India"
    },
    {
        "location": [
            18.99535,
            72.82621666666667
        ],
        "address": "Add- 3/52 Khimji Nagji Firki, 1, Janta Industrial Estate, Senapati Bapat Marg, BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400013, India"
    },
    {
        "location": [
            18.98544444444445,
            72.82926388888889
        ],
        "address": "Add- D committee Arthur Road Jail, Sane Guruji Marg (Arthur Road), E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [
            19.10005555555556,
            72.86794722222221
        ],
        "address": "Add- Room No. 2 Sahar Gaon, CPWD Colony, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400099, India"
    },
    {
        "location": [
            19.06534166666667,
            72.90718333333334
        ],
        "address": "Add- Topaz Building Rahul Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [
            19.09374722222222,
            72.90226944444446
        ],
        "address": "Add- Sai Ganesh Bldg Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            19.07239722222222,
            72.90846111111112
        ],
        "address": "Add- R,510 , Bldg 21, Vallabh Baug lane, Ramabai Sahakar Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
    },
    {
        "location": [
            19.08457222222222,
            72.91007777777779
        ],
        "address": "Add- Room No.603 B Wing Babli Mahadev Kanekar Marg, Saibaba Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
    },
    {
        "location": [
            19.178875,
            72.86304444444444
        ],
        "address": "Add- Room No 107 Pathanwadi Road, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [
            19.22093333333333,
            72.86094166666666
        ],
        "address": "Add- 1 Dattapada Road, R/C Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400066, India"
    },
    {
        "location": [
            19.11861944444445,
            72.93453055555555
        ],
        "address": "Add- 9/295 S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400083, India"
    },
    {
        "location": [
            19.077064403000065,
            72.84410425200008
        ],
        "address": "near ruziya madarasa,golibar,khar east Prerana Nursing Home, Road No 4, Hanuman Tekdi, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400055, India"
    },
    {
        "location": [
            19.02245524219123,
            72.87035876203905
        ],
        "address": "Himmat nagar SP road near madina masjid wadala east mumbai 37 Sangam Nagar, F/N Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400037, India"
    },
    {
        "location": [
            19.06097900000003,
            72.92562700000008
        ],
        "address": "Not Mentioned Sanjay Nagar I, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400043, India"
    },
    {
        "location": [
            19.140058533000058,
            72.92969351400006
        ],
        "address": "Not Mentioned Jamil Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400042, India"
    },
    {
        "location": [
            19.15105310000007,
            72.93590310000008
        ],
        "address": "Not Mentioned Gaon Devi mandir, Milind Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400078, India"
    },
    {
        "location": [
            19.056939889000034,
            72.91423245000004
        ],
        "address": "Not Mentioned Deonar Road, Tata Nagar, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [
            19.033516000000077,
            72.89617030000005
        ],
        "address": "Not Mentioned M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
    },
    {
        "location": [
            18.98822222,
            72.84313889
        ],
        "address": "Add- BDLB Colony\tShrikant Hadkar MargKalachowky400033"
    },
    {
        "location": [
            18.99978333,
            72.83722778
        ],
        "address": "Add- BLD NO 273 Railway Colonyrailway Colony RoadNear Central Railway Locomotive Workshop\tParel400012"
    },
    {
        "location": [
            19.01858889,
            72.818825
        ],
        "address": "Add- Bldg No.6 Adarsh Nagar\tKesari Nath Buva Bhay Marg\tWorli Village\t400030"
    },
    {
        "location": [
            19.02020943,
            72.81726813
        ],
        "address": "Add- Bpt Qtr,Bldg No.4\tKesari Nath Buva Bhay Marg\tWorli Village400030"
    },
    {
        "location": [
            19.11916667,
            72.83925
        ],
        "address": "Add- SAGAR BUILDING SRA\tV.P Road Andheri West400058"
    },
    {
        "location": [
            19.13577778,
            72.82148056
        ],
        "address": "Add- SHREE DARSHAN BUILDINGS.V.P MHADA\tVERSOVA TELEPHONE EXCHANGE\tANDHERI WEST\t400053"
    },
    {
        "location": [
            19.12401389,
            72.82595556
        ],
        "address": "Add- SEEMA BUILDING\tN.DATTA MARG\tFOUR BUNGLOW\tANDHERI WEST\t400053"
    },
    {
        "location": [
            19.11036944,
            72.83023056
        ],
        "address": "Add- D.C HOUSE10TH ROAD\tJVPD , JUHU\tANDHERI WEST\t400049"
    },
    {
        "location": [
            19.13705556,
            72.81655278
        ],
        "address": "Add- HIBISCUSNEW FISHERIES ROAD7 BUNGLOWSANDHERI WEST\t400061"
    },
    {
        "location": [
            19.05734167,
            72.89060833
        ],
        "address": "Add- Ajinkyatara Chs\tSwastik Park\tCST Road\tInside Sarvoday Nagar Soc.\tNear Kurla Signal\tChembur\t400071"
    },
    {
        "location": [
            19.16593611,
            72.85233611
        ],
        "address": "Add- Sahyadri building\tAarey Road\tPeru baug\tNear Pritam Fast Food\tGoregaon East\t400087"
    },
    {
        "location": [
            18.98091389,
            72.83933889
        ],
        "address": "Add- Heramb darashan building\tDP wadi Road\tKapreshwar mandir\tByculla\t400033"
    },
    {
        "location": [
            18.96657222,
            72.82949722
        ],
        "address": "Add- Acharwala buildingUndriya street Nagpada\tNagpada\tByculla\t400008"
    },
    {
        "location": [
            18.97483889,
            72.82950556
        ],
        "address": "Add- Chavhan Mension\tTank Pakadi Road\topposite Khatao Mill\tByculla\t400011"
    },
    {
        "location": [
            18.97112778,
            72.83051111
        ],
        "address": "Add- Bage Usman HeightsSheikh hafizuddin marg\tBehind E ward\tByculla\t400011"
    },
    {
        "location": [
            18.97338889,
            72.82780833
        ],
        "address": "Add- Bage Rabbani ApartmentMegraj sethi marg\tBadliwala charitable dispensary\tByculla\t400011"
    },
    {
        "location": [
            18.96867537,
            72.82908889
        ],
        "address": "Add- Islamia Housing societyClaire road\tSaint Agnes high school\tByculla\t400011"
    },
    {
        "location": [
            19.044386648000057,
            72.88954491700008
        ],
        "address": "Not Mentioned Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
    },
    {
        "location": [
            19.061279200000058,
            72.90818430000007
        ],
        "address": "Not Mentioned P.L. Lokhande Marg, Adarsh Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [
            19.095919700000024,
            72.90551690000007
        ],
        "address": "Not Mentioned Varsha Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            19.09933250000006,
            72.90286780000008
        ],
        "address": "Not Mentioned Jagdusha Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            19.099273699000037,
            72.91670991800004
        ],
        "address": "Not Mentioned R City Phase One, Road Number 6, Amrut Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400075, India"
    },
    {
        "location": [
            19.17825285500004,
            72.86223807000005
        ],
        "address": "Not Mentioned P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [
            19.188176183000053,
            72.85088855200007
        ],
        "address": "Not Mentioned Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [
            19.189758934000054,
            72.85685693800008
        ],
        "address": "Not Mentioned Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [
            19.18437903100005,
            72.82304687300007
        ],
        "address": "Not Mentioned Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [
            19.138673022000035,
            72.85367576000004
        ],
        "address": "Not Mentioned Gufa Tekdi, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400060, India"
    },
    {
        "location": [
            19.255298550000077,
            72.87584095000005
        ],
        "address": "Not Mentioned Vaishali Nagar, R/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 401202, India"
    },
    {
        "location": [
            19.203754296000056,
            72.83185210800008
        ],
        "address": "Not Mentioned Charkop Village, R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400067, India"
    },
    {
        "location": [
            19.158754357000078,
            72.92865383400004
        ],
        "address": "Not Mentioned Duck Line Road, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400 078, India"
    },
    {
        "location": [
            19.124386924000078,
            72.91879652000006
        ],
        "address": "Not Mentioned Ramabai Ambedkar Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 40076, India"
    },
    {
        "location": [
            19.166010079000046,
            72.93510986200005
        ],
        "address": "Not Mentioned Phase-II, Goregaon Mulund Link Road, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400082, India"
    },
    {
        "location": [
            19.166543250000075,
            72.95051435000005
        ],
        "address": "Not Mentioned Suyog Hospital and Iccu, Pandit Jawaharlal Nehru Road, Vaithara Nagar, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400080, India"
    },
    {
        "location": [
            18.97191388888889,
            72.8321111111111
        ],
        "address": "Add- 4th floor room no. 12 byculla Khatau Makanji Spinning and Weaving Mills, Haines Road, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400008, India"
    },
    {
        "location": [
            19.08880801981999,
            72.89366247293003
        ],
        "address": "yan Nagar,Gaibanshah Dargah, Ghatkopar (w) Narayan Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
    },
    {
        "location": [
            18.98755555555556,
            72.8336861111111
        ],
        "address": "Add- Arham tower Building E Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [
            19.07056570056708,
            72.88114190134193
        ],
        "address": "NOOR E JAHAN PIPE ROAD NEAR KURLA NURSING HOME KURLA WEST MUMBAI- 400070 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.07056666666667,
            72.88114166666666
        ],
        "address": "C/205 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.07529444444445,
            72.87358611111111
        ],
        "address": "BLDG NO 12 Santa Cruz – Chembur Link Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [
            19.06934722222222,
            72.88129444444444
        ],
        "address": "602 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [
            19.08418333333333,
            72.87963055555555
        ],
        "address": "12/412 Jarimari, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [
            19.08295833333333,
            72.88159999999999
        ],
        "address": "A/102 Bhakti Vilas Apartment, 214/1-8, Magan Nathuram Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [
            19.08861388888889,
            72.89437222222223
        ],
        "address": "Narayan Nagar Narayan Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
    },
    {
        "location": [
            19.06685555555556,
            72.8983388888889
        ],
        "address": "Building No. 24 Tilak Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
    },
    {
        "location": [
            18.92192164805819,
            72.8252629324568
        ],
        "address": "shivshaktinagar free pr÷ss journal road nariman point colaba Mumbai Coastal Road - Phase I, A Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400 021, India"
    },
    {
        "location": [
            18.96426388888889,
            72.82742777777777
        ],
        "address": "Add- Room No- 9, 23/16 Shankarrao Pupala Marg, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [
            18.99362222222223,
            72.83183333333334
        ],
        "address": "Add- BDD 12, Panchaganga Apartments, N M Joshi Marg (Delisle Road), BDD Chawl, E Ward, Zone 2, Mumbai, Kulāba, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [
            19.06078611111111,
            72.84973333333333
        ],
        "address": "Add- Room No 302 Hazarimal Chetnas College, Ambedkar chowk, Gandhi Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, India"
    },
    {
        "location": [
            19.09516388888889,
            72.88785833333334
        ],
        "address": "Add- A/102, Dosti Enclave, KPM High School, 90 Feet Road, Sunder Baug, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
    },
    {
        "location": [
            19.08761388888889,
            72.90238055555557
        ],
        "address": "Add- Sindhi Chawl LBS Marg, Sunder Baug, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [
            18.96927777777778,
            72.82545555555555
        ],
        "address": "Add- Room no2,1st floor E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [
            18.97293611111111,
            72.80722777777777
        ],
        "address": "Add- Room No-8 Shyam Nivas, Haji Ali, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [
            18.97369587861006,
            72.81482896396415
        ],
        "address": "Add- Room No-61 Anudhiti Care, Pandit Madan Mohan Malviya Marg, Cowasji Jehangir Colony, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400034, India"
    },
    {
        "location": [
            19.17595,
            72.87313611111111
        ],
        "address": "Add- B 203 Tree House Play School, General A K Vaidya Marg, Yashodham, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400063, India"
    },
    {
        "location": [
            18.96103055555556,
            72.82606388888888
        ],
        "address": "Add- Room no 47, 3rd floor Trimbak Parshuram Street, C Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [
            18.96103055555556,
            72.82606388888888
        ],
        "address": " Trimbak Parshuram Street, C Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [
            18.96598611111111,
            72.81353888888889
        ],
        "address": " Chikalwadi, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [
            18.96694444444444,
            72.80754722222223
        ],
        "address": " Kenilworth, Pedder Road (Gopalrao Deshmukh Marg), Haji Ali, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [
            18.96927777777778,
            72.82545555555555
        ],
        "address": " E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [
            18.97293611111111,
            72.80722777777777
        ],
        "address": " Shyam Nivas, Haji Ali, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [
            18.97369587861006,
            72.81482896396415
        ],
        "address": " Anudhiti Care, Pandit Madan Mohan Malviya Marg, Cowasji Jehangir Colony, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400034, India"
    }
];
  
 /* fetch('data.json')
    .then(response => response.json())
    .then((resp) => {
      resp.forEach(element => {
        //console.log(element.location,element.address);
        carea.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(element.location[1]), parseFloat(element.location[0])]
          },
          properties: {
            description: element.address
          }
        });

      });
    });   */
  //End Json
  hotspots=[]
  carea.forEach(element => {
    //console.log(element.location,element.address);
    hotspots.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [parseFloat(element.location[1]), parseFloat(element.location[0])]
      },
      properties: {
        description: element.address
      }
    });
  });
  console.log(hotspots["length"]);
  document.getElementById("hotspotnumber").innerHTML=hotspots["length"];
  // code from the next step will go here!
  var geojson = {
    type: 'FeatureCollection',
    features: hotspots
  };
  geojson.features.forEach(function (marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<p>' + marker.properties.description + '</p>'))
      .addTo(map);
  });
    // Remove the show class from DIV
  x.className = x.className.replace("show", ""); 
  console.log("loading stop");
}



function alrtfisrtime(){
var visited = localStorage.getItem('visited');
if (!visited) {
  alert( '👉 Click on Gps button 🛰️ to see Infected area near your location');
  localStorage.setItem('visited', true);
}
}
// to close list
var closebtns = document.getElementsByClassName("close");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
});
}