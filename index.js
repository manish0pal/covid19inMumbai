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
      zoom: 14 //set zoom 
    });
  });

  //Read Json file
  carea = [
    {
        "location": [18.963825,72.831354],
        "address": "Doodhwala Chawl Doodhwala Chawl P B Marg Grant road Grant road 400008"
    },
    {
        "location": [18.972823,72.814066],
        "address": "Ratan Tata colony Tardeo Rs AC Market Tardeo 400034"
    },
    {
        "location": [18.966039000000002,72.82373],
        "address": "South Face Chawl rs nimkar marg faras rd kamatipura 400008"
    },
    {
        "location": [18.961169,72.82153199999999],
        "address": "Amatullah Building PB Marg Arab Lane Grant Road 400008"
    },
    {
        "location": [18.966629,72.823498],
        "address": "Mangli Kanduri Chawl R S Nimkar Marg Arab Lane Grant Road 400008"
    },
    {
        "location": [18.997578,72.847117],
        "address": "PATHAN MASJID CHAWL SEWREE CROSS ROAD PATHAN MASJID SEWREE 400015"
    },
    {
        "location": [18.991817,72.84760899999999],
        "address": "IRANI CHAWL GATE NO 6 SEWREE CROSS ROAD OPP DR.KHATRI CLINIC SEWREE 400015"
    },
    {
        "location": [18.975002,72.831653],
        "address": "666 tenament B J Marg Jocob Circle Byculla 400008"
    },
    {
        "location": [18.986826,72.83139200000001],
        "address": "Hawabai Chawl N. M. Joshi Marg Arthur Road Naka Chinchpokli 400011"
    },
    {
        "location": [19.016766,72.818999],
        "address": "Dhramraj Bhandu Cottage buva bhaye marg worli village Worli village 400030"
    },
    {
        "location": [19.000270999999998,72.818182],
        "address": "16 BDD GM Bhosle Marg Worli 400018"
    },
    {
        "location": [19.016766,72.818999],
        "address": "kranti lane buva bhaye marg worli village Worli village 400030"
    },
    {
        "location": [18.991554,72.831482],
        "address": "18 BDD, NM Joshi Marg N m joshi marg lower parel 400013"
    },
    {
        "location": [19.017404,72.81917299999999],
        "address": "buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.04685,72.85712099999999],
        "address": "Shakti Chawl Mukund Nagar Dharavi 400017"
    },
    {
        "location": [19.043988,72.849112],
        "address": "madina Nagar 60ft road Dharavi 400017"
    },
    {
        "location": [19.077845999999997,72.862329],
        "address": "Jamlipada Kalina Kural Road Kalina Village Jamlipada 400055"
    },
    {
        "location": [19.081267999999998,72.856359],
        "address": "Barma Bakrey, Vakola Pipe Line, Vakola Village 400055"
    },
    {
        "location": [19.077845999999997,72.862329],
        "address": "Jadhav Chawl Kalina Road Behind Durga Hosp Kalina 400055"
    },
    {
        "location": [19.071583,72.84575699999999],
        "address": "Pragati Chawl Jawahar Nagar Khar east 400055"
    },
    {
        "location": [19.076019,72.842566],
        "address": "Hanuman Tekdi 2/4 Golibar 400055"
    },
    {
        "location": [19.078778,72.845],
        "address": "Mehboob Kasai chawl VN desai 400055"
    },
    {
        "location": [19.134289000000003,72.85935],
        "address": "Koliwada Jog E 400060"
    },
    {
        "location": [19.130011,72.85498199999999],
        "address": "663 Premnagar Madarsa Masjid, Fish Maket Jogeshwari East 400060"
    },
    {
        "location": [19.13462,72.86591800000001],
        "address": "AL FAQIR MOHHMAD CHWAL FRANCIS WAD JOGESHWARI EAST 400060"
    },
    {
        "location": [19.108233,72.859027],
        "address": "Kurban chawl infront of ratna mahal hotel parsiwada ,chakala, andheri east 400059"
    },
    {
        "location": [19.132492000000003,72.86098100000001],
        "address": "Radhabai chawl Jhula Maidan Meghwadi Jogeshwari East 400060"
    },
    {
        "location": [19.126932999999998,72.85082299999999],
        "address": "Damodar Chawle Mogra Pada Andheri East 400069"
    },
    {
        "location": [19.144333,72.841195],
        "address": "MATESHWARI CHAWL BEHARAM BAUG RD ANAND NAGAR JOGESHWARI WEST 400102"
    },
    {
        "location": [19.114102,72.83770600000001],
        "address": "JAYWANTI CHAWL SAROTA PADA ANDHERI WEST 400058"
    },
    {
        "location": [19.141667,72.846065],
        "address": "Somnath Dube Chawl Sahkar Road JOGESHWARI WEST 400102"
    },
    {
        "location": [19.104081,72.88534399999999],
        "address": "IBP PETROL PUMP,MUSSTAK COMPOUND KURLA ANDHERI ROAD IBP PETROL PUMP JARIMARI,KURLA 400072"
    },
    {
        "location": [19.066802,72.875712],
        "address": "DULAR PACHU CHAWL NEW MILL ROAD, HALAV PUL MATCH FACTORY 400070"
    },
    {
        "location": [19.092598000000002,72.892165],
        "address": "GULSHAN MANZIL PARIERA WADI MOHILI VILLAGE,SAKINAKA 400072"
    },
    {
        "location": [19.056926999999998,72.869936],
        "address": "GULZAR GULLI JARI MARI HARI MASJID KURLA WEST 400070"
    },
    {
        "location": [19.108839,72.8899],
        "address": "SAI DHAM CHS GHATKOPAR ANDHERI ROAD SAKINAKA METRO KURLA WEST 400072"
    },
    {
        "location": [19.068582,72.879948],
        "address": "FITWALA COMPOUND PIPE ROAD MADARSA KURLA WEST 400070"
    },
    {
        "location": [19.053325,72.924494],
        "address": "DEONAR G BLOCK DEONAR COLONY ROAD DEONAR FIRE BRIGADE STATION GOVANDI 400043"
    },
    {
        "location": [19.033801999999998,72.953673],
        "address": "B SECTOR CHEETACAMP ROAD CHEETACAMP 400088"
    },
    {
        "location": [19.062045,72.92619],
        "address": "BAIGANWADI PADMA NAGAR ROAD NO 10 HAKKANI MASJID GOVANDI 400043"
    },
    {
        "location": [19.055687,72.897674],
        "address": "Jaibhole nagar dinquarry road panajarapol panajarapol 400071"
    },
    {
        "location": [19.061644,72.897594],
        "address": "Seth Heights TYPE 3 A MAHUL ROAD AZIZ BAUG CHEMBUR 400071"
    },
    {
        "location": [19.057139000000003,72.90361999999999],
        "address": "Vishnu Nagar Vashi Naka Shiv sena Office CHEMBUR 400071"
    },
    {
        "location": [19.062493,72.918361],
        "address": "Plot no 25 AHILYABAI HOLKAR MARG Jaffari school SHIVAJI NAGAR 400043"
    },
    {
        "location": [19.061854,72.906272],
        "address": "Mahatma Phule Chawl Mahatma Phule Chawl P.L. Lokhande Marg Mahatma Phule Chawl Chembur 400089"
    },
    {
        "location": [19.057835,72.89569300000001],
        "address": "Sukhshanti Chawl Sukhshanti Chawl P.L. Lokhande Marg Sukhshanti Chawl Chembur 400071"
    },
    {
        "location": [19.041144,72.89405500000001],
        "address": "Laxmi Nagar Mahul Road Near railway track Chembur 400074"
    },
    {
        "location": [19.086226999999997,72.91664399999999],
        "address": "Chawl Shastri nagar 90 Feet Road Near Pimpleshwar Mandir above nandlal garage Pant nagar 400075"
    },
    {
        "location": [19.093694,72.902047],
        "address": "Chawl No. 62 New Daya Sagar Near Datta Mandir Bhatwadi 400084"
    },
    {
        "location": [19.093694,72.902047],
        "address": "Basling Chawl R B Kadam Marg Mata Mahakali Mandir Bhatwadi 400084"
    },
    {
        "location": [19.188067,72.861994],
        "address": "Arjun Das Chawl Hanuman nagar , Kurar Kurar, mald east 400097"
    },
    {
        "location": [19.182076000000002,72.83555],
        "address": "Labour camp Behind Goregaon Sports Club Malad West 400064"
    },
    {
        "location": [19.184616000000002,72.852263],
        "address": "MAQBIOL MANJIL Holy Prophet school Malad east 400097"
    },
    {
        "location": [19.187860999999998,72.823904],
        "address": "NCC new collector compound Plot no 38 Malad West Malvani 400095"
    },
    {
        "location": [19.188492999999998,72.84955],
        "address": "Masjid compound Suchak hospital Malad east 400097"
    },
    {
        "location": [19.140848000000002,72.79137800000001],
        "address": "Adarsh society, Shivaji Nagar, Gate no 3, Madh Market, Malad West 400061"
    },
    {
        "location": [19.244949,72.860702],
        "address": "Valmiki Chawl and nearby chawl DN dubey Rd Ambawadi Dahisar East 400066"
    },
    {
        "location": [19.255845,72.87475500000001],
        "address": "padwal Chawl,ketkipada Ketkipada Dahisar East 400068"
    },
    {
        "location": [19.256913,72.864474],
        "address": "Puskar chawl Anandnagar Dahisar East 400068"
    },
    {
        "location": [19.12733,72.948313],
        "address": "Vishwashanti CHS Near Omega School, Khadan, Khindipada 400042"
    },
    {
        "location": [19.129099,72.93651700000001],
        "address": "Ambika Niwas Neharu Nagar Kanjurmarg East 400042"
    },
    {
        "location": [19.127284,72.916478],
        "address": "Panchshil Society Opp IIT Main Gate Chaitanya Nagar, Powai Mumbai 400076"
    },
    {
        "location": [19.115185,72.93312900000001],
        "address": "Tagor Nagar Group No8 Tagor Nagar Vikroli East 400083"
    },
    {
        "location": [19.144596,72.949244],
        "address": "Nanda Sawant chawl no 14 Sai Nagar Bhandup East 400042"
    },
    {
        "location": [19.164310999999998,72.9286],
        "address": "Anand Thakur Chawl Near Shivsena Shakha Khindipada 400078"
    },
    {
        "location": [19.15129,72.93316899999999],
        "address": "Sitaram Jadhav Chawl Behind Mangat Petrol Pump Kaju Hill, Ganesh Nager, Bhandup[W] 400078"
    },
    {
        "location": [19.166909,72.930237],
        "address": "Nirmala Kumar Chawl Khindipada Darga Road, Nirmala Kumar Chawl Mulund [W] 400078"
    },
    {
        "location": [19.164585,72.950484],
        "address": "INDIRA NAGAR -3 SHAKTI CHAWL J.N.ROAD SHIVSENA SHAKHA MULUND WEST 400080"
    },
    {
        "location": [19.149563,72.935244],
        "address": "Chawl no.1 Narayan CHS Sai Hill Bhandup [W] 400078"
    },
    {
        "location": [18.936123000000002,72.834404],
        "address": "Perigreen house 26 kumtha street opp maharaja restaurant bellard pier fort 400001"
    },
    {
        "location": [18.934529,72.83640600000001],
        "address": "Blossoms modi strret opp fish market fort 400001"
    },
    {
        "location": [18.921572,72.83228100000001],
        "address": "Abbas bldg b k boman behram marg back side of taj hotel colaba 400005"
    },
    {
        "location": [18.92379,72.83175200000001],
        "address": "Munira bldg Shahid bhagatsing road near delhi darbar colaba 400005"
    },
    {
        "location": [18.954582000000002,72.83075600000001],
        "address": "Kashmiri Manzil J.B.Shah marg 400003"
    },
    {
        "location": [18.952335,72.834396],
        "address": "Lucky Mansion Mohd Ali Rd 400003"
    },
    {
        "location": [18.956682,72.843356],
        "address": "Amir Ali Bldg Shahida Marg 400009"
    },
    {
        "location": [18.954039,72.833386],
        "address": "Noor Hospital Noor Hospital Bldg Mohd Ali Rd 400003"
    },
    {
        "location": [18.953163,72.818262],
        "address": "Md Ali Rogay Bldg Thakurdwar Road Near Saifee hospital Charni road 400004"
    },
    {
        "location": [18.957814000000003,72.83180300000001],
        "address": "Makka Manzil Nizam street Bhendi bazar Bhendi bazar 400003"
    },
    {
        "location": [18.960692,72.827626],
        "address": "Suryadarshan building Santsena marg second Kumbharwada Girgaon 400003"
    },
    {
        "location": [18.952417,72.80295699999999],
        "address": "Bay View Ridge Road Malabar Hill Malabar Hill 400006"
    },
    {
        "location": [18.954007,72.806843],
        "address": "Goenka House Walkeshwar Rd Malabar Hill Malabar Hill 400006"
    },
    {
        "location": [18.962508,72.816162],
        "address": "Orbit Heights J D Marg Nanachowk Grant Road 400007"
    },
    {
        "location": [18.971707000000002,72.810023],
        "address": "Blue Gardenia Building Pedder Road Opposite Jaslok Hospital Cumbala Hill 400026"
    },
    {
        "location": [18.947669,72.79366999999999],
        "address": "Girnar Apartment Dungarsi Road Teen Batti Malabar Hill 400006"
    },
    {
        "location": [18.967876,72.824043],
        "address": "Orchid Enclave, Bellasis Road Dalal Estate Mumbai central 400008"
    },
    {
        "location": [18.960703,72.800211],
        "address": "Hira Panna Building B D Marg Haji Ali Malabar Hill 400006"
    },
    {
        "location": [18.958189,72.815137],
        "address": "Aden Hostel, Fateh Manzil Dr, D B Marg Opera House Girgaon 400004"
    },
    {
        "location": [18.958522,72.799841],
        "address": "Shimla House Priyadarshani park L J Marg Navshanti Nagar Malabar Hill 400006"
    },
    {
        "location": [18.956336,72.798982],
        "address": "Hanuvant Bhuvan Napean Sea Road Navshanti Nagar Malabar Hill 400006"
    },
    {
        "location": [18.961048,72.809934],
        "address": "Gopalani Najma Buildinh Krishna Sanghi Path Opp A K Maidan Gamdevi 400007"
    },
    {
        "location": [18.955037,72.815995],
        "address": "Hermes House Mama Parmanand Marg Opera House Charney road 400004"
    },
    {
        "location": [18.961599,72.80982],
        "address": "Angel building Krishna Sanghi Path August Krankti maidan Gaondevi 400007"
    },
    {
        "location": [18.966858,72.80324399999999],
        "address": "Shreevardhan Building Oomar Park B D Marg Tata garden Grant Road 400026"
    },
    {
        "location": [18.947372,72.79665899999999],
        "address": "Alankar Building J Mehta marg Teen Batti Walkeshwar 400006"
    },
    {
        "location": [18.955714,72.809786],
        "address": "Suresh Bhavan Chowpati Road Opp Nana nani park Malabar Hill 400007"
    },
    {
        "location": [18.963384,72.828088],
        "address": "Murga Giran Building P B Marg Kamathipura Kamathipura 400008"
    },
    {
        "location": [18.967251,72.81298699999999],
        "address": "Cresent heights Forjett street Nanachowk Tardeo 400007"
    },
    {
        "location": [18.9603,72.8133],
        "address": "J K Finance Tower Gamdevi Road Gamdevi Gamdevi 400007"
    },
    {
        "location": [18.963762,72.820776],
        "address": "Siddhesh Deep Building Balram Street Road P B Marg Grant road 400006"
    },
    {
        "location": [18.953459,72.806129],
        "address": "Doshi palace walkeshwar rd malabar hill walkeshwar 400006"
    },
    {
        "location": [18.961494000000002,72.821502],
        "address": "Mangli Kanduri Chawl Grant road Near Balwas Mithaiwala Khetwadi 400007"
    },
    {
        "location": [19.00527,72.844723],
        "address": "MATOSHRI TOWER JER BAI WADIA ROAD BHOIWADA PAREL 400012"
    },
    {
        "location": [18.990695000000002,72.8476],
        "address": "SEWREE BDD, SEWREE CROSS ROAD OPP. SEWREE RAILWAY STATION SEWREE 400015"
    },
    {
        "location": [18.993665,72.836718],
        "address": "NARAYAN ASHRAM GANESH GALLI ROAD LALBAUG PAREL 400012"
    },
    {
        "location": [18.994452,72.83896999999999],
        "address": "SHRI GANESH NAGAR CO HOUSING SOCIETY CHIWDA GALLI ROAD LALBAUG PAREL 400012"
    },
    {
        "location": [19.005094,72.84298299999999],
        "address": "tata foothpath near tata hosp PAREL 400012"
    },
    {
        "location": [19.005472,72.839025],
        "address": "BEST Quaters V Shantaram Road Gurudam Kripa Housing Society PAREL 400012"
    },
    {
        "location": [19.004361,72.838378],
        "address": "BIT CHAWL VITTHAL CHAVAN MARG NEXT TO DAMODAR HALL PAREL 400012"
    },
    {
        "location": [18.963441,72.827779],
        "address": "Bmc Bldg. Chandramani Buddhvihar Marg Two Tank Kamathipura 400008"
    },
    {
        "location": [18.988155,72.835364],
        "address": "Siddhivinayak Bldg & Shivshakti Bldg Building Vishnu Ganesh Pingle Marg Near aachrekar garden Chinchpokli 400011"
    },
    {
        "location": [18.975685000000002,72.826527],
        "address": "Khusnuma Apartment / BIT Chawl M A Road / M. S. Ansari Marg Kalapani Agripada 400011"
    },
    {
        "location": [18.97436,72.825058],
        "address": "Suhag Palace Reynold Road Opp YMCA Ground Agripada 400011"
    },
    {
        "location": [18.976607,72.824173],
        "address": "Prabhat Building R B Chandorkar Marg Agripada Police Staion Agripada 400011"
    },
    {
        "location": [18.974409,72.826576],
        "address": "Shirinbhai Chawl Morland Road Agripada Police Staion Mumbai Central 400008"
    },
    {
        "location": [18.96733,72.83910999999999],
        "address": "Husaini mansion, Shirin Manzil Hawabai Chawl St Merry Road Tadwadi Mazgaon 400010"
    },
    {
        "location": [18.973335000000002,72.82816899999999],
        "address": "Shakkarwala Bldg Baban Gully, Sankhali Street Madanpura Agripada 400008"
    },
    {
        "location": [18.976923,72.83014],
        "address": "BMC Bldg No 5 B. J, Marg Kanjarwada Byculla 400011"
    },
    {
        "location": [19.012974,72.850886],
        "address": "SAHAKAR NAGAR BLD Wadala West 400031"
    },
    {
        "location": [19.02486,72.866547],
        "address": "Dosti orchid, Dosti Acres Antop Hill Wadala 400037"
    },
    {
        "location": [19.037487,72.859272],
        "address": "Jain Society Rood No.18 Manhar Niwas Sion West 400022"
    },
    {
        "location": [19.046639000000003,72.865695],
        "address": "Shivaji Nagar CHS Bhau Daji Rd Sion West 400022"
    },
    {
        "location": [19.023574,72.867521],
        "address": "Dosti Blossom, Antop Hill, Wadala E 400037"
    },
    {
        "location": [19.028980999999998,72.851895],
        "address": "SHAMLA BUILDING, LOTLIKAR LANE Matunga 400019"
    },
    {
        "location": [19.042958,72.872201],
        "address": "Building No.9, Punjabi Camp, Near Hari mandir Sion Koliwada 400022"
    },
    {
        "location": [19.011718,72.856516],
        "address": "MBPT New Colony Wadala [E] 400037"
    },
    {
        "location": [19.021384,72.848341],
        "address": "Hindu Colony IES Raje Shivaji Vidyalay Canteen Dadar 400014"
    },
    {
        "location": [19.002360999999997,72.82639499999999],
        "address": "world one SB marg Lower Parel 400013"
    },
    {
        "location": [18.994239,72.82046600000001],
        "address": "Lokhandwala residency LN pappan marg near Four seasons hotel worli 400013"
    },
    {
        "location": [18.992376999999998,72.820291],
        "address": "Mata ramabai ambedkar nagar E Moses Road Worli 400018"
    },
    {
        "location": [19.043579,72.849192],
        "address": "Dr Baliga Nagar jasimin mill Road Dharavi Jasmin mill road Dharavi 400017"
    },
    {
        "location": [19.0438,72.849562],
        "address": "Vaibhav apartment Dharavi main road opposite Abhudaya Bank Dharavi 400017"
    },
    {
        "location": [19.037119,72.844364],
        "address": "Dinkar Apartment behind Suryavanshi Hall Dadar west 400016"
    },
    {
        "location": [19.081267999999998,72.856359],
        "address": "HM Appartment Masjid Road Vakola Masjid Vakola 400055"
    },
    {
        "location": [19.062382999999997,72.85078299999999],
        "address": "Govt Colony Govt colony Road Govt Colony 400050"
    },
    {
        "location": [19.062719,72.851687],
        "address": "Govt Colony Govt colony Road Govt Colony 400050"
    },
    {
        "location": [19.055425,72.82954000000001],
        "address": "Narmada CHS Near SBI Kalina 400050"
    },
    {
        "location": [19.07938,72.853208],
        "address": "Holy view Bld Kalina 400055"
    },
    {
        "location": [19.078972,72.85063000000001],
        "address": "Dalkhaniya House Nehru Road Santacruz East 400050"
    },
    {
        "location": [19.073875,72.846235],
        "address": "Yashodhan Bld SBI Golibar 400055"
    },
    {
        "location": [19.077345,72.843925],
        "address": "M wing AI sana Bld beharam road Beharam 400055"
    },
    {
        "location": [19.077845999999997,72.862329],
        "address": "Kanishka Bld CISF camp Kalina 400055"
    },
    {
        "location": [19.078778,72.858735],
        "address": "Near Shardha Sanget santacruz East 400055"
    },
    {
        "location": [19.067972,72.83039699999999],
        "address": "chinar 21 400050 khar 400050"
    },
    {
        "location": [19.055567,72.83283],
        "address": "Rose mary building Ice Factory Lane, Off Hill Road Trios Mall Bandra West 400050"
    },
    {
        "location": [19.15105310000007,72.93590310000008],
        "address": " Gaon Devi mandir, Milind Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400078, India"
    },
    {
        "location": [19.072023,72.836575],
        "address": "Sandeep building 10 10th road Khar West 400052"
    },
    {
        "location": [19.068715,72.835474],
        "address": "Hari Niwas S V Road Next To Podar IB board school Khar West 400052"
    },
    {
        "location": [19.068472,72.827923],
        "address": "Vastu Building B J Road Bandra West 400050"
    },
    {
        "location": [19.086667000000002,72.828611],
        "address": "Sea View Building West Avenue Road Santacruz West 400054"
    },
    {
        "location": [19.073798,72.833185],
        "address": "Shiv Chhaya Building 14th Road Opp N M Medical Khar West 400052"
    },
    {
        "location": [19.085263,72.830504],
        "address": "Indrayani Bulding Juhu Road Santacruz West 400054"
    },
    {
        "location": [19.05181,72.838503],
        "address": "Zarina CHS S V Road Opp H P Petrol Pump & Jama Masjid Bandra West 400050"
    },
    {
        "location": [19.050656,72.835022],
        "address": "Orchid Building Nargis Dutt Road Opp Dilip Kumar bunglow Bandra West 400050"
    },
    {
        "location": [19.067535999999997,72.827259],
        "address": "Blooming Heights Pali Hill Road nr Punjab Sweet Bandra West 400050"
    },
    {
        "location": [19.050988,72.838038],
        "address": "Blue Flame Building S V Road Shanti Nursing Home Building - Next To Indian Oil Bandra West 400050"
    },
    {
        "location": [19.123792,72.864421],
        "address": "Guru Arjun Dev CHS Mahakali Caves Road Bindra Complex Andheri East 400093"
    },
    {
        "location": [19.096866000000002,72.843906],
        "address": "Padmavati Azad Road Vile Parle E 400057"
    },
    {
        "location": [19.093222,72.846446],
        "address": "shivshakti shraddhanand road vileparle east 400057"
    },
    {
        "location": [19.117941000000002,72.877987],
        "address": "A wing Sevenhills hospital residential quarters Marol Maroshi Road Andheri East 400059"
    },
    {
        "location": [19.095528,72.84523399999999],
        "address": "HOSTEL NO 2 HILL VIEW APARTMENT N. P. Thakkar Road VILEPARLE EAST 400057"
    },
    {
        "location": [19.096441,72.849104],
        "address": "VISHNU VILLA NARIMAN ROAD VILEPARLE EAST 400057"
    },
    {
        "location": [19.099048,72.851511],
        "address": "Harish Society Hosstel Dixit Road Behind Sathey Collage Vile Parle E 400057"
    },
    {
        "location": [19.123528,72.854675],
        "address": "Suhana Building In Front Of Kamgar Kalyan Kendra Gundavali Andheri East 400069"
    },
    {
        "location": [19.109533,72.848897],
        "address": "Durvankur Society Shahaji Raje Road Vile Parle East 400057"
    },
    {
        "location": [19.12429,72.84010699999999],
        "address": "New heritage Near Collector Office Andheri West 400058"
    },
    {
        "location": [19.126923,72.837413],
        "address": "MINARETTE DADABHAI CROSS ROAD NEAR AZAD NAGAR METRO STATION ANDHERI WEST 400058"
    },
    {
        "location": [19.144134,72.83824200000001],
        "address": "KHATIZA HIGHTECH TOWER BEHRAM BAUG ROAD JOG FISH MARKET JOGESHWARI WEST 400102"
    },
    {
        "location": [19.124670000000002,72.846512],
        "address": "KANWAL BLDG FOUR BUNGLOWS OPP FISH MARKET ANDHERI WEST 400058"
    },
    {
        "location": [19.11926,72.84334100000001],
        "address": "OM VIRAJ BLDG PALIRAM ROAD NEAR K WEST WARD ANDHERI WEST 400058"
    },
    {
        "location": [19.132296,72.833646],
        "address": "RED ROSE, RAVIRAJ COMPLEX OFF NEW ROAD NEXT TO LAXMI INDUSTRIAL ISTATE ANDHERI WEST 400058"
    },
    {
        "location": [19.118702,72.846001],
        "address": "DHEERAJ GAURAV HEIGHTS NEAR INFINITY MALL ANDHERI WEST 400058"
    },
    {
        "location": [19.111829999999998,72.841667],
        "address": "LSM CHS, MANISH NAGAR ANDHERI WEST 400058"
    },
    {
        "location": [19.121485,72.845987],
        "address": "TITANIUM TOWER SAHAKAR NAGAR NEAR APNA BAZAR ANDHERI WEST 400058"
    },
    {
        "location": [19.113464,72.842095],
        "address": "CAMPZ SRA S V ROAD AMBOLI ANDHERI WEST 400058"
    },
    {
        "location": [19.100866,72.842347],
        "address": "NIVANT CHS BAJAJ ROAD VILE PARLE WEST 400056"
    },
    {
        "location": [19.117451000000003,72.829786],
        "address": "ROYAL CLASSIC NEW LINK ROAD ANDHERI WEST 400058"
    },
    {
        "location": [19.126504,72.839688],
        "address": "WESTERN HEIGHTS J P ROAD ANDHERI WEST 400058"
    },
    {
        "location": [19.132296,72.833646],
        "address": "MINUMEENAR BLDG OFF VEERA DESAI ROAD ANDHERI WEST 400058"
    },
    {
        "location": [19.141859,72.84737],
        "address": "AZIM NAGAR PATEL�CHAWL, SRA BLDG NEAR JOGESHWARI STATION JOGESHWARI WEST 400102"
    },
    {
        "location": [19.114481,72.83014200000001],
        "address": "SHAGUN BLDG , N.S ROAD NO.9 JUHU VILLE PARLE WEST 400056"
    },
    {
        "location": [19.126746,72.833632],
        "address": "Junaid Nagar C D Burfiwala Road, ANDHERI WEST 400058"
    },
    {
        "location": [19.111492000000002,72.833702],
        "address": "Dev Park, Chandan Cinema , Juhu Juhu 400049"
    },
    {
        "location": [19.106913,72.839404],
        "address": "Manisha Building Plot No 52 N S Road JVPD VILE PARLE WEST 400056"
    },
    {
        "location": [19.080164,72.882512],
        "address": "REGAL HOUSE BLDG PIPE LINE MARKAZ MASJID BUDDHA COLONY 400070"
    },
    {
        "location": [19.066802,72.875712],
        "address": "PRANAM HOUSING SOCIETY ANNASAGAR MARG 192 KURLA CST ROAD BEHIND NOOR HOSPITAL MATCH FACTORY 400070"
    },
    {
        "location": [19.067803,72.88153299999999],
        "address": "IMTIAZ BUILDING SHAMI COMPOUND BRAHMANWADI KALLU MUTTON SHOP KURLA WEST 400070"
    },
    {
        "location": [19.062714,72.917371],
        "address": "PREMJYOT INDIAN OIL BANK OF BARODA LOTUS COLONY 400043"
    },
    {
        "location": [19.059585000000002,72.911762],
        "address": "HIRANANDANI LALLUBHAI, LALLUBHAI POLICE STATION GOVANDI 400043"
    },
    {
        "location": [19.061284,72.92104499999999],
        "address": "BLDG NO 12 NATWAR PAREKH COMPOUND SHIVAJI NAGAR POLICE STATION SHIVAJI NAGAR 400043"
    },
    {
        "location": [19.052405,72.91038499999999],
        "address": "navparmanu building A & b wing,swati building,amog building w.t.patil marg amar cinema Chembur 400071"
    },
    {
        "location": [19.063018,72.889975],
        "address": "sanket aap.14 th road,near ambedkar Garden Chembur 400071"
    },
    {
        "location": [19.052405,72.91038499999999],
        "address": "Goldcrest Building W.T. Patil Marg amar cinema Chembur 400071"
    },
    {
        "location": [19.057093,72.90128299999999],
        "address": "Building No.73 Gangotri Building Tansa Pipe Line Road Gangotri Building Chembur 400071"
    },
    {
        "location": [19.052733,72.89766800000001],
        "address": "Inlak Hospital C.G. Road Inlak Hospital Chembur 400071"
    },
    {
        "location": [19.072416,72.89647],
        "address": "Krushna Building Neelkanth Vihar Tansa Pipeline Road Tansa Pipeline Chembur 400089"
    },
    {
        "location": [19.066973,72.897359],
        "address": "Building No.29 Wing A Tilak Nagar Colony Tilak Nagar Chembur 400089"
    },
    {
        "location": [19.053511,72.894806],
        "address": "Building No. 22, near bhau pradhan maidan, subhash nagar. chembur, mumbai-71 near bhau pradhan maidan Chembur 400071"
    },
    {
        "location": [19.083044,72.906594],
        "address": "Neelkanth Opal, Emerald, Saphire,Crystal Neelkanth R N Marg Opposite Tea Villa Pant Nagar 400075"
    },
    {
        "location": [19.076384,72.913628],
        "address": "Parasnath Sudha Park, Near Railway Police ground Garodia Nagar 400075"
    },
    {
        "location": [19.145964000000003,72.85743000000001],
        "address": "Hill view Ne western express Highway bimbisar nagar, goregaon East 400065"
    },
    {
        "location": [19.177064,72.856276],
        "address": "kailash ram krupa a kale bldg upper govind nagar 400065"
    },
    {
        "location": [19.176276,72.84430400000001],
        "address": "Deep sadan sv road sunder nagar 400104"
    },
    {
        "location": [19.167573,72.845867],
        "address": "Anmol tower sv road nr patkar college 400104"
    },
    {
        "location": [19.158289,72.84089200000001],
        "address": "Nr Ganesh Maidan motilal nagar no 2 400104"
    },
    {
        "location": [19.161468,72.83168],
        "address": "Laxmi� nagar link road opp sai chsl laxmi nagar 400104"
    },
    {
        "location": [19.159259,72.833827],
        "address": "Masjid galli bhagat singh nagar no 1 Nr tayyaba masjid bhagat singh nagar 400104"
    },
    {
        "location": [19.152760999999998,72.87869],
        "address": "Sai nagar,near hanuman tekdi hanuman tekdi goregaon east 400065"
    },
    {
        "location": [19.17226,72.83408100000001],
        "address": "Quienscent Society , Mind Space Chincholi Bunder Road Mins Space Malad West 400064"
    },
    {
        "location": [19.188948999999997,72.850064],
        "address": "Suresh Building Opp Pragati sociey Opp Suchak Hospital Malad East 400097"
    },
    {
        "location": [19.17998,72.85625999999999],
        "address": "RAHEJA TOWNSHIP MALAD EAS MALAD EAST 400097"
    },
    {
        "location": [19.200743,72.821421],
        "address": "Anuradha NH near radhakrishna hotel Jankalyan Nagar, Malad West 400095"
    },
    {
        "location": [19.18586,72.835438],
        "address": "Interface heights link road Behind D mart Malad West 400064"
    },
    {
        "location": [19.191688,72.833115],
        "address": "Farm Manor Apartment Adarsh complex Malad West 400064"
    },
    {
        "location": [19.190952,72.856904],
        "address": "Oscar apartment plot 55 Pushpa park Malad east 400097"
    },
    {
        "location": [19.196114,72.838798],
        "address": "MAXMAY building tank road orlem Malad West 400064"
    },
    {
        "location": [19.177870000000002,72.875948],
        "address": "RAHEJA park sanjivani hospital Malad east 400097"
    },
    {
        "location": [19.176656,72.86174799999999],
        "address": "Lilly building Mantri park, Dindoshi Malad East 400097"
    },
    {
        "location": [19.190254,72.84472099999999],
        "address": "Shivram Apartment , Ramchandra Lane Ramchandra Lane Malad west 400064"
    },
    {
        "location": [19.181435,72.863726],
        "address": "Bahist Apartment , Near Bahji Market, Pathanwadi Malad east 400097"
    },
    {
        "location": [19.189602,72.851047],
        "address": "Abhijit Indavan Complex Datta Mandir Road Malad East 400097"
    },
    {
        "location": [19.218726,72.871139],
        "address": "Dheeraj Upvan Siddhart Nagar Borivali East 400066"
    },
    {
        "location": [19.233294,72.838544],
        "address": "Old MHB Gorai Rd Old MHB colony Borivali West 400092"
    },
    {
        "location": [19.217443,72.851001],
        "address": "Adhinath Saibaba Nagar Borivali west 400092"
    },
    {
        "location": [19.244871,72.849568],
        "address": "Raj Flodio I C colony I c colony Dahisar west 400103"
    },
    {
        "location": [19.208986,72.846597],
        "address": "Shubhashish Bldg and nearby 2 buildings Parekh lane NEar badhsh residency s.v road, kandivali west 400067"
    },
    {
        "location": [19.196904999999997,72.877012],
        "address": "Biulding No. 04, Sapphire Heights Akurli road Near LFS Likhandwala Township 400101"
    },
    {
        "location": [19.192127,72.85472299999999],
        "address": "Sunshine Society Datta Mandir Road Kandivali East 400101"
    },
    {
        "location": [19.200871,72.86807900000001],
        "address": "Acme Oasis Akurli raod , Opp. Mahindra and Mahindra, Kandivali East 400101"
    },
    {
        "location": [19.205966,72.819415],
        "address": "Tirumala krupa, Highland complex Near Jalaram Temple Kandivali West 400067"
    },
    {
        "location": [19.210932999999997,72.866066],
        "address": "Videocon Tower Thakur Complex Kandivali East 400101"
    },
    {
        "location": [19.202825,72.857324],
        "address": "Kalpataru Garden chs Rajguru Flyover Ashok nagar Kandivali East 400101"
    },
    {
        "location": [19.212401999999997,72.851701],
        "address": "Ronak Arcade S.V. Road Opp Telephone Exchange Kandivali West 400067"
    },
    {
        "location": [19.212444,72.875282],
        "address": "EMP Bldg no. 49 Thakur Village Kandivali East 400101"
    },
    {
        "location": [19.196281,72.85552],
        "address": "Amrut kanchan Society Next to Ruby Gold Ashok nagar Kandivali East 400101"
    },
    {
        "location": [19.213365,72.840905],
        "address": "Raj Arcade, Mahavir Nagar, Above Axis Bank, Kandivali West, Mumbai 400067"
    },
    {
        "location": [19.113484,72.9097],
        "address": "B Wing Birchwood Haiko Mall Hiranandani Powai 400076"
    },
    {
        "location": [19.154486,72.943281],
        "address": "Prathmesh View Residency Prathmesh View Residency Near CEAT Tyre company Nahur west 400078"
    },
    {
        "location": [19.124173000000003,72.919009],
        "address": "Divine CHS Behind Tirandaz School Behind Tirandaz School Powai 400076"
    },
    {
        "location": [19.122668,72.941315],
        "address": "MHADA Building Chawl, Kannamwar Nagar Vikhroli [E] 400083"
    },
    {
        "location": [19.145944,72.93293299999999],
        "address": "Samrudhhi Garden, Joy Homes CHS LBS Road Near Ishwar Nagar Bhandup West 400078"
    },
    {
        "location": [19.167366,72.958224],
        "address": "AMBEY ASHIRWAD BLG 1 CHAFEKAR BANDHU ROAD MULUND EAST 400081"
    },
    {
        "location": [19.180902,72.946031],
        "address": "PARK ROYAL CHS PARK ROYAL CHS MADANMOHAN MALVIYA ROAD OFF LBS ROAD MULUND WEST 400080"
    },
    {
        "location": [19.175639999999998,72.94868199999999],
        "address": "BUILDING NO.1,& 6 MCGM QUARTERS BHANDUP COMPLEX KHINDIPADA MULUND WEST 400080"
    },
    {
        "location": [19.167054999999998,72.953455],
        "address": "MANGAL SRUSHTI MANGAL SRUSHTI NEELAM NAGAR HARIOM SWEETS MULUND EAST 400081"
    },
    {
        "location": [19.162614,72.942701],
        "address": "Vivekanad Society, J.N.ROAD SARVODAY NAGR MULUND WEST 400080"
    },
    {
        "location": [19.174939000000002,72.96194399999999],
        "address": "DHANSAMPADA CHS NEELAM NAGAR ABOVE SAHKAR BHAVAN MULUND EAST 400081"
    },
    {
        "location": [19.176022,72.961704],
        "address": "SPANDAN HOSPITAL NEELAM NAGAR OPP MATRUTVA HOSPITAL MULUND EAST 400081"
    },
    {
        "location": [19.07747605800006,72.84585164400005],
        "address": "golibar,khar,mumbai 400055"
    },
    {
        "location": [19.057122126000024,72.84257840900005],
        "address": "bala saheb galli, behram nagar, bandra east-400055"
    },
    {
        "location": [19.06255622300006,72.84389299600008],
        "address": "pathar nagar, bharat nagar,BKC bandra east mumbai 400055"
    },
    {
        "location": [19.079634501000044,72.84805043900008],
        "address": "Khalil chawl, saudi nagar, vakola santacruz east 400055"
    },
    {
        "location": [19.13369227000004,72.85877406700007],
        "address": "madrasa masjid, fish market,jogeshwari east,mumbai-4000060"
    },
    {
        "location": [19.139143697000065,72.85325870700007],
        "address": "Al faquir mohammad chawl,francis wadi, jogeshwari east 400060"
    },
    {
        "location": [19.14083695100004,72.86139945800005],
        "address": "mateshwari chawl, behram baug rd, anandr nagar,jogeshwari east 400102"
    },
    {
        "location": [19.047690380000063,72.85787174600006],
        "address": "gausiya masjid,dharavi Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, 400017, India"
    },
    {
        "location": [19.039267403000053,72.85491353500004],
        "address": "muslim nagar,dharavi Machine Shop, 90 Feet Road, Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, BOUNDARY, India"
    },
    {
        "location": [19.017987179000045,72.81980024300003],
        "address": "dharamraj bhandu cottage,bua bhaye marg G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.005198476000032,72.82053658800004],
        "address": "bdd chawl, worli SIEMENS Information Systems Ltd., H R Divekar Marg, BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.00195741300007,72.81694836500003],
        "address": "kombdi galli,poddar hosp, worli ESIS Hospital WORLI, Ganpat Jadhav Marg, BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400018, India"
    },
    {
        "location": [19.018673800000045,72.81916850800008],
        "address": "kranti lane, bua bhaye marg V B Worlikar Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.001004932000058,72.81754334100003],
        "address": "bdd chawl,worli BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 40013, India"
    },
    {
        "location": [19.01796199100005,72.81869763300006],
        "address": "arun prakash sangh G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.01787524200006,72.81815676500008],
        "address": "behind BPT quarters,worli, mumbai G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.01939522200007,72.81872934700004],
        "address": "near fish market, worli V B Worlikar Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.01952039100007,72.81786931500005],
        "address": "bholanath worlikar chawl G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.080310712000028,72.85698821900007],
        "address": "kalyani niwas, barma bakery, vakola, santacruz Vakola Village, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400098, India"
    },
    {
        "location": [19.07161731800005,72.91683116200005],
        "address": "pragati chawl, khar east Bhairav Vidyalay, Kamaraj Nagar Road, Kamaraj Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [19.07834762300007,72.84564794800008],
        "address": "mehboob kasai chawl,vn desai, santacruz east V. N. Desai Municipal Hospital, Road No 11, Sen Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400055, India"
    },
    {
        "location": [19.058336590000067,72.84446533900007],
        "address": "amrut nagar, kherwadi,bandra east Gandhi Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [19.077064403000065,72.84410425200008],
        "address": "near ruziya madarasa,golibar,khar east Prerana Nursing Home, Road No 4, Hanuman Tekdi, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400055, India"
    },
    {
        "location": [19.06253580200007,72.85837049100007],
        "address": "Basera society BKC, bandra H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400 051, India"
    },
    {
        "location": [19.121833595000055,72.84127775000007],
        "address": "usman ali adab chawl, gaondevi dongari, andheri west- 400058"
    },
    {
        "location": [19.136130152000078,72.84046189500003],
        "address": "jaywanti chawl, sarota pada, andheri west, mumbai 400058"
    },
    {
        "location": [19.118127370000025,72.82231329800004],
        "address": "ahatre, moragaon, juhu, mumbai 400049"
    },
    {
        "location": [19.144411138000066,72.80577015600005],
        "address": "ramale house , dongri, versova,andheri west, mumbai-400061"
    },
    {
        "location": [19.06622789900007,72.87619575100007],
        "address": "dillar pachu chawl, new mill road, halav pull, match factory mumbai 400070"
    },
    {
        "location": [19.09563540000005,72.89471325900007],
        "address": "saidham chs,ghatkoper andheri road,kurla west, 400072"
    },
    {
        "location": [19.068773239000052,72.87925966100005],
        "address": "fitwala compound, pipe road,madarsa, kurla west-400070"
    },
    {
        "location": [19.051796358000047,72.92460261200006],
        "address": "deonar fire brigade station, govandi-400043"
    },
    {
        "location": [19.038646121000056,72.94986531200004],
        "address": "cheeta camp road, cheeta camp-400088"
    },
    {
        "location": [19.063615379000055,72.92666335800004],
        "address": "padma nagar, road no 10, hakkani masjid,govandi-400043"
    },
    {
        "location": [19.04327898100007,72.90931475200006],
        "address": "din quarry road, panjrapole, mumbai 400071"
    },
    {
        "location": [19.035593864000077,72.89408415300005],
        "address": "type 3 A, aziz baug,mahul road, chembur-400071"
    },
    {
        "location": [19.034097449000058,72.89680688200008],
        "address": "vashi naka, shiv sena office, chembur,400071"
    },
    {
        "location": [19.067503986000077,72.92123974200007],
        "address": "ahilyabai holkar marg,jaffari school, 400043"
    },
    {
        "location": [19.06481929100005,72.92377942100006],
        "address": "road no 5, shivaji nagar-400043"
    },
    {
        "location": [19.062435392000054,72.90668143500005],
        "address": "mahtma phule chawl,PL lokhande marg, chembur-400089"
    },
    {
        "location": [19.03067654800003,72.89648767400007],
        "address": "laxmi nagar,near railway track , mahul road,chembur 400074"
    },
    {
        "location": [19.095314477000045,72.89974726700007],
        "address": "KS parera chawl,near sona hospital,bhatwadi-400084"
    },
    {
        "location": [19.095790587000067,72.90520535100006],
        "address": "new daya sagar, near datta mandir-400084"
    },
    {
        "location": [19.096917292000057,72.90261551100008],
        "address": "barve nagar colony,bhatwadi-400084"
    },
    {
        "location": [19.09547255500007,72.90107516000006],
        "address": "basling chawl, RB kadam marg,bhatwadi 400084"
    },
    {
        "location": [19.097618392000072,72.90351675400007],
        "address": "G7 municipal colony, near muktabai hospital,bhatwadi 400084"
    },
    {
        "location": [19.104374972000073,72.91610807900008],
        "address": "kille shivneri society,ram nagar B,vikroli park site-400079"
    },
    {
        "location": [19.17811661500002,72.86212478200008],
        "address": "maqbool manzil,holy prophet school malas east- mumbai 400097"
    },
    {
        "location": [19.18809433200005,72.82356901900005],
        "address": "plot no 38, new collector compound, malad west malvani,mumbai 400 095"
    },
    {
        "location": [19.18841266800007,72.84977676700004],
        "address": "masjid compound, near suchak hospital,malad east,mumbai 400 097"
    },
    {
        "location": [19.14302762500006,72.79245803000003],
        "address": "aadarsh society, shivaji nagar, gate no 3, madh market, malad-400061"
    },
    {
        "location": [19.18816346500006,72.82285887600005],
        "address": "NCC plot no. 38 ,malad west malvani-400095"
    },
    {
        "location": [19.190400055000055,72.85752212500006],
        "address": "bambude chawl,pushpa park, malad east,mumbai-400097"
    },
    {
        "location": [19.187443294000047,72.86468327900008],
        "address": "sainath society, santodh nagar, goregaon east-400063"
    },
    {
        "location": [19.18497540800007,72.82080140400006],
        "address": "gate no 7, malvani,mumbai 400095"
    },
    {
        "location": [19.18560224500004,72.82084449000007],
        "address": "plot no 50,gate no 7,malvani 400 095"
    },
    {
        "location": [19.240900619000058,72.85999383000006],
        "address": "valmiki chawl,DN Dubey road, ambawadi,dahisar east-400066"
    },
    {
        "location": [19.257301175000066,72.87505035500004],
        "address": "padwal chawl,ketkipada,dahisar east, 400068"
    },
    {
        "location": [19.255452959000024,72.86739020700003],
        "address": "pasekar chawl,anand nagar, dahisar east, 400068"
    },
    {
        "location": [19.19958938600007,72.86403704100007],
        "address": "lokmanya chawl, road no.2,wadarpada,kandivli east-400101"
    },
    {
        "location": [19.19049947700006,72.85939303400005],
        "address": "rukiyabai noor mohammad chawl,bandongri kandivli east 400101"
    },
    {
        "location": [19.16279006700006,72.93112210400005],
        "address": "viswashanti chs,near omega school,khandan,khindipada-400042"
    },
    {
        "location": [19.12836161100006,72.93512059200003],
        "address": "ambika niwas,nehru nagar,kanjurmarg east-400042"
    },
    {
        "location": [19.124300408000067,72.91806422900004],
        "address": "panchshil society chaitanya nagar,opp iit main gate,powai-400 076"
    },
    {
        "location": [19.115775391000057,72.93326254600004],
        "address": "tagore nagar group no 8 vikroli east-400 083"
    },
    {
        "location": [19.13608530600004,72.93850292400003],
        "address": "nanda sawant chawl no 14 sai nagar bhandup east-400042"
    },
    {
        "location": [19.160508221000043,72.92951270200007],
        "address": "anand thakur chawl,khindipada-400078"
    },
    {
        "location": [19.16344982000004,72.93592354700007],
        "address": "Khindipada darga road,mulund west-400078"
    },
    {
        "location": [19.161125259000073,72.92957415400008],
        "address": "Anand thakur chawl,near shivshena shaka-400078"
    },
    {
        "location": [19.165588204000073,72.95062667900004],
        "address": "JN Road, Mulund west-400 080"
    },
    {
        "location": [18.96328096600007,72.82193869700006],
        "address": "dudhwala chawl, p b marg, grant roaad mumbai- 400 008"
    },
    {
        "location": [18.97121786300005,72.81615550800007],
        "address": "ratan tata colony, ac market, tardeo, mumbai 400 034"
    },
    {
        "location": [18.965689033000046,72.82384359100007],
        "address": "south face chawl, RS nimkar marg, Faras road, mumbai- 400 008"
    },
    {
        "location": [18.963369322000062,72.82348913300007],
        "address": "amtulla apartment, arab lane, grant road, mumbai 400 008"
    },
    {
        "location": [19.08654117900005,72.88280617600003],
        "address": "gulshan manzil, pereira wadi, st mary school, sakinaka,mumbai- 400 072"
    },
    {
        "location": [19.09323004500004,72.88264976100004],
        "address": "gulzar society, hari masjid, jari mari, kurla west 400 070"
    },
    {
        "location": [19.0034957,72.8205292],
        "address": "BDD Chawl, GM Bhosle Marg, Worli, 400018"
    },
    {
        "location": [19.0076064888531,72.85458910596239],
        "address": "PATHAN MASJID CHAWL,Sewri CROSS ROAD,Sewri, 400015"
    },
    {
        "location": [19.0671855,72.83650829999999],
        "address": "Gomes Chawl, Golibar Road, Khar East- 400055"
    },
    {
        "location": [19.0683073,72.84490140000001],
        "address": "Jawahar Nagar Chawl, Khar East, 400055"
    },
    {
        "location": [19.10834929026186,72.85911518632899],
        "address": "Kurban chawl,parsiwada ,chakala, Andheri East- 400059"
    },
    {
        "location": [19.10834929026186,72.85911518632899],
        "address": "Kurban chawl,parsiwada ,chakala, Andheri East- 400099"
    },
    {
        "location": [19.0726016,72.9133536],
        "address": "Radhabai chawl, Jhula Maidan, Meghwadi, Jogeshwari East- 400060"
    },
    {
        "location": [19.1262049,72.8493324],
        "address": "Damodar Chawl, Mogra Pada, Andheri East- 400069"
    },
    {
        "location": [19.1920911,72.8662232],
        "address": "Sai Baba Chawl, Dr. Rajendra Prasad Nagar, Vile Parle East- 400099"
    },
    {
        "location": [19.13643289493979,72.84659276441087],
        "address": "Somnath Dube Chawl, Sahkar Road, JOGESHWARI WEST- 400102"
    },
    {
        "location": [19.1047136457422,72.82883576350815],
        "address": "JAY MAA SHARDHA CHAWLV.M ROAD NO. 05, NEHRU NAGR, VILE PARLE WEST- 400056"
    },
    {
        "location": [19.09561189785627,72.83682439438874],
        "address": "DAULAT HOUSE, GAONDEVI TEMPLE, V P ROAD,ANDHERI WEST, 400058"
    },
    {
        "location": [19.121501,72.8413995],
        "address": "AYUBLALA CHAWL,GAONDEVI DONGARI, ANDHERI WEST- 400061"
    },
    {
        "location": [19.0747117,72.9176813],
        "address": "Ambekar Nagar, 90 Feet Road, Opposite Bakery, Pant nagar- 400075"
    },
    {
        "location": [19.0755087,72.8968572],
        "address": "Shastri nagar, 90 Feet Road, Near Pimpleshwar Mandir, Pant nagar- 400075"
    },
    {
        "location": [19.2578774,72.85204499999999],
        "address": "snehal chawl, opp Rock spring Kandarpada, Dahisar west, 400103"
    },
    {
        "location": [19.16526649391617,72.93240774657114],
        "address": "Anand Thakur Chawl, Near Shivsena Shakha, Khindipada, 400078"
    },
    {
        "location": [19.14012549246693,72.93015575547555],
        "address": "Ganesh Nager, Sitaram Jadhav Chawl, Behind Mangat Petrol Pump, Bhandup[W]- 400078"
    },
    {
        "location": [19.17134177376156,72.95345676475453],
        "address": "Narayan CHS, Sai Hill, Bhandup [W]- 400078"
    },
    {
        "location": [19.12486163375296,72.91693322250231],
        "address": "Panchshil society, Opp IIT Main Gate, Chaitanya Nagar,Powai Mumbai, 400076"
    },
    {
        "location": [19.12486105361848,72.9169122259238],
        "address": "Panchshil society, Opp IIT Main Gate, Chaitanya Nagar,Powai Mumbai, 400076"
    },
    {
        "location": [19.13606380465565,72.93824274348354],
        "address": "Sai Nagar, Nanda Sawant chawl, Bhandup East, 400042"
    },
    {
        "location": [19.1610323,72.9357215],
        "address": "Rajiv Gandhi nagar Chawl, Dargah Road, Bhandup [W]- 400078"
    },
    {
        "location": [19.13997855093426,72.93009298018791],
        "address": "Ganesh Nager, Sitaram Jadhav Chawl, Behind Mangat Petrol Pump, Bhandup[W]- 400078"
    },
    {
        "location": [19.12460920651214,72.84538538348113],
        "address": "2/1, HAJI DAWOOD CHAWL, S V ROAD, AMBOLI, ANDHERI WEST- 400061"
    },
    {
        "location": [19.13255149951325,72.85642788434376],
        "address": "Koliwada, Jogeshwari East, 400060"
    },
    {
        "location": [18.93649916800007,72.83845033500006],
        "address": "perigreen house,26 kumtha street,opp maharaja restaurant, bellard pier fort, Mumbai- 400001"
    },
    {
        "location": [19.012978565000026,72.85128565200006],
        "address": "Sahakar Nager Building, Wadala West, Mumbai- 400031"
    },
    {
        "location": [18.955739658000027,72.83465297600003],
        "address": "Kashmiri Manzil, J.B.Shah marg Mumbai-400003"
    },
    {
        "location": [18.952522886000054,72.81820949300004],
        "address": "Md Ali Rogay Bldg, Thakurdwar Road, Near Saifee hospital, Charni road, Mumbai- 400004"
    },
    {
        "location": [19.068042099000024,72.83035970000003],
        "address": "Chinar 21st Rd, khar, Mumbai- 400050"
    },
    {
        "location": [19.124774002000038,72.84073500100004],
        "address": "New heritage Near Collector Office Andheri West Mumbai- 400058"
    },
    {
        "location": [19.042526234000036,72.84860047400008],
        "address": "Dr Baliga Nagar, jasimin mill Road, Dharavi Jasmin mill road, Dharavi, Mumbai- 400017"
    },
    {
        "location": [19.02479940300003,72.86654970100005],
        "address": "Dosti orchid, Dosti Acres, Antop Hill, Wadala, Mumbai-400037"
    },
    {
        "location": [18.934525418000078,72.83641077800007],
        "address": "blossoms, modi strret, opp fish market, fort Mumbai- 400001"
    },
    {
        "location": [18.95233507100005,72.83440789100007],
        "address": "Lucky Mansion, Mohd Ali Rd, Mumbai- 400003"
    },
    {
        "location": [18.95764931900004,72.83151239900008],
        "address": "Makka Manzil, Nizam street, Bhendi bazar, Mumbai- 400003"
    },
    {
        "location": [18.989364514000044,72.85185673200004],
        "address": "SEWREE BDD, Sewree Cross Road, Opp. Railway Station, Sewree, Mumbai-400015"
    },
    {
        "location": [19.043638900000076,72.84995790100004],
        "address": "Vaibhav apartment, Dharavi main road, opposite Abhudaya Bank, Dharavi, Mumbai- 400017"
    },
    {
        "location": [18.991967905000024,72.81775716200008],
        "address": "Mata ramabai ambedkar nagar, E Moses Road, Worli, Mumbai- 400018"
    },
    {
        "location": [19.05463498000006,72.83236681500006],
        "address": "Rose mary building, Ice Factory Lane, Off Hill Road, Trios Mall Bandra West, Mumbai- 400050"
    },
    {
        "location": [19.12869021100005,72.86779607800008],
        "address": "Guru Arjun Dev CHS Mahakali Caves Road Bindra Complex Andheri East Mumbai- 400093"
    },
    {
        "location": [19.03795160800007,72.85956456500008],
        "address": "Jain Society, Road No.18, Manhar Niwas, Sion West, Mumbai- 400022"
    },
    {
        "location": [18.92156681800003,72.83228100100007],
        "address": "Abbas bldg,b k boman behram marg,back side of taj hotel, colaba,Mumbai-400005"
    },
    {
        "location": [18.95770413400004,72.83667874200006],
        "address": "AmirAli Building, Shahida Marg, Mumbai- 400009"
    },
    {
        "location": [18.95924359600002,72.82760318400005],
        "address": "Suryadarshan building, Santsena marg, second Kumbharwada, Girgaon, Mumbai-400003"
    },
    {
        "location": [18.99367330000007,72.83689300100008],
        "address": "NARAYAN ASHRAM, GANESH GALLI ROAD, LALBAUG, PAREL,Mumbai, 400012"
    },
    {
        "location": [19.023159258000078,72.83421819400007],
        "address": "Dinkar Apartment, behind Suryavanshi Hall, Dadar west, Mumbai- 400016"
    },
    {
        "location": [18.99528650900004,72.82119253200005],
        "address": "Lokhandwala residency, L.N. Pappan Marg, Near Four seasons hotel, Worli, MUmbai- 400013"
    },
    {
        "location": [19.074489202000052,72.83698530100008],
        "address": "Sandeep building, 10th road, Khar West Mumbai- 400052"
    },
    {
        "location": [19.09401310100003,72.84439210000005],
        "address": "Padmavati Azad Road Vile Parle East Mumbai- 400057"
    },
    {
        "location": [19.144801001000076,72.84076100100003],
        "address": "KHATIZA HIGHTECH TOWER BEHRAM BAUG ROAD JOG FISH MARKET JOGESHWARI WEST MUMBAI- 400102"
    },
    {
        "location": [19.03482733800007,72.85716533100003],
        "address": "Shivaji Nagar CHS, Bhau Daji Rd,Sion West, Mumbai- 400022"
    },
    {
        "location": [18.954038058000037,72.83336988300005],
        "address": "Noor Hospital Building, Mohammed Ali Road, Mumbai-400003"
    },
    {
        "location": [18.973552320000067,72.80875074500005],
        "address": "Blue Gardenia Building, Pedder Road,Opposite Jaslok Hospita,lCumbala Hill, Mumbai- 400026"
    },
    {
        "location": [18.97308107300006,72.82557268100004],
        "address": "Suhag Palace, Reynold Road, Opp YMCA Ground, Agripada 400011"
    },
    {
        "location": [18.990761269000075,72.83659405600008],
        "address": "SHRI GANESH NAGAR CO HOUSING SOCIETY, CHIWDA GALLI ROAD, LALBAUG, PAREL, MUMBAI-400012"
    },
    {
        "location": [19.07065944800007,72.83625993400005],
        "address": "Hari Niwas, S V Road Next To Podar IB board school Khar West Mumbai- 400052"
    },
    {
        "location": [19.09573516200004,72.84659696700004],
        "address": "Shivshakti shraddhanand road vileparle east Mumbai- 400057"
    },
    {
        "location": [19.126939976000074,72.82494255400007],
        "address": "KANWAL BLDG FOUR BUNGLOWS OPP FISH MARKET ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [19.023676802000068,72.86751984900008],
        "address": "Dosti Blossom, Antop Hill, Wadala East, Mumbai-400037"
    },
    {
        "location": [18.923804198000028,72.83177018000003],
        "address": "Munira bldg, Shahid bhagatsing road, near delhi darbar, colaba, Mumbai- 400005"
    },
    {
        "location": [18.94821235300003,72.79625953700008],
        "address": "Girnar Apartment,Dungarsi Road,Teen Batti,Malabar Hill, Mumbai-400006"
    },
    {
        "location": [19.05194474600006,72.82233891600004],
        "address": "Vastu Building B J Road Bandra West Mumbai- 400050"
    },
    {
        "location": [19.025437301000068,72.85979452700008],
        "address": "Shamala Building, Lotlikar Lane, Matunga, Mumbai- 400019"
    },
    {
        "location": [19.07554433200005,72.83448866500004],
        "address": "Ramadevi Mansion, Sea View Building West Avenue Road Santacruz West Mumbai- 400054"
    },
    {
        "location": [18.967654381000045,72.82352970000005],
        "address": "Orchid Enclave, Bellasis Road, Dalal Estate, Mumbai central, Mumbai-400008"
    },
    {
        "location": [18.976888689000077,72.82459097400005],
        "address": "Prabhat Building, R B Chandorkar Marg, Police Staion Agripada, Mumbai- 400011"
    },
    {
        "location": [19.004340941000066,72.84294171500005],
        "address": "Tata foothpath, Near tata hospital, Parel, Mumbai- 400012"
    },
    {
        "location": [19.018377197000063,72.83765134500004],
        "address": "Tavade building, Krushnaji Waman Chitale path, Dadar, Mumbai- 400028"
    },
    {
        "location": [19.119205801000078,72.84328590000007],
        "address": "OM VIRAJ BLDG PALIRAM ROAD NEAR K WEST WARD ANDHERI WEST MUMBAI-400058"
    },
    {
        "location": [19.03408418400005,72.86449421100008],
        "address": "Punjabi Camp, Near Hari Mandir, Sion Koliwada, Mumbai- 400022"
    },
    {
        "location": [19.005127671000025,72.83845266200007],
        "address": "BEST Quaters, V Shantaram Road, Gurudam Kripa Housing Society, Parel, Mumbai- 400012"
    },
    {
        "location": [18.977730678000057,72.81049730400008],
        "address": "Hira Panna Building, B D Marg,Haji Ali, Malabar Hill, Mumbai-400006"
    },
    {
        "location": [18.974644956000077,72.82651562100006],
        "address": "Shirinbhai Chawl, Morland Road, Agripada Police Staion, Mumbai Central- 400008"
    },
    {
        "location": [19.019152500000075,72.83784110100004],
        "address": "Soubhagya apartment, S.K. Bole Marg, Laxmi Narayan Mandir, Dadar West, Mumbai- 400028"
    },
    {
        "location": [19.06597478200007,72.83273244200007],
        "address": "Shiv Chhaya Building 14th Road Opp N M Medical Khar West MUmbai- 400052"
    },
    {
        "location": [19.11799970000004,72.87803740000004],
        "address": "A wing Sevenhills hospital residential quarters Marol Maroshi Road Andheri East Mumbai- 400059"
    },
    {
        "location": [19.13682454700006,72.83005507600006],
        "address": "RED ROSE, RAVIRAJ COMPLEX OFF NEW ROAD NEXT TO LAXMI INDUSTRIAL ISTATE ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [19.011613177000072,72.85651402600007],
        "address": "MBPT New Colony, Wadala [E], Mumbai- 400037"
    },
    {
        "location": [18.957489080000073,72.81542730600006],
        "address": "Fateh Manzil, Dr.D B Marg, Opera House, Girgaon, Mumbai-400004"
    },
    {
        "location": [19.00429543300004,72.83777706900008],
        "address": "BIT CHAWL, VITTHAL CHAVAN MARG, NEXT TO DAMODAR HALL, PAREL, MUMBAI- 400012"
    },
    {
        "location": [19.08453970900007,72.83558818700004],
        "address": "Indrayani Bulding Juhu Road Santacruz West Mumbai- 400054"
    },
    {
        "location": [19.09393493600004,72.84485483800006],
        "address": "HOSTEL NO 2 HILL VIEW APARTMENT N. P. Thakkar Road VILEPARLE EAST MUMBAI- 400057"
    },
    {
        "location": [19.140737068000078,72.83404672100005],
        "address": "DHEERAJ GAURAV HEIGHTS NEAR INFINITY MALL ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [19.02144220300005,72.84822927500005],
        "address": "Hindu Colony, IES Raje Shivaji Vidyalay Canteen, Dadar, Mumbai- 400014"
    },
    {
        "location": [18.95671811400007,72.79948921100004],
        "address": "Priyadarshani park, L J Marg, Navshanti Nagar, Malabar Hill, Mumbai, 400006"
    },
    {
        "location": [18.96732999900007,72.83910999900007],
        "address": "Shirin Manzil, Hawabai Chawl, St Merry Road, Tadwadi, Mazgaon, Mumbai-400010"
    },
    {
        "location": [19.05507717100005,72.83742301800004],
        "address": "Zarina CHS S V Road Opp H P Petrol Pump & Jama Masjid Bandra West Mumbai- 400050"
    },
    {
        "location": [19.096413700000028,72.84916050000004],
        "address": "VISHNU VILLA NARIMAN ROAD VILEPARLE EAST MUMBAI- 400057"
    },
    {
        "location": [19.017060779000076,72.85842755300007],
        "address": "Vaibhav Building, Near Wadala Bridge, Wadala [E], Mumbai-400037"
    },
    {
        "location": [18.973581073000048,72.82819127800008],
        "address": "Shakkarwala Bldg, Baban Gully, Sankhali Street, Madanpura, Agripada, Mumbai- 400008"
    },
    {
        "location": [19.007642374000056,72.85460306000004],
        "address": "SHARIFA MANZIL, SEWREE CROSS ROAD, BEHIND DYANESHWAR VIDYALAY, SEWAREE, MUMBAI- 400015"
    },
    {
        "location": [19.035278111000025,72.84033859600004],
        "address": "Unique Heights, Opp Canossa high school, Mahim, Mumbai- 400016"
    },
    {
        "location": [19.09952416300007,72.85036051000003],
        "address": "Harish Society Hosstel Dixit Road Behind Sathey Collage Vile Parle East Mumbai- 400057"
    },
    {
        "location": [19.128884801000027,72.83179699800007],
        "address": "TITANIUM TOWER SAHAKAR NAGAR NEAR APNA BAZAR ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [19.01307254200003,72.86144910600007],
        "address": "Sushruta Building, MBPT Hospital, Wadala [E], Mumbai- 400037"
    },
    {
        "location": [18.960869165000076,72.80976910600003],
        "address": "Gopalani Najma Building, Krishna Sanghi Path, Opp A K Maidan, Gamdevi, Mumbai-400007"
    },
    {
        "location": [18.976922999000067,72.83013999900004],
        "address": "BMC Bldg, B. J, Marg, Kanjarwada,Byculla, Mumbai- 400011"
    },
    {
        "location": [18.991323300000033,72.83635230100003],
        "address": "WEILLINGTON HOUSE, NEAR SUPARI BAUG, PAREL, MUMBAI- 400012"
    },
    {
        "location": [19.076994695000053,72.86708082800004],
        "address": "Holy View Building, Kalina, Santacruz East, Mumbai- 400055"
    },
    {
        "location": [19.06527948100006,72.83153811900007],
        "address": "Orchid Building Nargis Dutt Road Opp Dilip Kumar bunglow Bandra West Mumbai- 400050"
    },
    {
        "location": [19.12938820000005,72.84720899900003],
        "address": "CAMPZ SRA S V ROAD AMBOLI ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [19.051765316000058,72.86876975000007],
        "address": "Bhangiri Building, Manakikar marg, Near Chunabhatti Phatak, Chunabhatti West, Mumbai- 400022"
    },
    {
        "location": [18.954193709000037,72.81652550700005],
        "address": "Hermes House, Mama Parmanand Marg, Opera House, Charni road, Mumbai-400004"
    },
    {
        "location": [19.033393192000062,72.84237937700004],
        "address": "Emerald, Mahim, MUmbai- 400016"
    },
    {
        "location": [19.079967229000033,72.85186629800006],
        "address": "Dalkhaniya House, Nehru Road, Santacruz East, Mumbai- 400050"
    },
    {
        "location": [19.06184079700006,72.82633841900008],
        "address": "Blooming Heights Pali Hill Road Bandra West Mumbai- 400050"
    },
    {
        "location": [19.119878533000076,72.85333609100007],
        "address": "Suhana Building In Front Of Kamgar Kalyan Kendra Gundavali Andheri East Mumbai- 400069"
    },
    {
        "location": [19.10161069000003,72.84290126800005],
        "address": "NIVANT CHS BAJAJ ROAD VILE PARLE WEST MUMBAI-400056"
    },
    {
        "location": [19.017571434000047,72.85470573300006],
        "address": "Sainath Hotel, Near fish market, Wadala [W], Mumbai- 400031"
    },
    {
        "location": [18.96162694700007,72.80980515100003],
        "address": "Angel building, Krishna Sanghi Path, August Krankti maidan,Gamdevi. Mumbai- 400007"
    },
    {
        "location": [19.003705500000024,72.85464170000006],
        "address": "MONARCH GARDEN, R A KIDWAI ROAD, SEWREE, MUMBAI-400015"
    },
    {
        "location": [19.080917700000043,72.85052100000007],
        "address": "Yashodhan Building, SBI Golibar, Vakola, Mumbai- 400055"
    },
    {
        "location": [19.051107454000032,72.83811031200008],
        "address": "Blue Flame Building S V Road Shanti Nursing Home Building - Next To Indian Oil Bandra West Mumbai- 400050"
    },
    {
        "location": [19.139436000000046,72.83046700000006],
        "address": "ROYAL CLASSIC NEW LINK ROAD ANDHERI WEST MUMBAI-400058"
    },
    {
        "location": [18.966790910000043,72.80359900300004],
        "address": "Shreevardhan Building, Oomar Park, B D Marg, Tata garden, Grant Road, Mumbai- 400026"
    },
    {
        "location": [19.004753234000077,72.85423659300005],
        "address": "Rati Wadala, Near R A Kidwai Road,Police Station Sewree, Mumbai - 400015"
    },
    {
        "location": [19.071867101000066,72.83189480100003],
        "address": "Nav Bahar Building, 15th Road, Khar West, Mumbai- 400052"
    },
    {
        "location": [19.129358800000034,72.82793449900004],
        "address": "WESTERN HEIGHTS J P ROAD ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [18.948603259000038,72.79673496500004],
        "address": "Alankar Building, J Mehta marg, Teen Batti, Walkeshwar, Mumbai- 400006"
    },
    {
        "location": [19.00648138100007,72.83909133800006],
        "address": "Tata Mills CHS, Parel, MUmbai-400012"
    },
    {
        "location": [19.08417945800005,72.85655347800008],
        "address": "Kanishka Building, CISF camp, Kalina, Santacruz East, Mumbai- 400055"
    },
    {
        "location": [19.051344863000054,72.83802131200008],
        "address": "Blue Flame CHS S V Road Indain oil petrol pump Bandra West Mumbai- 400050"
    },
    {
        "location": [18.956402532000027,72.80970322300004],
        "address": "Suresh Bhavan, Chowpati Road, Opp Nana nani park, Malabar Hill, Mumbai-400007"
    },
    {
        "location": [19.108460732000026,72.84741959300004],
        "address": "Durvankur Society Shahaji Raje Road Vile Parle East Mumbai- 400057"
    },
    {
        "location": [18.96371375700005,72.82159692400006],
        "address": "Murga Giran Building, P B Marg, Kamathipura, Mumbai- 400008"
    },
    {
        "location": [19.131524099000046,72.83737530000008],
        "address": "MINUMEENAR BLDG OFF VEERA DESAI ROAD ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [18.958736895000072,72.81309187000005],
        "address": "J K Finance Tower, Gamdevi Road, Gamdevi, Mumbai- 400007"
    },
    {
        "location": [18.96366310600007,72.82076340100008],
        "address": "Siddhesh Deep Building, Balram Street Road, P B Marg, Grant road, Mumbai- 400006"
    },
    {
        "location": [19.105982565000033,72.83092713000008],
        "address": "SHAGUN BLDG , N.S ROAD NO.9 JUHU VILLE PARLE WEST MUMBAI- 400056"
    },
    {
        "location": [19.113678478000054,72.83754002900008],
        "address": "Junaid Nagar C D Burfiwala Road, Andheri West Mumbai-400058"
    },
    {
        "location": [19.114391613000066,72.82710780600007],
        "address": "Dev Park, Chandan Cinema , Juhu, MUmbai- 400049"
    },
    {
        "location": [19.117919690000065,72.84025906800008],
        "address": "Manisha Building Plot No 52 N S Road JVPD VILE PARLE WEST MUMBAI- 400056"
    },
    {
        "location": [18.953453242000023,72.80619073800005],
        "address": "Doshi palace, Walkeshwar road, Malabar hill, Walkeshwar, Mumbai- 400006"
    },
    {
        "location": [19.144114400000035,72.83854610000003],
        "address": "ELITE RESIDENTCE SULATANA BEHRAM BAUG JOGESHWARI WEST MUMBAI- 400102"
    },
    {
        "location": [18.96156710100007,72.82123674000007],
        "address": "12th Lane Khetwadi, Mithaiwala Mansion, Grant road, Near Balwas Hotel, Khetwadi, Mumbai-400007"
    },
    {
        "location": [18.964940013000046,72.81965254500005],
        "address": "Kamar Building, K K Marg, Opp Navjivan society, Kamathipura, Mumbai- 400008"
    },
    {
        "location": [18.963941125000076,72.81041860400006],
        "address": "Spenta Tower, Forjett street, Gawalia tank, Grant Road, Mumbai- 400036"
    },
    {
        "location": [18.973029912000072,72.81515646100007],
        "address": "Milan Building, Tardeo Rd, AC Market, Tardeo, Mumbai-400034"
    },
    {
        "location": [19.12838531600005,72.83359826500003],
        "address": "MHADA COLONY NO 2 TAPE DARGA OPP WADIA HIGHSCHOOL ANDHERI WESTMUMBAI- 400053"
    },
    {
        "location": [18.956426402000034,72.81308495500008],
        "address": "Nemani apartment,N S patkar marg, Girgaon chowpatty, Mumbai- 400007"
    },
    {
        "location": [19.095851679000077,72.84014426500005],
        "address": "NANAWATI HOSPITAL, VILEPARLE WEST, MUMBAI- 400056"
    },
    {
        "location": [19.141398974000026,72.80671912000008],
        "address": "THOMAS APPARTMENT OPP.NATRAJ BUILDING, VERSOVA ANDHERI WEST MUMBAI-400061"
    },
    {
        "location": [18.965694163000023,72.81339531200007],
        "address": "Bhatia Hospital, Tardeo road, Old Chikalwadi, Grant Road, Mumbai-400007"
    },
    {
        "location": [18.954896717000054,72.82240452600007],
        "address": "Kalyan Building, Sadashiv Cross Lane, Kandawadi, Grant Rd, Mumbai- 400007"
    },
    {
        "location": [18.968450218000044,72.82254177400006],
        "address": "Kailash Apartment, JBB Rd, Dalal Estate, Mumbai Central-400008"
    },
    {
        "location": [18.955676778000054,72.82030816700006],
        "address": "Khotachi wadi, Dhobi Ghat, Girgaon, Mumbai- 400004"
    },
    {
        "location": [19.08448019897095,72.88669256813886],
        "address": "GULAB SHAH ESTATE LBS MARG OPP DELUX HOTEL KURLA WEST MUMBAI- 400070"
    },
    {
        "location": [19.06330897835481,72.9168835209811],
        "address": "NATWAR PAREKH COMPOUND SHIVAJI NAGAR POLICE STATION MUMBAI- 400043"
    },
    {
        "location": [19.06853523898761,72.898013724631],
        "address": "Tilak Nagar Colony, Tilak Nagar, Chembur Mumbai- 400089"
    },
    {
        "location": [19.17396856572831,72.84630525173975],
        "address": "A. K. Tower S V Road Opp. DHS Goregaon West Mumbai-400104"
    },
    {
        "location": [19.05924054971151,72.90605517320749],
        "address": "Building No. 22 near bhau pradhan maidan, subhash nagar, Chembur, Mumbai 400070"
    },
    {
        "location": [19.1909158540494,72.85697812795233],
        "address": "Oscar Apartment, Pushpa park, Malad east, Mumbai- 400097"
    },
    {
        "location": [19.06838820369764,72.90118933556379],
        "address": "Amarkunj Society, Pestam Sagar Road No.2, Chembur Mumbai- 400089"
    },
    {
        "location": [19.19852462089984,72.83819434321698],
        "address": "Maxmay Building, tank road, orlem,Malad West , Mumbai- 400064"
    },
    {
        "location": [19.0047532337361,72.8542365926646],
        "address": "Rati Wadala, Near R A Kidwai Road,Police Station, Sewree, Mumbai- 400015"
    },
    {
        "location": [19.0623134004569,72.90236590017484],
        "address": "Siddharth Residency, P.Y.Thorat Marg, Chembur, Mumbai- 400089"
    },
    {
        "location": [19.1843466952888,72.85297987264853],
        "address": "Raheja park sanjivani hospital Malad east Mumbai- 400097"
    },
    {
        "location": [19.16840665401436,72.88072014336265],
        "address": "Lilly building Mantri park, Dindoshi Malad East Mumbai- 400097"
    },
    {
        "location": [19.06890780056952,72.88148879845679],
        "address": "TAYBAH APARTMENT KHAN ABDUL MASJID ROAD, BRAHMANWADI KURLA WEST MUMBAI - 400070"
    },
    {
        "location": [19.19041669914858,72.8447859996975],
        "address": "Shivram Apartment , Ramchandra Lane Ramchandra Lane Malad west Mumbai- 400064"
    },
    {
        "location": [19.18015358202469,72.8612810261699],
        "address": "Bahist Apartment , Near Bahji Market, Pathanwadi Malad east Mumbai- 400097"
    },
    {
        "location": [19.19130670024387,72.85477880019674],
        "address": "Abhijit Indavan Complex Datta Mandir Road Malad East Mumbai- 400097"
    },
    {
        "location": [19.08515914687724,72.91089749451115],
        "address": "Neelkanth, R N Marg, Opposite Tea Villa, Pant Nagar, Mumbai- 400075"
    },
    {
        "location": [19.14591470015221,72.85743459949869],
        "address": "Hill view Near Western express Highway bimbisar nagar, goregaon East Mumbai-400065"
    },
    {
        "location": [19.17983885254994,72.86365680986358],
        "address": "HUMERA PARK RANISATI MARG , PATHANWADI Malad East, Mumbai-400097"
    },
    {
        "location": [19.18579721799883,72.8190250943468],
        "address": "Vaishali Apartment, MHADA Malwani Malad West Mumbai-400095"
    },
    {
        "location": [19.07043859962363,72.88029069897017],
        "address": "REGAL HOUSE BLDG PIPE LINE MARKAZ MASJID BUDDHA COLONY MUMBAI-400070"
    },
    {
        "location": [19.05840073080026,72.90080284214432],
        "address": "sanket apartment,14 th road,near ambedkar Garden Chembur Mumbai- 400071"
    },
    {
        "location": [19.17438190122677,72.85367340062878],
        "address": "kailash ram krupa kale bldg, Upper govind nagar, Mumbai- 400065"
    },
    {
        "location": [19.23158763497941,72.83848845147135],
        "address": "Building no.5 MHB colony Old MHB Gorai Rd Borivali West Mumbai-400092"
    },
    {
        "location": [18.99367330045698,72.8368930005215],
        "address": "NARAYAN ASHRAM, GANESH GALLI ROAD, LALBAUG, PAREL, MUMBAI, 400012"
    },
    {
        "location": [19.17612409915269,72.84443979920837],
        "address": "Deep Sadan Building SV road Sunder nagar Goregaon Mumbai- 400064"
    },
    {
        "location": [19.0525582473855,72.91082055166858],
        "address": "Goldcrest Building W.T. Patil Marg amar cinema Chembur Mumbai- 400071"
    },
    {
        "location": [19.07538880001521,72.91242049986742],
        "address": "Parasnath Building Sudha Park Near Railway Police ground Garodia Nagar Mumbai-400075"
    },
    {
        "location": [19.17045159949196,72.84311890004268],
        "address": "OFF OPP. to Patel Petrol Pump ?????? ????????? ????? Goregaon West Mumbai-400062"
    },
    {
        "location": [19.07624796577155,72.87818323246717],
        "address": "PRANAM HOUSING SOCIETY ANNASAGAR MARG 192 KURLA CST ROAD BEHIND NOOR HOSPITAL MATCH FACTORY MUMBAI- 400070"
    },
    {
        "location": [19.15757853949804,72.83750158881226],
        "address": "Ganesh Maidan Motilal nagar no. 2 Goregaon West Mumbai- 400104"
    },
    {
        "location": [19.04671400004867,72.89526209991986],
        "address": "Barrack no.25&32, Indira Nagar, Opp. Red Spice Hotel, Chembur Mumbai- 400071"
    },
    {
        "location": [19.16321210016212,72.83504380033443],
        "address": "prathana hospital bldg, mg road behind kokan kinara hotel Goregaon Wesrt Mumbai- 400104"
    },
    {
        "location": [19.18682590000995,72.8324187000668],
        "address": "Interface heights link road Behind D mart Malad West Mumbai- 400064"
    },
    {
        "location": [19.06792045384607,72.88102301119729],
        "address": "IMTIAZ BUILDING SHAMI COMPOUND BRAHMANWADI KALLU MUTTON SHOP KURLA WEST MUMBAI- 400070"
    },
    {
        "location": [19.0519766022141,72.92671793353959],
        "address": "HIRANANDANI LALLUBHAI, LALLUBHAI POLICE STATION GOVANDI MUMBAI- 400043"
    },
    {
        "location": [19.06808990065536,72.89449589921708],
        "address": "Building No.73 Gangotri Building Tansa Pipe Line Road Gangotri Building Chembur- 400071"
    },
    {
        "location": [19.19517419911304,72.84173629979354],
        "address": "Farm manor Apartment Adarsh complex Malad West Mumbai-400064"
    },
    {
        "location": [19.15910000081551,72.84760200051514],
        "address": "Swastik Residency road no 2 jawahar nagar Goregaon West Mumbai- 400104"
    },
    {
        "location": [18.95671811361133,72.79948921077431],
        "address": "Priyadarshani park, L J Marg, Navshanti Nagar, Malabar Hill, Mumbai 400006"
    },
    {
        "location": [19.04677011350242,72.89344832636205],
        "address": "Inlak Hospital C.G. Road Inlak Hospital Chembur 400071"
    },
    {
        "location": [19.1572488926613,72.83307611374319],
        "address": "masjid galli bhagat singh nagar no 1 near tayeba masjir Goregaon West Mumbai-400104"
    },
    {
        "location": [19.23692268964234,72.84220703236863],
        "address": "Police quarters,Yogi Nagar, Borivali west- 400092"
    },
    {
        "location": [19.2325083805349,72.86004746455633],
        "address": "Siddhivinayak, Sukarwadi, Borivali west- 400092"
    },
    {
        "location": [19.2303818659108,72.82724671753233],
        "address": "Yogeshwar CHS Plot no 40, Gorai 2, Pepsi Ground, Borivali west- 400092"
    },
    {
        "location": [19.24486717756416,72.84953588065856],
        "address": "Raj Flodio , I C Colony, Borivali West- 400103"
    },
    {
        "location": [19.24896701644581,72.85039501699657],
        "address": "Hill crest, Holy cross road, Thomas church, IC colony, Borivali west-400103"
    },
    {
        "location": [19.20215161687704,72.84855214198849],
        "address": "Shubhashish Building, s.v road, kandivali west- 400067"
    },
    {
        "location": [19.19624299957501,72.877897598938],
        "address": "Sapphire Heights, Akurli road,Near LFS,Kandivali East- 400101"
    },
    {
        "location": [19.19378279195065,72.85883772103061],
        "address": "Sunshine Society, Datta Mandir Road, Kandivali East- 400101"
    },
    {
        "location": [19.20057779943126,72.86807219901337],
        "address": "Acme Oasis ,Akurli Road, opp. Mahindra & Mahindra, Kandivali East, Mumbai, 400101"
    },
    {
        "location": [19.20736033533321,72.81977715259843],
        "address": "Tirumala Krupa, Kandivali, Charkop, Charkop Gaon, Kandivali West, Mumbai, 400067"
    },
    {
        "location": [19.21036570278617,72.86568642480607],
        "address": "Videocon Tower, Kandivali East, Mumbai, 400101"
    },
    {
        "location": [19.19827942239157,72.85432179120784],
        "address": "Kalpataru Garden Chs, Rajguru Flyover, Kandivali, Ashok Nagar, Kandivali East, Mumbai, 400101"
    },
    {
        "location": [19.21161665775317,72.84251673249412],
        "address": "Ronak Arcade, S V Road, Opposite Telehpone Exchange, Kandiwali West- 400067"
    },
    {
        "location": [19.21132252239151,72.8732946446191],
        "address": "EMP Bldg no.49, Thakur Village, Kandiwali West, 400101"
    },
    {
        "location": [19.19821808559484,72.85702182052151],
        "address": "Amrut kanchan Society, Ashok nagar, Kandivali East- 400101"
    },
    {
        "location": [19.21301532345382,72.8415009464576],
        "address": "Raj Arcade, Mahavir Nagar, Kandivali West- 400067"
    },
    {
        "location": [19.21185534157447,72.8516418566863],
        "address": "Silver Avenue,Julekabai Chandu Chawl, Kandivali West- 400067"
    },
    {
        "location": [19.19505911291497,72.86733716483546],
        "address": "Sagar Society SRA,Hanuman Nagar,Nr. Ayyappa Mandir,Kandivali East, Mumbai-400101"
    },
    {
        "location": [19.20141878575375,72.84210039343505],
        "address": "Dharamveer chs,iraniwadi road no.3,kandivali west- 400067"
    },
    {
        "location": [19.21648885735142,72.84569676862795],
        "address": "J3 Block no.3, Mahavir Nagar, Kandivali West, 400067"
    },
    {
        "location": [19.20661649962296,72.85040409871917],
        "address": "Ladiwala Bhavan, kandivali west, 400067"
    },
    {
        "location": [19.12302909043466,72.91637099186661],
        "address": "Divine CHS,Behind Tirandaz School, Powai- 400076"
    },
    {
        "location": [19.12167399056887,72.93912895666386],
        "address": "MHADA Building, Vikhroli East- 400083"
    },
    {
        "location": [19.1447462723338,72.9329486837595],
        "address": "Samruddhi Gardens Society, LBS Road,Bhandup West-400078"
    },
    {
        "location": [19.14959293075718,72.94582136514298],
        "address": "Arogyasadan Society, Juvekar Road, Bhandup East- 400042"
    },
    {
        "location": [19.20827467432127,72.8323169699333],
        "address": "PARK ROYAL CHS , OFF LBS ROAD, MULUND WEST- 400080"
    },
    {
        "location": [19.16642353291165,72.92747930334731],
        "address": "MCGM QUARTERS, BHANDUP COMPLEX, MULUND WEST- 400080"
    },
    {
        "location": [19.17414334136941,72.96243320666285],
        "address": "MANGAL SRUSHTI , NEELAM NAGAR, MULUND EAST- 400081"
    },
    {
        "location": [19.16339407384781,72.94483625566802],
        "address": "Vivekanad Society, J.N.ROAD, , SARVODAY NAGR, MULUND WEST- 400080"
    },
    {
        "location": [18.91820679616992,72.82466783514951],
        "address": "Ganesh murthi nagar part no.2 captain prakash peth marg colaba 400005"
    },
    {
        "location": [18.97920903427471,72.82740639624978],
        "address": "Transit Camp Tank Pakhadi Street Kalapani Mominpura 400011"
    },
    {
        "location": [18.96552988800242,72.82531287437564],
        "address": "Kamathipura 7th Lane Chawl No. 21 Kamathipura 7th lane  Kamathipura 400008"
    },
    {
        "location": [18.96971264165106,72.84194449407565],
        "address": "Tulsiwadi Chawl Gunpowder Road Mazgaon 400010"
    },
    {
        "location": [18.96102937556583,72.82614395453689],
        "address": "Kasam Hathi Chawl Kamathipura 1st Lane Kamathipura 400008"
    },
    {
        "location": [18.96280629630638,72.83180850194071],
        "address": "Sanjay Gandhi Nagar  J J Marg Railway Compound Mazgaon 400010"
    },
    {
        "location": [19.02296329441896,72.8707374045943],
        "address": "SANGAM NAGAR,S.P. ROAD,ANTOP HILL, WADALA EAST S P Road wadala east 400037"
    },
    {
        "location": [19.02804451927894,72.87339361227305],
        "address": "BHARATIYA KAMALA NAGAR, S P ROAD, NEAR KARBALA MSJID, ANTOP HILL, WADALA EAST S P Road wadala east 400037"
    },
    {
        "location": [19.0276777,72.87024559999999],
        "address": "SAI BABA MANDIR, VIJAY NAGAR , ANTOP HILL, WADALA c/o pandit[rented house] Wadala east 400037"
    },
    {
        "location": [19.01594201636252,72.86459743933852],
        "address": "siddharth nagar koraba mithagar Wadala 400037"
    },
    {
        "location": [19.00588495770202,72.85492723138128],
        "address": "Bhola Master Chawl Bhola Master Chawl Sewree Cross Road Near Railway Line Gate No 6 Wadala 400031"
    },
    {
        "location": [19.0055033555024,72.85497499323805],
        "address": "mun chawl no 103 Mun Chawl no 103, Gate No 6 Municipal Chawl Sewree Cross Road Near Railwy Gate No 6 Wadala 400031"
    },
    {
        "location": [19.0414773,72.8484537],
        "address": "Jasmin Mill road Gasita ram factory dharavi 400017"
    },
    {
        "location": [19.051802500000065,72.88662380000005],
        "address": " Chembur Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
    },
    {
        "location": [19.0097346,72.8255543],
        "address": "Century Quartets P B Marg 0 worli village 400013"
    },
    {
        "location": [19.02163552269838,72.81812809953696],
        "address": "DEVICHA OOTA,BND BIG HANUMAN MANDIR,JANTA COLONY DEVICHA OOTA,JANTA COLONY,NR BIG HANUMAN MANDIR buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.0185886,72.8188249],
        "address": "KATKAR HOUSE buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.01747046395444,72.8202652293119],
        "address": "NAVNEET CHOWK,JANTA COLONY buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.01751015045863,72.82032885506361],
        "address": "GURU DATTA LANE GURU DATTA BAND PATHAK,JANTA COLONY,BND 169 BUSSTOP buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.01728557984215,72.82028873932421],
        "address": "GURU DATTA LANE GURU DATTA BAND PATHAK,JANTA COLONY,BND 169 BUSSTOP buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.01848536837272,72.81933247601101],
        "address": "NAVTARUN RAHIVASHI SEVA SANGH buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [18.99259722335193,72.81860268592595],
        "address": "JIJAMATA NAGR, WORLI 0 E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [18.99275572524642,72.81922314393609],
        "address": "JIJAMATA NAGAR D WARD JIJAMATA NAGR, WORLI  E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [18.99259722335193,72.81860268592595],
        "address": "ANAND NAGAR JIJAMATA NAGR, WORLI  E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [18.99230948632588,72.81832995692092],
        "address": "MATA RAMABAI AMBEDKAR NAGAR JIJAMATA NAGR, WORLI E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [18.99288364253429,72.81993259850987],
        "address": "V P NAGAR JIJAMATA NAGR, WORLI  E Moses Road JIJAMATA NAGR, WORLI WORLI 400018"
    },
    {
        "location": [19.07444236466082,72.84233563066294],
        "address": "Haji hussain chawl r/n3 masjit rd golibar road golibar santacruz East 400055"
    },
    {
        "location": [19.0567414,72.84165109999999],
        "address": "rajak chawl R/N 16 opp. Golden bakery bandra east 400055"
    },
    {
        "location": [19.08701255492469,72.84541242234782],
        "address": "Harish Chandra Viajy Khot Chawl R/57/11  New Agripada Agripada golibar santacruz East 400055"
    },
    {
        "location": [19.0650798,72.8565769],
        "address": "SRA Patthar Nagar 3 C/103 Bharat Nagr BKC Bandra [E] 400055"
    },
    {
        "location": [19.08154070356635,72.85412494816593],
        "address": "Moreshwar Chwal ,  Waghriwada  Vakola santacruz East 400055"
    },
    {
        "location": [19.13219749090547,72.85625580658747],
        "address": "Koliwada Jog E 400060"
    },
    {
        "location": [19.10794573436695,72.8589177997727],
        "address": "Kurban chawl Kurban chawl infront of ratna mahal hotel parsiwada ,chakala, andheri east 400059"
    },
    {
        "location": [19.13351105241615,72.85791979528604],
        "address": "Radhabai chawl Radhabai chawl Jhula Maidan Meghwadi Jogeshwari East 400060"
    },
    {
        "location": [19.12680647922856,72.84890382165267],
        "address": "Damodar Chawle Mogra Pada Andheri East 400069"
    },
    {
        "location": [19.0912396,72.8461938],
        "address": "Sai Baba Chawle, Dr. Rajendra Prasad Nagar Vile Parle East 400099"
    },
    {
        "location": [19.10444256955326,72.8588016868696],
        "address": "Mahatma Phule Nagar  Bamanwada Vile Parle East 400099"
    },
    {
        "location": [19.0957489,72.8372886],
        "address": "DAULAT HOUSE V P ROAD GAONDEVI TEMPLE  ANDHERI WEST 400058"
    },
    {
        "location": [19.1156666,72.8398471],
        "address": "GULSHAN WELFARE SOCEITY GILBERT HILL ROAD CHHABIL JANTA COLONY ANDHERI WEST 400058"
    },
    {
        "location": [19.11154079776221,72.86801623576561],
        "address": "LOKSEVA ITIHAT SOC.CHAWL  JUHU GALLI  WIRELESS ROAD  OPP.KOHINOOR HOTEL ANDHERI WEST 400058"
    },
    {
        "location": [19.10459847451114,72.83969093313843],
        "address": "PERIMAL CHAWL ROAD NO.5 V.M ROAD NEHARU NAGAR 0 VILE PARLE WEST 400056"
    },
    {
        "location": [19.1481828,72.8382859],
        "address": "FARJANA MASJID 0 RAGHWENDRA MANDIR ROAD GULSHAN NAGAR JOGESHWARI WEST 400102"
    },
    {
        "location": [19.1447666,72.8395335],
        "address": "RAM ADHAR SINGH CHAWL KRANTI NAGAR JOGESHWARI WEST 400102"
    },
    {
        "location": [19.06855084885717,72.87485988071177],
        "address": "R NO 14 OPP TAXIMAN COLONY A BLOCK SULWEMAN VBLDG OPPOSITE BUDDHA COLONY NEAR GAREEB NAWAZ BLDG KURLA WEST 400070"
    },
    {
        "location": [19.07143306273204,72.88044628080176],
        "address": "MARWADI CHAWL KURLA WEST 400070"
    },
    {
        "location": [19.1023426,72.88829659999999],
        "address": "HITECH SEATING SYSTEM GALA NO 3 OPP PENINSULA HOTEL,SAKINAKA KURLA W KURLA WEST 400070"
    },
    {
        "location": [19.02170972486743,72.81807286522107],
        "address": "GONTA LANE 49/E,GONTA LANE,SALE HOUSE buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.02170022182498,72.81808054625674],
        "address": "GONTA LANE 49I,JANA NAKHWA HOUSE buva bhaye marg worli village worli village 400030"
    },
    {
        "location": [19.095919700000024,72.90551690000007],
        "address": "Varsha Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [19.093636238000045,72.90381498400006],
        "address": "jalaram mandir, R B Kadam Road, Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [19.102050000000077,72.90877440000008],
        "address": "Varsha Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400079, India"
    },
    {
        "location": [19.074525528000038,72.91376147700004],
        "address": "Kamaraj Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
    },
    {
        "location": [19.072405400000036,72.91409200000004],
        "address": "Kamaraj Nagar Road, Kamaraj Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [19.09033370900005,72.89895949700008],
        "address": "Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [19.18779420000004,72.82361530000003],
        "address": "Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [19.188176183000053,72.85088855200007],
        "address": "Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.188322500000027,72.82310850000005],
        "address": "Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [19.189758934000054,72.85685693800008],
        "address": "Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.18579610000006,72.81704633100003],
        "address": "Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [19.18437903100005,72.82304687300007],
        "address": "Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [19.171587000000045,72.87878300000006],
        "address": "Nagari Niwara Colony, P/N Ward, Zone 4, Mumbai, Kulāba, Mumbai Suburban, Maharashtra, 400063, India"
    },
    {
        "location": [19.17184910000003,72.83825470000005],
        "address": "Motilal Nagar II, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400062, India"
    },
    {
        "location": [19.239500216000067,72.86063629500006],
        "address": "D N Dube Road, Shivaji Nagar, R/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400068, India"
    },
    {
        "location": [19.256246300000043,72.86491405000004],
        "address": "Vaishali Nagar, R/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400068, India"
    },
    {
        "location": [19.196305040000027,72.86486190000005],
        "address": "R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400101, India"
    },
    {
        "location": [19.08792222200003,72.89837777800005],
        "address": "Chawl No. 3 Porbandarwala Chawl, LBS Road Opp Naval Park Gate Near Bawdi Near Dr. Anaees Clinic Chirag Nagar Ghatkopar W- 400086"
    },
    {
        "location": [18.973937765000073,72.82710467400005],
        "address": "Chawl No. 1, BIT Chawl Agripada, Mejhraj sethi marg, Jhula Maidan, Byculla-400011"
    },
    {
        "location": [19.058625000000063,72.89171944400005],
        "address": "Gangubai Patole Chawl Siddharth Colony Chembur Naka Chembur Mumbai- 400074"
    },
    {
        "location": [19.026408333000063,72.86132500000008],
        "address": "Lal Mati kismat Nagar Wadala Mumbai-400037"
    },
    {
        "location": [19.09348055600003,72.88287777800008],
        "address": "UNWALA COMPOUND KURLA ANDHERI ROAD BEHIND ANAND BHAWAN HOTEL ANDHERI MUMBAI- 400072"
    },
    {
        "location": [18.971330556000055,72.82773888900005],
        "address": "Aksa Manzil M A road Madanpura Ghosh bazar Byculla Mumbai-400008"
    },
    {
        "location": [19.180404113000066,72.85017372800007],
        "address": "595 Hindu Dabi Chawl Haji Bapu Road Malad East Mumbai- 400097"
    },
    {
        "location": [19.103522222000038,72.88942500000007],
        "address": "KHADI NO 3 JAFAR COMPOUND SAKINAKA LINK ROAD ANDHERI MUMBAI- 400072"
    },
    {
        "location": [19.158754357000078,72.92865383400004],
        "address": "Duck Line Road, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400 078, India"
    },
    {
        "location": [19.13117905000007,72.93502045000008],
        "address": "Aniket Nursing Home, Veer Savarkar Road, Chhatrapati Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400042, India"
    },
    {
        "location": [19.11762580000004,72.93276860000003],
        "address": "S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400083, India"
    },
    {
        "location": [19.166010079000046,72.93510986200005],
        "address": "Phase-II, Goregaon Mulund Link Road, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400082, India"
    },
    {
        "location": [19.12014080000006,72.92926630000005],
        "address": "S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400083, India"
    },
    {
        "location": [18.97253055555555,72.82932222222222],
        "address": " Merchant Building Sheik Hafizuddin Marg [Sankli Street], E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400008, India"
    },
    {
        "location": [19.118538889000035,72.83677777800006],
        "address": "GULSHAN WELFARE SOCEITY, GILBERT HILL ROAD CHHABIL JANTA COLONY ANDHERI WEST MUMBAI- 400058"
    },
    {
        "location": [19.056800000000067,72.84181944400007],
        "address": "chawl no. 3, Razzak chawl Opp. Golden bakery Bandra East Mumbai- 400055"
    },
    {
        "location": [19.203413889000046,72.83129444400004],
        "address": "Janseva Samiti Azad Compound Opp. chandrika hotel kandivali west- 400067"
    },
    {
        "location": [19.16785555555556,72.83926944444444],
        "address": "jai bhavani chawl, Prem nagar, Goregaon west, 400062"
    },
    {
        "location": [19.014363889000037,72.82412777800005],
        "address": "Siddique Mohammad Chawl Old Prabhadevi road Mumbai- 400025"
    },
    {
        "location": [18.99245833300006,72.81870000000004],
        "address": "C Ward Jijamata Nagar E Moses Road Worli Mumbai- 400018"
    },
    {
        "location": [19.17902222200007,72.86228055600003],
        "address": "M S MULLA CHAWL NEAR NOORANI MASJID RANI SATI MARG PATHANWADI MALAD EAST MUMBAI- 400097"
    },
    {
        "location": [18.9717666,72.82660000000003],
        "address": "Nayee Chawl, 3rd Ghelabhai Lane, Mandapura, Pin - 400008"
    },
    {
        "location": [18.97563119840761,72.82953529948274],
        "address": "Chawl no. 14, Transit Camp, Tank Pakadi Street, Mominpura, Pin - 400011"
    },
    {
        "location": [19.01858859999999,72.81882490000004],
        "address": "Arun Prakash Sang Society, Buva Bhai Marg, Worli Village, Pin - 400030"
    },
    {
        "location": [18.99141800000001,72.830998],
        "address": "NM Joshi Police Station, Delile Road, Lower Parel, Pin - 400013"
    },
    {
        "location": [19.0732146,72.84578580000002],
        "address": "Room no. 325, Navjeevan Chawl, Indira Nagar, Gavdevi Pipe Line, Vakola, Santa Cruz East, Pin - 400055"
    },
    {
        "location": [19.1783459,72.81644860000002],
        "address": "Room No 136, NCC Plot No 14, Malvani Gate No 06, Malvani, Malad West, Pim - 400095"
    },
    {
        "location": [19.1893374,72.8183134],
        "address": "Aman Ekta Chawl, Behind Pathanwadi Masjit, Rani sati marg, Pathamwadi, Malad East, Pin - 400097"
    },
    {
        "location": [19.18343078336639,72.81842621230511],
        "address": "Room no 72, Chawl No 22, MHB Colony, Malwani, Malad West, Pin - 400095"
    },
    {
        "location": [19.20378407855691,72.83132614947365],
        "address": "Janseva Samiti, Azad Compound, opp. Chandrika Hotel, Kandivali West, Pin - 400067"
    },
    {
        "location": [18.9662344,72.82341910000001],
        "address": "68/G, Ground Floor, Mangali Kanduri Chawl, RN Nimkar Marg, Grant Road, Pin - 400008"
    },
    {
        "location": [19.00187573734854,72.8549131627703],
        "address": "BMC Chawl no 104, Rahat Nagar, Sewree Cross Road, Behind Dr. Gadas Clinic, Wadala, Pin - 400031"
    },
    {
        "location": [19.010202778000064,72.82756944400006],
        "address": "Kamgar nagar 2, New Prabhadevi Road, Prabhadevi, Mumbai - 400025"
    },
    {
        "location": [19.068630556000073,72.87996388900007],
        "address": "FITWALA BLDG, BEHIND KING BAKERY, KUELA WEST, MUMBAI _ 400070"
    },
    {
        "location": [19.059900000000027,72.88810277800007],
        "address": "Pada No. 2 , Thakkar Bappa Colony, Chembur, Mumbai - 400071"
    },
    {
        "location": [19.062763889000053,72.87304722200008],
        "address": "Sagar Chawl, Kurla Court, Hari Masjid, Kurla West Mumbai- 400070"
    },
    {
        "location": [19.01730156437571,72.81922835574561],
        "address": "NO.25,buva bhaye marg,worli, village,Dadar,Mumbai-400030"
    },
    {
        "location": [18.95845886654826,72.83547541671486],
        "address": "Heights Nishanpada Road Mumbai- 400009"
    },
    {
        "location": [18.95629257860853,72.83564771070274],
        "address": "Masjid Building Nishanpada Road Mumbai- 400009"
    },
    {
        "location": [19.16066549990866,72.84871440038823],
        "address": "8 Jawahar Nagar Road No. 8 Opposite Bank of Baroda Goregaon West Mumbai- 400104"
    },
    {
        "location": [18.94942490024278,72.83568129830951],
        "address": "manzil, Old Bengalipura, Koliwada- 400003"
    },
    {
        "location": [18.97524860076407,72.82382180037979],
        "address": "hardt Hospital Dr. A. Nair Road Agripada Police Station, Mumbai - 400011"
    },
    {
        "location": [18.97480981114631,72.82624095010003],
        "address": "ing NO. 22 BIT Chawl Madhavrao Gangan Marg Near Fancy Market Agripada- 400011"
    },
    {
        "location": [19.16144100049506,72.83414650056405],
        "address": "s Building Laxmi nagarGoregaon West Mumbai- 400104"
    },
    {
        "location": [19.03344767921452,72.85931359583236],
        "address": "NO. 100, KRUSHNA KUNJ, OPP MANAV SEVA SANGH B A Road Sion East MUMBAI- 400022"
    },
    {
        "location": [19.04185019360662,72.84822475800539],
        "address": "nd bldg,Jasmin Mill road,Gasita ram factory,dharavi,Mumbai-400017"
    },
    {
        "location": [18.95019627891617,72.83891488889894],
        "address": "hi Godown, Masjid Side Road, Masjid Bandar, Mumbai-400009"
    },
    {
        "location": [18.9690894708455,72.82832897304651],
        "address": "m Buiding 3rd Ghelabhai Lane Madanpura Mumbai- 400011"
    },
    {
        "location": [18.96521768508955,72.84138127778964],
        "address": "Hussain Patel Marg Munna seth Compound Belveder Road, Bhandar Tekdi, Mazgaon, Mumbai - 400010"
    },
    {
        "location": [18.98563049970605,72.83137699977947],
        "address": "ani Building [Anand Estate] N. M. Joshi Marg Chinchpokli, Mumbai 400011"
    },
    {
        "location": [18.99430915006503,72.8447583497175],
        "address": "asindhu Chs Transit Camp, G D Ambekar Road Near, Monorail Poll no 11, Kalewadi, Mumbai - 400033"
    },
    {
        "location": [18.97440913376164,72.83234188462139],
        "address": "l No.1 Panch Khate Chawl B. J. Marg Byculla Mumbai- 400008"
    },
    {
        "location": [19.14829666207511,72.94465870066692],
        "address": "Yashodhara CHS Udayshree RoadBhandup [E] Mumbai- 400042"
    },
    {
        "location": [18.9382082985796,72.8372232833373],
        "address": "yog, 5,Mint road, opp GPO, fort, Mumbai- 400001"
    },
    {
        "location": [19.12840599845547,72.92525409846182],
        "address": "Parivartan Society LBS Road K-1, MMRDA Colony, Kanjurmarg Railway Station Mumbai-400079"
    },
    {
        "location": [19.00558071101374,72.85414154401901],
        "address": "rashtra Housing, Board Dyaneshwar Nagar R A Kidwai Road, Sewree,Mumbai-400015"
    },
    {
        "location": [18.97302309935158,72.82946620026283],
        "address": "illa Arcade Sankhali Stree huda masjid Byculla Mumbai-400008"
    },
    {
        "location": [19.01749964617516,72.8207839224221],
        "address": "NO 35,ADARSH NGR,buva bhaye marg,worli village,Dadar,Mumbai-400030"
    },
    {
        "location": [19.21211643273198,72.84074746570468],
        "address": "mi residency, mahavir nagar,ekta nagar Kandivali West Mumbai- 400067"
    },
    {
        "location": [19.20169804237701,72.82654635237654],
        "address": "no14 Ekta Nagar Mhada Kandivali West- 400067"
    },
    {
        "location": [18.96348750274705,72.83098459971492],
        "address": "Height Barkat Ali Virani Marg Nagpada Mumbai- 400010"
    },
    {
        "location": [19.07724122656829,72.88068201295805],
        "address": "IMAN BLDG,  NEW MILL ROAD, Mehboobi Sulemani Masjit, Near Gandhi Maidan, Kurla West - 400070"
    },
    {
        "location": [19.19700349193533,72.82162947200585],
        "address": "iri Building, Oppo ST Paul School ,Malvani Gate No, Malvani,Malad west, Mumbai-400095"
    },
    {
        "location": [18.96654549401343,72.84650630105452],
        "address": "ir Niwas, Brahmadev Khot Marg Mazgaon Mumbai- 400010"
    },
    {
        "location": [19.06845953377224,72.87994922319201],
        "address": "ALA BLDG, PIPE ROAD ,KURLA WEST, Mumbai-400070"
    },
    {
        "location": [19.01754458422495,72.81905807872688],
        "address": "QTR,buva bhaye marg/worli village,Dadar,Mumbai400030"
    },
    {
        "location": [19.077519444000075,72.84454722200007],
        "address": "Ramjeevan Chawl Near Ramakant Dairy 5th Golibar Road Santacruz East Mumbai- 400055"
    },
    {
        "location": [19.17624769790309,72.86790399039066],
        "address": "ay Gandhi Nagar, Dindoshi Court, Malad East, Mumbai 400097"
    },
    {
        "location": [18.96627254683592,72.81261419545214],
        "address": "Hari Building V N Marg Gawalia Tank Grant Rd Mumbai-400007"
    },
    {
        "location": [18.96481070009375,72.81128709951503],
        "address": "rn House Bldg Forjett Street Grant Rd Mumbai- 400007"
    },
    {
        "location": [18.96428769797326,72.81579278067214],
        "address": "hkar Building Grant Rd Mumbai- 400007"
    },
    {
        "location": [18.96170459791564,72.83455537058657],
        "address": "ad chamber L.N.Jadhav marg, Opp J.J. Hospital, Mumbai- 400009"
    },
    {
        "location": [18.94999470045629,72.82329779892072],
        "address": "ke building, gangaram khatriwadi thakurdwar Kalbadevi, Mumbai- 400004"
    },
    {
        "location": [18.95854357177087,72.83701800338875],
        "address": "him ManorBuilding, SVP Rd, Dongari, Mumbai- 400009"
    },
    {
        "location": [18.95581873980234,72.83170594325765],
        "address": "os manzil Noor Bakery Ghoghari Muhalla Mumbai- 400003"
    },
    {
        "location": [19.24373489399126,72.84790500130553],
        "address": "Haven LIC Colony Boriwali west Mumbai- 400103"
    },
    {
        "location": [18.95722170072738,72.82639770037575],
        "address": "mpura Masjid Charni Road East Mumbai-400003"
    },
    {
        "location": [18.95371731230064,72.83379650503205],
        "address": "Mansion, Tantanpura Road, Mumbai- 400003"
    },
    {
        "location": [19.05430541895303,72.8335676676619],
        "address": "al wala bldg,opp fish market bazar road,bandra west, Mumbai - 400050"
    },
    {
        "location": [19.06673682362068,72.91874730159053],
        "address": "SOCIETY, G.M LINK , Shivaji Nagar Police Station, Lotus Colony, Mumbai - 400043"
    },
    {
        "location": [19.07045983273889,72.88440876569665],
        "address": "rak Complex, LIG Colony, Vinobha Bhave Nagar, Kurla West, Kurla, Mumbai - 400070"
    },
    {
        "location": [18.99219662184117,72.81810516671031],
        "address": "ramabai ambedkar nagar,E Moses Road,Worli,Mumbai-400018"
    },
    {
        "location": [19.13483348957451,72.86007485193495],
        "address": "han-E -Madina Masjid, Shani Maharaj Mandir Road, Prem Nagar, Jogeshwari East, Mumbai - 400060"
    },
    {
        "location": [19.12611395329413,72.84809110081648],
        "address": "khan Chawl, Mogra Pada, Endheri East, Mumbai - 400069"
    },
    {
        "location": [19.00826370676675,72.8467899552739],
        "address": "AON POLICE BLDG HEADQUARTERS,DADAR east, Mumabi-400014"
    },
    {
        "location": [19.014441758102,72.84283575815255],
        "address": "BAI BUILDING,ABOVR SADHNA HOTEL,DADAR EAST, DADAR, MUMBAI - 400014"
    },
    {
        "location": [19.1054448851514,72.86005493244238],
        "address": "tma Kabir Nagar, Bamanwada, Andheri East, Mumbai - 400099"
    },
    {
        "location": [19.12565764283596,72.88388967718569],
        "address": "Marol Police Camp, Marol Maroshi Road, Customs Colony, Marol, Andheri East, Mumbai - 400059"
    },
    {
        "location": [19.01040865595671,72.82458414918285],
        "address": "NO 6,ADARSH NAGAR,buva bhaye marg,worli village,Dadar,Mumabi-400030"
    },
    {
        "location": [19.08335845453444,72.88161523094853],
        "address": "FLOOR SHEETAL APT CST Road, Behind Shital Cinema, Kurla West, Mumbai - 400070"
    },
    {
        "location": [19.00218609656497,72.8218707420464],
        "address": "chawl no 111, SS amrutwar marg,worli, Dadar, Mubaii 400018"
    },
    {
        "location": [18.99626048305448,72.81482888043143],
        "address": "mari sadan blg, worli hill road, worl, Dadar, Mumbai- 400018"
    },
    {
        "location": [19.00349502406569,72.82764953105583],
        "address": "s Network, Kamala mill campus, lower parel, Mumbai- 400013"
    },
    {
        "location": [19.14232417458226,72.84083679347636],
        "address": "er Soil CHS - Housing society, Raj Nagar, Jogeshwari, Mumbai - 400102"
    },
    {
        "location": [18.9861379567609,72.82723845533846],
        "address": "hivinayak building, j r boricha marg, Mahalakshi East, Mumbai-400011"
    },
    {
        "location": [19.12030672556815,72.84589908001354],
        "address": "adia Dispensary - Doctor SV Road, Railway Colony, Andheri West, Mumbai - 400058"
    },
    {
        "location": [19.1438143235692,72.84215647999565],
        "address": "brothers, Behram Baug Road, Raj Nagar, Gautam Nagar, Jogeshwari, Mumbai - 400102"
    },
    {
        "location": [19.152122172937,72.82802751522046],
        "address": "HAD BUILIDING, MILLAT NAGAR,JOGESHWARI WEST,400102"
    },
    {
        "location": [19.14139618192999,72.8357076746701],
        "address": "shine Cosmic - Apartment building, Behram Baug, Andheri West, Mumbai 400053"
    },
    {
        "location": [19.10940817008933,72.83013479959206],
        "address": "QUARTER, JUHU ROAD, MAKER KUNDAN GARDE< SANTACRUZ WEST, MUMBAI - 400049"
    },
    {
        "location": [19.00855350677077,72.83484827347749],
        "address": "a house, Elphinstone road, Elphinstone, Mumbai- 400013"
    },
    {
        "location": [19.00972574341402,72.82980109814788],
        "address": "hi Aasra CHS, new Prabhadevi Road, Saamna press, Prabhadevi, Mumbai400025"
    },
    {
        "location": [19.01149667888298,72.82578022054159],
        "address": "hadevi SRA bldg no.2 , Rajabhau Desai Marg, Prabhadevi, Mumbai-400025"
    },
    {
        "location": [19.01595917144568,72.82937572223527],
        "address": "hi prabha Building, sayani road, Opposite Ravindra Natya Mandir, Prabhadevi, Mumbai-400025"
    },
    {
        "location": [19.0171681145523,72.82655398727022],
        "address": "d Chaya, tata press lane, Prabhadevi,Mumbai-400025"
    },
    {
        "location": [19.01245929740808,72.82846416293374],
        "address": "ENCLAVE ,Appa Saheb Marathe Marg , Prabhadevi, Mumbai-400025"
    },
    {
        "location": [19.01239957080266,72.83021300585361],
        "address": "rsh Cooperative Housing Society - Condominium complex, J A Raul Marg, Prabhadevi, Mumbai - 400025"
    },
    {
        "location": [19.00000241760243,72.82147289780036],
        "address": "Chawl Building No. 101, Prof NG Bansode Marg, Amrutwar Mare, BDD Chawls Worli, Worli, Mumbai 400018"
    },
    {
        "location": [19.15668789426761,72.84568018524112],
        "address": "ng kumud nagar SV road Goregaon West Mumbai- 400062"
    },
    {
        "location": [18.95971000161665,72.83315579981671],
        "address": "o Siddique Hospital Building, Imamwada Rd, Mumbai- 400009"
    },
    {
        "location": [18.974183333000042,72.84828611100005],
        "address": "Lakdi Bander Darukhana Udipi Hotel Mazgaon Mumbai- 400010"
    },
    {
        "location": [18.97535000000005,72.81226111100005],
        "address": "DMD Jhopadpatti Tardeo Rd Tulsiwadi Tardeo Mumbai- 400034"
    },
    {
        "location": [19.067725000000053,72.84560000000005],
        "address": "Sambhaji Seva Mandal Jawahar Nagar Khar East Mumbai- 400055"
    },
    {
        "location": [19.063130556000033,72.85412222200006],
        "address": "Dyaneshwar Nagar Bandra East Mumbai- 400055"
    },
    {
        "location": [19.090761111000063,72.90501111100008],
        "address": "Veer Sambhaji Chawl, Ganesh nagar, Above Duckline Near Saibaba Mandir, ghatkoper west, Mumbai-400086"
    },
    {
        "location": [19.01832222200005,72.86669444400007],
        "address": "Bhaiyasaheb Nagar, Barkat Ali Naka, BARKAT ALI NAKA,  WADALA EAST, Mumbai-400037"
    },
    {
        "location": [19.14137500000004,72.92383055600004],
        "address": "Jitu Rai Yadav Chawl, Pratapnagar Road , Munshi Mahal, Bhandup [W], Mumbai-400078"
    },
    {
        "location": [19.15640833300006,72.92680000000007],
        "address": "Priti Niwas Chawl, Maroda hill, Tembhipada, Bhandup [W], Mumbai-400078"
    },
    {
        "location": [19.092902778000052,72.88258333300007],
        "address": "HARI MASJID, ANDHERI ROAD, JUNA KABRASTHAN ANDHERI [E], Mumbai-400072"
    },
    {
        "location": [19.068316667000033,72.84491111100004],
        "address": "Gurubaksha Punjabi Chawl, Jawahar Nagar, Sai Baba Road, Khar East, Mumbai-400055"
    },
    {
        "location": [19.06312222200006,72.85413888900007],
        "address": "Jai Ma Sharada Rahivasi Sevak ,Dnyaneshwar Nagar, Nalaside, Bandra East, Mumbai-400055"
    },
    {
        "location": [19.060572222000076,72.84231388900008],
        "address": "Yunus Miyan Chawl ,Naupada ,Bandra East, Mumbai - 400055"
    },
    {
        "location": [19.086686111000063,72.84411944400006],
        "address": "Mahakali Shivshankar Nagar, New Agripada ,Santacruz East, Mumbai-400055"
    },
    {
        "location": [19.07799166700005,72.87481111100004],
        "address": "Parvez Chawl, Near Mohammadi Masjit, Shashtri Nagar, Kalina, Santacruz East, Mumbai - 400055"
    },
    {
        "location": [19.086866667000038,72.84554722200005],
        "address": "Gajanan Rahivasi Sangh ,New Agripada, Santacruz East, Mumbai- 400055"
    },
    {
        "location": [19.063352778000024,72.85695833300008],
        "address": "Pathar Nagar ,Bharat Nagar, BKC Road, Bandra East, Mumbai- 400055"
    },
    {
        "location": [18.9592588,72.827604],
        "address": "Suryadarshan Building B wing Santsena marg second Kumbharwada Girgaon 400003"
    },
    {
        "location": [18.9151653,72.82994599999999],
        "address": "sundernagar indu sarakikar marg near colaba market colaba 400005"
    },
    {
        "location": [18.92346139142684,72.83336606011292],
        "address": "Narang  house arthur bunder road near Gate way of India Colaba 400005"
    },
    {
        "location": [18.95070823981872,72.82112684658343],
        "address": "Md Ali Rogay Bldg Thakurdwar Road Near Saifee hospital Charni road  400004"
    },
    {
        "location": [18.9382633771475,72.83736535678327],
        "address": "25,sahayog 5, Mint road opp GPO fort 400001"
    },
    {
        "location": [18.949316,72.8292431],
        "address": "Vivek Bldg Kalbadevi road Badamwadi 400003"
    },
    {
        "location": [19.08574722222222,72.8448361111111],
        "address": "Ravi Tambolli Chawl, Nre Agripada, Santacruz East, 400055"
    },
    {
        "location": [19.05675833333334,72.84176388888888],
        "address": "R/23, razam Chawl No 03, bandra east, 400055"
    },
    {
        "location": [19.05524444444444,72.83092222222221],
        "address": "Flat no. 9 Jai Jawan Store, Hill Road, Vaidya Nagar, Bandra West, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400050, India"
    },
    {
        "location": [19.05515555555556,72.84276388888888],
        "address": "Floor No 214 , Behram Nagar, Bandra East, 400055 ,A K Marg [Station Road], Garib Nagar, H/W Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [19.05641111111111,72.84412499999999],
        "address": "Opp. Nav Nirman Chawl Behram Pada, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [19.13468055555556,72.85989166666666],
        "address": "C-13/183 Shyam Nagar, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400060, India"
    },
    {
        "location": [19.09795833333333,72.85079444444443],
        "address": "Room no 60 A sawant Marg, Chakala Village, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400057, India"
    },
    {
        "location": [19.11530833333334,72.85383611111111],
        "address": "Govind Wadi DP Rd, Azad Nagar, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400 099, India"
    },
    {
        "location": [19.11156111111111,72.84957777777777],
        "address": "6/609, Building no. 3 Sahar Road, Azad Nagar, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400057, India"
    },
    {
        "location": [19.10033611111111,72.84599166666666],
        "address": "16 A Big Baazar, Shraddhanand Road, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400057, India"
    },
    {
        "location": [19.12477222222222,72.84073611111111],
        "address": "21, A Wing New Dadabhai Nagar, Azad Nagar, K/W Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400058, India"
    },
    {
        "location": [19.07038888888889,72.87995555555555],
        "address": "R NO 72 Kurla Nursing Room, Pipe Line Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.07444722222222,72.88048055555555],
        "address": "35 IMTIAZ BUILDING Bal Hanuman Mandir, Santa Cruz – Chembur Link Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.07529444444445,72.87358611111111],
        "address": "BLDG NO 12 Santa Cruz – Chembur Link Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.06934722222222,72.88129444444444],
        "address": "602 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.07038055555556,72.88439722222223],
        "address": "101 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.08418333333333,72.87963055555555],
        "address": "12/412 Jarimari, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.07345277777778,72.88125833333332],
        "address": "R NO 14 Pipe Line Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.07794722222222,72.8817],
        "address": "43 Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.06064444444445,72.88725833333334],
        "address": "42/C L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.08861388888889,72.89437222222223],
        "address": "Narayan Nagar Narayan Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
    },
    {
        "location": [19.05531388888889,72.87068888888888],
        "address": "Room no. 1708 Reliance Industries Ltd, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 022, India"
    },
    {
        "location": [19.05265555555556,72.90986388888889],
        "address": "Navparmanu building A & b wing Ashirwad Hospital and Polyclinic, Road No. 5, Ghatla Village, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
    },
    {
        "location": [19.050525,72.89109166666667],
        "address": "Trishul Building Acres Club, Sindhi Society Road Number 1, Sindhi Society, Chembur East, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
    },
    {
        "location": [19.06685555555556,72.8983388888889],
        "address": "Building No. 24 Tilak Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
    },
    {
        "location": [19.18850277777778,72.85142499999999],
        "address": "Suresh building Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.18000833333333,72.85639444444443],
        "address": "2/C P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.18583055555556,72.84183888888889],
        "address": "402 Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400064, India"
    },
    {
        "location": [19.18166944444445,72.84060833333334],
        "address": "A/601 Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400064, India"
    },
    {
        "location": [19.16321944444444,72.83446944444444],
        "address": "Room no 615 R8 Motilal Nagar II, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400104, India"
    },
    {
        "location": [19.15335,72.88556944444446],
        "address": "19 Agaripada, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400087, India"
    },
    {
        "location": [19.20050555555556,72.84860277777777],
        "address": "1 Shree Kandivali Hitwardhak Mandal, Shantilal Modi Road, R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400067, India"
    },
    {
        "location": [19.015019,72.81752900000001],
        "address": "WPC Sir Pochkhanwala Road Worli Sir Pochkhanwala Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.015018999000063,72.81752900000004],
        "address": "WPC, Sir Pochkhanwala Road, Worli, Mumbai-400030 Sir Pochkhanwala Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.147461,72.946177],
        "address": "Arogyasadan Society Juvekar Road Bhandup [E] Bhandup Village East, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400078, India"
    },
    {
        "location": [19.041691972000024,72.85052482000003],
        "address": "madina nagar, 60 feet rd, dharavi Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, BOUNDARY, India"
    },
    {
        "location": [19.04372482200006,72.85004247900008],
        "address": "janta society, abhudaya bank,dharavi Rizwan Raza, Dharavi Main Road, Dharavi, Zone 2, Mumbai, Mumbai City, Maharashtra, 400017, India"
    },
    {
        "location": [19.001709748000053,72.81849399200007],
        "address": "bdd chawl, worli BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 40013, India"
    },
    {
        "location": [19.01835715900006,72.81840243300007],
        "address": "dhrmaraj bhandu cottage, bua bhaye marg G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.019012157000077,72.81788612000008],
        "address": "daware house G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
    },
    {
        "location": [19.075787209000055,72.86058542000006],
        "address": "jadhav chawl,behind durga nursing home Durga Maternity and Surgical Nursing Home, Vidya Nagari Marg, Mathuradas Colony, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400098, India"
    },
    {
        "location": [19.055734882000024,72.84233838600005],
        "address": "hinga galli, behram nagar,bandra east A K Marg [Station Road], Garib Nagar, H/W Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [19.02245524219123,72.87035876203905],
        "address": "Himmat nagar SP road near madina masjid wadala east mumbai 37 Sangam Nagar, F/N Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400037, India"
    },
    {
        "location": [19.08880801981999,72.89366247293003],
        "address": "yan Nagar,Gaibanshah Dargah, Ghatkopar [w] Narayan Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
    },
    {
        "location": [19.0647,72.85949722222222],
        "address": "Chawl No.60/926 Mount Litera School International, Bandra Kurla Complex Road, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400 051, India"
    },
    {
        "location": [19.06745,72.84631944444443],
        "address": "Room no.3 busstand 1, Service Road, Gandhi Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [19.05515555555556,72.84276388888888],
        "address": "Room No. 344 A K Marg [Station Road], Garib Nagar, H/W Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [19.10656388888889,72.86858888888888],
        "address": "Kadamwadi Star Hub, Marol Pipeline Road, Sahar Gaon, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400059., India"
    },
    {
        "location": [19.12399183997624,72.85027037811345],
        "address": "Room 3 Azad Nagar, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400069, India"
    },
    {
        "location": [19.14522777777778,72.84733888888888],
        "address": "405- B P/S Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400102, India"
    },
    {
        "location": [19.07611944444444,72.8788861111111],
        "address": "R NO 3 Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.07056570056708,72.88114190134193],
        "address": "NOOR E JAHAN PIPE ROAD NEAR KURLA NURSING HOME KURLA WEST MUMBAI- 400070 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.07056666666667,72.88114166666666],
        "address": "C/205 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.06301388888889,72.88560277777779],
        "address": "R NO 302 3RD FLOOR Shree Harishwar Marg, Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.07538888888889,72.88315833333333],
        "address": "R3 building 8, Masrani Lane, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.11861944444445,72.91084166666667],
        "address": "B Wing Birchwood, Central Avenue, Swami Narayan Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400076, India"
    },
    {
        "location": [19.16726666666667,72.95730555555556],
        "address": "AMBEY ASHIRWAD BLG 1 Sadguru- Sharan I, Sant Ramdas Marg, Azad Nagar, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 40081, India"
    },
    {
        "location": [19.08295833333333,72.88159999999999],
        "address": "A/102 Bhakti Vilas Apartment, 214/1-8, Magan Nathuram Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.06842222222222,72.87994444444443],
        "address": "157 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.07719166666667,72.88201388888888],
        "address": "ROOM NO 3 Pipe Line Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
    },
    {
        "location": [19.05839722222222,72.90080277777778],
        "address": "Sanket Apartments Road No 14, Subhash Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
    },
    {
        "location": [19.17896388888889,72.83315277777777],
        "address": "Flat No 1602 Chincholi Bunder Road, Rai Pada, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400029, India"
    },
    {
        "location": [19.19629166666667,72.8207861111111],
        "address": "Anuradha Hospital Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400095, India"
    },
    {
        "location": [19.18349722222222,72.860225],
        "address": "OMKAR SRA BUILDING P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.21832222222222,72.87079722222222],
        "address": "Dheeraj Upvan Mallapada, R/C Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400101, India"
    },
    {
        "location": [19.1965,72.87746388888888],
        "address": "5 R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400101, India"
    },
    {
        "location": [19.20198333333333,72.82565555555556],
        "address": "Room No 104 Janakalyan Nagar, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400067, India"
    },
    {
        "location": [19.15437222222222,72.94307500000001],
        "address": "A - 1904 Bhandup Village Road, Bhandup Village West, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400078, India"
    },
    {
        "location": [18.9523941,72.8030381],
        "address": "Bay View Building Bay View Ridge Road Malabar Hill Malabar Hill 400006"
    },
    {
        "location": [18.95123939563695,72.80247436955051],
        "address": "Goenka House Walkeshwar Rd Malabar Hill Malabar Hill 400006"
    },
    {
        "location": [18.9630285,72.8133971],
        "address": "Orbit Heights Orbit Heights J D Marg Nanachowk Grant Road 400007"
    },
    {
        "location": [18.9735575,72.80876169999999],
        "address": "Blue Gardenia Building Pedder Road Opposite Jaslok Hospital Cumbala Hill 400026"
    },
    {
        "location": [18.94819640601052,72.79640671747708],
        "address": "Girnar Apartment Girnar Apartment Dungarsi Road Teen Batti Malabar Hill 400006"
    },
    {
        "location": [18.9674257,72.8235318],
        "address": "Orchid Enclave Orchid Enclave Bellasis Road Dalal Estate Mumbai central 400008"
    },
    {
        "location": [18.97766003089335,72.81071188863162],
        "address": "Hira Panna Building Hira Panna Building B D Marg Haji Ali Malabar Hill 400006"
    },
    {
        "location": [18.9535107,72.7973967],
        "address": "Hanuvant Bhuvan Hanuvant Bhuvan Napean Sea Road Navshanti Nagar Malabar Hill 400006"
    },
    {
        "location": [18.9681186,72.8292522],
        "address": "B Block B Block Bmc Bldg. Chandramani Buddhvihar Marg Two Tank Kamathipura 400008"
    },
    {
        "location": [18.9881006,72.83415269999999],
        "address": "Siddhivinayak Bldg & Shivshakti Bldg Vishnu Ganesh Pingle Marg Near aachrekar garden Chinchpokli 400011"
    },
    {
        "location": [18.97686248992763,72.82774369678222],
        "address": "A wing / Chawl No. 4 Building Khusnuma Apartment / BIT Chawl M A Road / M. S. Ansari Marg Kalapani Agripada 400011"
    },
    {
        "location": [18.9834974,72.8395609],
        "address": "Patra Chawl  Chawl Patra Chawl B. J. Marg Byculla 400008"
    },
    {
        "location": [18.9658907,72.8306593],
        "address": "Mustafa Manzil Building Mustafa Manzil  peerfan Street, Opp BMC School Nagpada 400008"
    },
    {
        "location": [18.9780203,72.8282842],
        "address": "Dagdi Chawal Building Dagdi chawal B.J. Marg Dagadi Chawl Dagadi Chawl 400011"
    },
    {
        "location": [18.9885662,72.83493],
        "address": "Vitthal Sadan Building Room no.26, N.M Joshi marg Byculla Stn. Buyculla 400011"
    },
    {
        "location": [19.01330763299244,72.85211919088238],
        "address": "Sahkar Nagar Bldg  SAHAKAR NAGAR BLD Wadala West 400031"
    },
    {
        "location": [19.0247994,72.8665497],
        "address": "Dosti Orchid Flat 901, Dosti  orchid, Dosti Acres Antop Hill  Wadala 400037"
    },
    {
        "location": [19.0052085,72.8484762],
        "address": "A WING A WING AND B WING  MATOSHRI TOWER JER BAI WADIA ROAD BHOIWADA PAREL  400012"
    },
    {
        "location": [18.99896837015305,72.85375120691539],
        "address": "BDD 13 &14 SEWREE BDD SEWREE CROSS ROAD OPP. SEWREE RAILWAY STATION SEWREE 400015"
    },
    {
        "location": [19.0026705,72.8533941],
        "address": "B/13/74 MaharashSta Housing Board Maharashtra Housing Board Dyaneshwar Nagar R A Kidwai Road Sewree Sewree 400015"
    },
    {
        "location": [19.0082363,72.8467897],
        "address": "BUILDING NO.1 ROOM NO. 53, SECOND FLOOR NAIGAON POLICE BLDG HEADQUARTERS DADAR 400014"
    },
    {
        "location": [19.0143453,72.8428319],
        "address": "JANABAI BUILDING ROOM NO. 34, 3RD FLOOR ABOVR SADHNA HOTEL DADAR EAST  DADAR 400014"
    },
    {
        "location": [19.0025407,72.8265301],
        "address": "world one tower world one SB marg Lower Parel 400013"
    },
    {
        "location": [19.0185886,72.8188249],
        "address": "ADARSH NAGAR buva bhaye marg worli  worli village 400030"
    },
    {
        "location": [18.98527209328602,72.82696351519593],
        "address": "laxmipooja c wing laxmipooja c wing laxmipooja society J R boricha marg near arthur road jail 400011"
    },
    {
        "location": [18.9960186,72.8322386],
        "address": "31/shivkrupa 1st floor S.balaji pawar marg,currey road mumbai13 shivkrupa building S,balaji pawar marg currey road currey road 400013"
    },
    {
        "location": [19.0136672,72.8265078],
        "address": "R.no. 2 , ground floor Charak Building Charak Building off veer Savarkar Marg beside Chavanni Maidan Prabhadevi 400025"
    },
    {
        "location": [19.001171,72.817256],
        "address": "BDD chawl no 101,Bansode marg near Ambedkar school  worli 400018"
    },
    {
        "location": [19.0808,72.8567973],
        "address": "HM Appartment Masjid Road Vakola Masjid Vakola 400055"
    },
    {
        "location": [19.06060011700896,72.85043992149176],
        "address": "Govt Colony Govt colony Road Govt Colony 400050"
    },
    {
        "location": [19.06058966941793,72.85043275987861],
        "address": "Govt Colony Govt colony Road 0 Govt Colony 400050"
    },
    {
        "location": [18.97201944444444,72.81515277777777],
        "address": " Room No- 26, 3rd Floor Ratan Tata Marg, Cowasji Jehangir Colony, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400034, India"
    },
    {
        "location": [18.96103055555556,72.82606388888888],
        "address": " Room no 47, 3rd floor Trimbak Parshuram Street, C Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [18.96598611111111,72.81353888888889],
        "address": " R.N. 86, 8th floor Chikalwadi, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [18.96927777777778,72.82545555555555],
        "address": " Room no2,1st floor E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [18.97293611111111,72.80722777777777],
        "address": " Room No-8 Shyam Nivas, Haji Ali, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [18.97369587861006,72.81482896396415],
        "address": " Room No-61 Anudhiti Care, Pandit Madan Mohan Malviya Marg, Cowasji Jehangir Colony, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400034, India"
    },
    {
        "location": [18.97191388888889,72.8321111111111],
        "address": " 4th floor room no. 12 byculla Khatau Makanji Spinning and Weaving Mills, Haines Road, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400008, India"
    },
    {
        "location": [19.06097900000003,72.92562700000008],
        "address": " Sanjay Nagar I, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400043, India"
    },
    {
        "location": [19.140058533000058,72.92969351400006],
        "address": " Jamil Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400042, India"
    },
    {
        "location": [19.15823098000004,72.93480833000007],
        "address": " Sonapur, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400 078, India"
    },
    {
        "location": [19.163992113000063,72.93615200100004],
        "address": " T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400082, India"
    },
    {
        "location": [19.06380500000006,72.92309720000003],
        "address": " Road Number 5, Milan Colony, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400043, India"
    },
    {
        "location": [19.06461470000005,72.92438060000006],
        "address": " Plot no.19, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400043, India"
    },
    {
        "location": [19.056939889000034,72.91423245000004],
        "address": " Deonar Road, Tata Nagar, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [19.061277731000075,72.90787836400006],
        "address": " janta raod, Adarsh Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
    },
    {
        "location": [19.04678400000006,72.89541220000007],
        "address": " Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
    },
    {
        "location": [19.033516000000077,72.89617030000005],
        "address": " M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
    },
    {
        "location": [19.031168765000075,72.89623193800003],
        "address": " Ramakrishna Chemburkar Marg [Ghatkopar Mahul Road], Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
    },
    {
        "location": [19.044386648000057,72.88954491700008],
        "address": " Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
    },
    {
        "location": [19.060336850000056,72.88454790000003],
        "address": " S G Barve Marg [C S T Road], Sindhi Society, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
    },
    {
        "location": [19.061279200000058,72.90818430000007],
        "address": " P.L. Lokhande Marg, Adarsh Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [19.095527121000032,72.90004929700007],
        "address": " R B Kadam Road, Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [19.099685300000033,72.90289370000005],
        "address": " Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [18.99669166666667,72.84927777777777],
        "address": " Dosti Flamingos, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400015, India"
    },
    {
        "location": [19.00576666666667,72.84571944444444],
        "address": " 19/1390, Mamta Bldg Parel Institute Of Orthopaedic Specialities, Jerbai Wadia Marg, Bhoiwada, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400012, India"
    },
    {
        "location": [18.99362222222223,72.83183333333334],
        "address": " BDD 12, Panchaganga Apartments, N M Joshi Marg [Delisle Road], BDD Chawl, E Ward, Zone 2, Mumbai, Kulāba, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [18.98544444444445,72.82926388888889],
        "address": " D committee Arthur Road Jail, Sane Guruji Marg [Arthur Road], E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [19.06078611111111,72.84973333333333],
        "address": " Room No 302 Hazarimal Chetnas College, Ambedkar chowk, Gandhi Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, India"
    },
    {
        "location": [19.09516388888889,72.88785833333334],
        "address": " A/102, Dosti Enclave, KPM High School, 90 Feet Road, Sunder Baug, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
    },
    {
        "location": [19.09374722222222,72.90226944444446],
        "address": " Sai Ganesh Bldg Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [19.07239722222222,72.90846111111112],
        "address": " R,510 , Bldg 21, Vallabh Baug lane, Ramabai Sahakar Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
    },
    {
        "location": [19.08457222222222,72.91007777777779],
        "address": " Room No.603 B Wing Babli Mahadev Kanekar Marg, Saibaba Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
    },
    {
        "location": [19.178875,72.86304444444444],
        "address": " Room No 107 Pathanwadi Road, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.22093333333333,72.86094166666666],
        "address": " 1 Dattapada Road, R/C Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400066, India"
    },
    {
        "location": [19.11861944444445,72.93453055555555],
        "address": " 9/295 S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400083, India"
    },
    {
        "location": [19.09933250000006,72.90286780000008],
        "address": " Jagdusha Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [19.099273699000037,72.91670991800004],
        "address": " R City Phase One, Road Number 6, Amrut Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400075, India"
    },
    {
        "location": [19.17825285500004,72.86223807000005],
        "address": " P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.189522453000052,72.86554153700007],
        "address": " P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.170750359000067,72.87787931800005],
        "address": " Nagari Niwara Colony, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400063, India"
    },
    {
        "location": [19.180259400000068,72.86128000000008],
        "address": " P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
    },
    {
        "location": [19.138673022000035,72.85367576000004],
        "address": " Gufa Tekdi, K/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400060, India"
    },
    {
        "location": [19.255298550000077,72.87584095000005],
        "address": " Vaishali Nagar, R/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 401202, India"
    },
    {
        "location": [19.198057222000045,72.85995734100004],
        "address": " R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400101, India"
    },
    {
        "location": [19.203754296000056,72.83185210800008],
        "address": " Charkop Village, R/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400067, India"
    },
    {
        "location": [19.124386924000078,72.91879652000006],
        "address": " Ramabai Ambedkar Nagar, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 40076, India"
    },
    {
        "location": [19.135759767000025,72.93830499300003],
        "address": " auto parking road, Kanjur Village, S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400042, India"
    },
    {
        "location": [19.166543250000075,72.95051435000005],
        "address": " Suyog Hospital and Iccu, Pandit Jawaharlal Nehru Road, Vaithara Nagar, T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400080, India"
    },
    {
        "location": [19.056780556000035,72.84175000000005],
        "address": "Razzak Chawl Golden Bakery Kherwadi Road Bandra East Kherwadi Road, H/W Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 40051, India"
    },
    {
        "location": [18.92192164805819,72.8252629324568],
        "address": "shivshaktinagar free pr÷ss journal road nariman point colaba Mumbai Coastal Road - Phase I, A Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400 021, India"
    },
    {
        "location": [18.96689444444444,72.84080555555555],
        "address": " Belvedere hill St Peters School, Belvedere Road, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400009, India"
    },
    {
        "location": [19.01413055555556,72.8620111111111],
        "address": " 9/179 BPT Hospital, LM Nadkarni Road, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400011, India"
    },
    {
        "location": [18.96306666666667,72.81490277777777],
        "address": " 1803, 18th floor Shankar Seth Lane, Chikalwadi, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400007, India"
    },
    {
        "location": [18.96426388888889,72.82742777777777],
        "address": " Room No- 9, 23/16 Shankarrao Pupala Marg, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
    },
    {
        "location": [18.96694444444444,72.80754722222223],
        "address": " Room No-31, B Wing Kenilworth, Pedder Road [Gopalrao Deshmukh Marg], Haji Ali, D Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400026, India"
    },
    {
        "location": [18.98755555555556,72.8336861111111],
        "address": " Arham tower Building E Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [18.98360833333333,72.83419166666665],
        "address": " E wing room no. 20 10th floor Dr Babasaheb Ambedkar Marg, E Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400027, India"
    },
    {
        "location": [19.02626111111111,72.8721611111111],
        "address": " Rm no. 501, Bharatiya Kamala Nagar, F/N Ward, Zone 2, Bharathiya Kamala Nagar, Mumbai City, Maharashtra, 400037, India"
    },
    {
        "location": [19.00627222222222,72.84681944444444],
        "address": " Flat No 205 G.D. Ambedkar Marg, Bhoiwada, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400031, India"
    },
    {
        "location": [19.00147222222222,72.85279999999999],
        "address": " 901 Ashwamedh CHS Sadbhavana Nagar, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400033, India"
    },
    {
        "location": [18.99535,72.82621666666667],
        "address": " 3/52 Khimji Nagji Firki, 1, Janta Industrial Estate, Senapati Bapat Marg, BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400013, India"
    },
    {
        "location": [19.10005555555556,72.86794722222221],
        "address": " Room No. 2 Sahar Gaon, CPWD Colony, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400099, India"
    },
    {
        "location": [19.06534166666667,72.90718333333334],
        "address": " Topaz Building Rahul Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
    },
    {
        "location": [19.08761388888889,72.90238055555557],
        "address": " Sindhi Chawl LBS Marg, Sunder Baug, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
    },
    {
        "location": [19.17595,72.87313611111111],
        "address": " B 203 Tree House Play School, General A K Vaidya Marg,Yashodham, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400063, India"
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
}



function alrtfisrtime(){

var visited = localStorage.getItem('visited');
if (!visited) {
  alert( '👉 Click on Gps button 🛰️ to see Infected area near your location');
  localStorage.setItem('visited', true);
}
}