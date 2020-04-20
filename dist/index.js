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
    carea = [
        {
            "location": [
                "18.99230949",
                "72.81832996"
            ],
            "address": "Vp Nagar, Jijamata Nagr, Worli, E Moses Road, Jijamata Nagr, Worli, Worli-400102"
        },
        {
            "location": [
                "18.99288364",
                "72.81993259999999"
            ],
            "address": "Shivkrupa Building, S,Balaji Pawar Marg, Currey Road-400102"
        },
        {
            "location": [
                "19.02170972",
                "72.81807287"
            ],
            "address": "GONTA LANE 49/E,GONTA LANE,SALE HOUSE buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "19.02170022",
                "72.81808055"
            ],
            "address": "GONTA LANE 49I,JANA NAKHWA HOUSE buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "19.01436389",
                "72.82412778"
            ],
            "address": "M Ward, V P Nagar, Lotus, A B Road, Nsci Club, Worli-400102"
        },
        {
            "location": [
                "18.99245833",
                "72.8187"
            ],
            "address": "Siddhivinayak Building, Siddhivinayak Society, Jr Boricha Marg, Behind Arthur Road Jail, J R Boricha Marg-400058"
        },
        {
            "location": [
                "19.02148611",
                "72.81738611"
            ],
            "address": "Katkar House, Kesari Nath Buva Bhay Marg, Worli Village-400056"
        },
        {
            "location": [
                "19.01710833",
                "72.81858333"
            ],
            "address": "Varas Lane, Worli Koliwada, Kesari Nath Buva Bhay Marg, Worli Village-400011"
        },
        {
            "location": [
                "19.00593056",
                "72.82127222"
            ],
            "address": "13, Century Quartets, P B Marg, Mahindra Towers, Worli-400008"
        },
        {
            "location": [
                "19.08031071",
                "72.85698822"
            ],
            "address": "Kalyani Niwas, Vakola, Vakola Pipe Line, Barma Bakrey, Vakola Village-400011"
        },
        {
            "location": [
                "19.07834762",
                "72.84564795"
            ],
            "address": "Shardha Sangeet, Near Shardha Sanget, Bandra East-400011"
        },
        {
            "location": [
                "19.05573488",
                "72.84233839"
            ],
            "address": "Amrut Nagar, Kherwadi, Bandra East-400008"
        },
        {
            "location": [
                "19.05833659",
                "72.84446534"
            ],
            "address": "Madina Building, Behram Pada, Bandra East-400008"
        },
        {
            "location": [
                "19.077064399999998",
                "72.84410425"
            ],
            "address": "Poonam Hair Cutting Saloon, Near Ruzunia Madarsa, Near Golibar 7Th Road, Khar Subway, Santacruz East-400008"
        },
        {
            "location": [
                "19.0625358",
                "72.85837049"
            ],
            "address": "B/803/E, Basera Soc, Bkc, Bandra East-400010"
        },
        {
            "location": [
                "19.07747606",
                "72.84585164"
            ],
            "address": "Milan Chawl, Golibar 3rd Road, Opp Indian Bank, Santacruz East-400008"
        },
        {
            "location": [
                "19.05712213",
                "72.84257841"
            ],
            "address": "Gomes Chawl, Golibar, Santacruz East-400010"
        },
        {
            "location": [
                "19.06255622",
                "72.84389300000001"
            ],
            "address": "Pathar Nagar, Bharat Nagr, Bkc, Bandra East-400011"
        },
        {
            "location": [
                "19.0796345",
                "72.84805044"
            ],
            "address": "Khalil Chawl, Saudi Nagar Gate No-1, Dowry Nagar, Vakola Bridge, Santacruz East-400010"
        },
        {
            "location": [
                "19.07444236",
                "72.84233563"
            ],
            "address": "Haji Hussain Chawl, Masjit Rd Golibar Road, Golibar, Santacruz East-400010"
        },
        {
            "location": [
                "19.0567414",
                "72.84165109999999"
            ],
            "address": "Chawl No 3 Rajak Chawl, Opp Golden Bakery, Bandra East-400008"
        },
        {
            "location": [
                "19.08701255",
                "72.84541242"
            ],
            "address": "Sra Patthar Nagar, Bharat Nagr, Bkc, Bandra (E)-400008"
        },
        {
            "location": [
                "19.0650798",
                "72.85657690000001"
            ],
            "address": "Navjeevan Chwal, Indira Nagar, Gavdevi Pipe Line, Vakola, Santacruz East-400011"
        },
        {
            "location": [
                "19.0815407",
                "72.85412495"
            ],
            "address": "Moreshwar Chwal , Waghriwada, Vakola, Santacruz East-400011"
        },
        {
            "location": [
                "19.05678056",
                "72.84175"
            ],
            "address": "Razak Chawl, Golden Bakery, Kherwadi Road, Bandra East-400011"
        },
        {
            "location": [
                "19.067725",
                "72.8456"
            ],
            "address": "Sambhaji Seva Mandal, Javhar Nagar, Khar East-400011"
        },
        {
            "location": [
                "19.06313056",
                "72.85412222"
            ],
            "address": "Dyaneshwar Nagar, Bandra East-400033"
        },
        {
            "location": [
                "19.0568",
                "72.84181944"
            ],
            "address": "chawl no. 3, Razzak chawl Opp. Golden bakery Bandra East Mumbai- 400055"
        },
        {
            "location": [
                "19.07751944",
                "72.84454722"
            ],
            "address": "Ramjeevan Chawl Near Ramakant Dairy 5th Golibar Road Santacruz East Mumbai- 400055"
        },
        {
            "location": [
                "19.13369227",
                "72.85877407"
            ],
            "address": "Premnagar, Madarsa Masjid, Fish Maket, Jogeshwari East-400055"
        },
        {
            "location": [
                "19.1391437",
                "72.85325871"
            ],
            "address": "Al Faqir Mohhmad Chwal, Francis Wad, Jogeshwari East-400055"
        },
        {
            "location": [
                "19.13219749",
                "72.85625581"
            ],
            "address": "Koliwada, Koliwada, Jog E-400055"
        },
        {
            "location": [
                "19.10794573",
                "72.8589178"
            ],
            "address": "Kurban Chawl, Infront Of Ratna Mahal Hotel, Parsiwada ,Chakala, Andheri East-400055"
        },
        {
            "location": [
                "19.13351105",
                "72.85791979999999"
            ],
            "address": "Radhabai Chawl, Jhula Maidan, Meghwadi, Jogeshwari East-400055"
        },
        {
            "location": [
                "19.12680648",
                "72.84890382"
            ],
            "address": "Damodar Chawle, Damodar Chawle, Mogra Pada, Andheri East-400055"
        },
        {
            "location": [
                "19.0912396",
                "72.8461938"
            ],
            "address": "Sai Baba Chawle, Dr Rajendra Prasad Nagar, Vile Parle East-400055"
        },
        {
            "location": [
                "19.10444257",
                "72.85880169"
            ],
            "address": "Mahatma Phule Nagar, Bamanwada, Vile Parle East-400055"
        },
        {
            "location": [
                "19.11613889",
                "72.84025"
            ],
            "address": "Add- JUNED NAGAR\tC.D BARFIWALA ROAD\tJUHU GALLI\tANDHERI WEST\t400058"
        },
        {
            "location": [
                "19.15121944",
                "72.83562778"
            ],
            "address": "Add- AADARSH CHAWL\tANAND NAGAROPPOSITE MEGA MALLJOGESHWARI WEST400102"
        },
        {
            "location": [
                "19.141975",
                "72.83720278"
            ],
            "address": "Add- DHANGARWADA\tKARNATAKA SOCEITYBEHIND MAKKA MASJIDANDHERI WEST\t400058"
        },
        {
            "location": [
                "19.10269167",
                "72.83460278"
            ],
            "address": "Add- AMBE MATA CHAWL NO 8\tNEHARU NAGAR\tVILE PARLE WEST400056"
        },
        {
            "location": [
                "19.14083695",
                "72.86139946"
            ],
            "address": "mateshwari chawl, behram baug rd, anandr nagar,jogeshwari east 400102"
        },
        {
            "location": [
                "19.121833600000002",
                "72.84127775"
            ],
            "address": "usman ali adab chawl, gaondevi dongari, andheri west- 400058"
        },
        {
            "location": [
                "19.11812737",
                "72.82231329999999"
            ],
            "address": "Elite Residentcy, Sulatana Bad, Jogeshwari West-400055"
        },
        {
            "location": [
                "19.14441114",
                "72.80577016"
            ],
            "address": "Jay Maa Shardha Chawl, V M Road No 05, Nehru Nagr, Vile Parle, Vile Parle West-400055"
        },
        {
            "location": [
                "19.095748899999997",
                "72.8372886"
            ],
            "address": "Daulat House, V P Road, Gaondevi Temple, Andheri West-400055"
        },
        {
            "location": [
                "19.115666600000004",
                "72.83984709999999"
            ],
            "address": "Gulshan Welfare Soceity, Gilbert Hill Road, Chhabil Janta Colony, Andheri West-400060"
        },
        {
            "location": [
                "19.1115408",
                "72.86801624"
            ],
            "address": "Lokseva Itihat Soc Chawl, Juhu Galli, Wireless Road, Opp Kohinoor Hotel, Andheri West-400057"
        },
        {
            "location": [
                "19.10459847",
                "72.83969093"
            ],
            "address": "Perimal Chawl, Road No 5, V M Road, Neharu Nagar, Vile Parle West-400059"
        },
        {
            "location": [
                "19.1481828",
                "72.8382859"
            ],
            "address": "Farjana Masjid, Raghwendra Mandir Road, Gulshan Nagar, Jogeshwari West-400099"
        },
        {
            "location": [
                "19.144766600000004",
                "72.8395335"
            ],
            "address": "Ram Adhar Singh Chawl, Kranti Nagar, Jogeshwari West-400099"
        },
        {
            "location": [
                "19.13105278",
                "72.84134722"
            ],
            "address": "Laxmi Welfar Society, Dhangar Wadi, Juhu Galli, Andheri West-400070"
        },
        {
            "location": [
                "19.0956354",
                "72.89471326"
            ],
            "address": "Sai Dham, Sai Dham CHS, Ghatkopar Andheri Road, Sakinaka Metro, Kurla West-400070"
        },
        {
            "location": [
                "19.06877324",
                "72.87925966"
            ],
            "address": "152Fitwala, Fitwala Compound, Pipe Road, Madarsa, Kurla West-400070"
        },
        {
            "location": [
                "19.08654118",
                "72.88280618"
            ],
            "address": "gulshan manzil, pereira wadi, st mary school, sakinaka,mumbai- 400 072"
        },
        {
            "location": [
                "19.06855085",
                "72.87485988"
            ],
            "address": "Fitwala Bldg, Pipe Road, Behind King Bakery, Kurla West-400024"
        },
        {
            "location": [
                "19.07143306",
                "72.88044628"
            ],
            "address": "Hitech Seating System, Gala No 3, Opp Peninsula Hotel,Sakinaka, Kurla W, Sakinaka Metro, Kurla West-400070"
        },
        {
            "location": [
                "19.1023426",
                "72.88829659999999"
            ],
            "address": "Sheetal Building, Cst Road, Behind Sheetal Cinema, Kurla West-400072"
        },
        {
            "location": [
                "19.09348056",
                "72.88287778"
            ],
            "address": "Unwala Compound, Kurla Andheri Road, Behind Anand Bhawan Hotel, Andheri-400070"
        },
        {
            "location": [
                "19.10352222",
                "72.889425"
            ],
            "address": "Khadi No 3, Jaffar Compound, Jaffar Compund, Sakinaka Link Road, Khadi No 3, Andheri-400072"
        },
        {
            "location": [
                "19.09174266",
                "72.88225257"
            ],
            "address": "Behind Jarimari Temple, Jarimari Temple, Kurla Andheri Road, Behind Jarimari Temple, Sakinaka-400070"
        },
        {
            "location": [
                "19.09737942",
                "72.89193117"
            ],
            "address": "Jaibunnisa Chawl, Rajiv Nagar, Kurla Andheri Road, Near Shivprabha Building, Sakinaka, Mumbai-400024"
        },
        {
            "location": [
                "19.08965556",
                "72.88833889"
            ],
            "address": "Sunder Baug, Navjivan Mandal, Lbs Marg, Navjivan Mandal, Kurla W Kamani-400072"
        },
        {
            "location": [
                "19.08385785",
                "72.88869311"
            ],
            "address": "Juri Pathak Chawl, Vijay Nagar, Kurla Andheri Road, Opp Naz Hotel, Kurla West, Mumbai-400070"
        },
        {
            "location": [
                "19.06750399",
                "72.92123974"
            ],
            "address": "Plot No 25, Ahilyabai Holkar Marg, Jaffari School, Shivaji Nagar-400043"
        },
        {
            "location": [
                "19.06481929",
                "72.92377942"
            ],
            "address": "Rd No 4,5,6, Shivaji Nagar-400043"
        },
        {
            "location": [
                "19.060979",
                "72.925627"
            ],
            "address": "Kamala Raman, G M Link, Pl No 33, Baiganwadi Rickshaw Stand-400043"
        },
        {
            "location": [
                "19.063805",
                "72.9230972"
            ],
            "address": "Bldg No 7/B, Aman Society, Natwar Parekh Compound, Shivaji Nagar Police Station, Lotus Colony-400043"
        },
        {
            "location": [
                "19.0646147",
                "72.92438059999999"
            ],
            "address": "Tata Nagar, Ekta Sahakari Mandal, Deonar Arbaitor Govandi Stn Road, Mochi Galli, Tata Nagar-400043"
        },
        {
            "location": [
                "19.05693989",
                "72.91423245"
            ],
            "address": "Nagesh Kamble Chawl, Mhantre House, Agarwadi-400043"
        },
        {
            "location": [
                "19.06243539",
                "72.90668144"
            ],
            "address": "Mahatma Phule Chawl, P L Lokhande Marg, Mahatma Phule Chawl, Chembur-400075"
        },
        {
            "location": [
                "19.03067655",
                "72.89648767"
            ],
            "address": "Laxmi Nagar, Mahul Road, Near Railway Track, Chembur-400084"
        },
        {
            "location": [
                "19.046784",
                "72.8954122"
            ],
            "address": "Rc Barrack No 25&32, Rc Barrack, Indira Nagar, Opp Red Spice Hotel, Chembur-400084"
        },
        {
            "location": [
                "19.03116877",
                "72.89623194"
            ],
            "address": "Islampura Ansari Road, Islampura, Chembur, Near Jama Masjid, Chembur-400086"
        },
        {
            "location": [
                "19.04438665",
                "72.88954492"
            ],
            "address": "Near Bmc School, Collector Colony, Shivshakti Nagar, Near Bmc School, Chembur-400077"
        },
        {
            "location": [
                "19.06033685",
                "72.8845479"
            ],
            "address": "Vatsalatai Nagar, Near Kurla Signal, Chembur, Vatsalatai Nagar, Chembur,-400086"
        },
        {
            "location": [
                "19.061279199999998",
                "72.9081843"
            ],
            "address": "Sukhshanti Chawl, P L Lokhande Marg, Mukund Nagar, Chembur-400084"
        },
        {
            "location": [
                "19.0518025",
                "72.8866238"
            ],
            "address": "Lal Dongar, Near Bmc School, Chembur, Chembur-400077"
        },
        {
            "location": [
                "19.058625",
                "72.89171944"
            ],
            "address": "Siddharth Colony, Gangubai Patole Chawl, Chembur Naka, Chembur, Chembur-400075"
        },
        {
            "location": [
                "19.09547256",
                "72.90107516"
            ],
            "address": "Basling Chawl, R B Kadam Marg, Mata Mahakali Mandir, Bhatwadi-400089"
        },
        {
            "location": [
                "19.09761839",
                "72.90351675"
            ],
            "address": "G 7, Municipal Colony, R B Kadam Marg, Near Muktabai Hospital, Bhatwadi Barvenagar-400071"
        },
        {
            "location": [
                "19.10437497",
                "72.91610808"
            ],
            "address": "Kille Shivneri Society, Ram Nagar B, Vikroli Park Site-400089"
        },
        {
            "location": [
                "19.07452553",
                "72.91376148"
            ],
            "address": "Yashodhara Chawl, Nalanda Nagar, Eastern Express Highway, Db Pawar Chowk, Ramabai Colony-400089"
        },
        {
            "location": [
                "19.099273699999998",
                "72.91670992"
            ],
            "address": "Noor Mohhamad Chawl, Road No 1, Opp Fire Brigade, Vikroli Park Site-400074"
        },
        {
            "location": [
                "19.072405399999997",
                "72.91409200000001"
            ],
            "address": "Tiranga Chawl, Galli No 105, Near Chitra Dairy, Kamraj Nagar-400074"
        },
        {
            "location": [
                "19.09033371",
                "72.8989595"
            ],
            "address": "9 Hayad Mohammad Chawl, 9 Hayad Mohammad Chawl, Shakar Chawl, Parshewadi Road, Near Kadhi Area, Parshewadi-400074"
        },
        {
            "location": [
                "19.08792222",
                "72.89837778"
            ],
            "address": "Chirag Nagar Chawl No 3 Porbandarwala Chawl, Lbs Road Opp Naval Park Gate, Near Bawdi Near Dr Anaees Clinic Chirag Nagar, Ghatkopar W-400074"
        },
        {
            "location": [
                "19.18841267",
                "72.84977677"
            ],
            "address": "Masjid Compound, Masjid Compound, Suchak Hospital, Malad East-400104"
        },
        {
            "location": [
                "19.14302763",
                "72.79245803"
            ],
            "address": "Adarsh Society , Madh Market, Adarsh Society, Shivaji Nagar, Gate No 3, Madh Market, Malad West-400104"
        },
        {
            "location": [
                "19.18816347",
                "72.82285888"
            ],
            "address": "Ncc Plot No 36, New Collector Compound, Malad West Malvani-400062"
        },
        {
            "location": [
                "19.19040006",
                "72.85752213"
            ],
            "address": "Bambude Chawl, Bambude Cahwl, Indira Nagar, Near Western Express Highway, Pushpa Park, Malad East-400062"
        },
        {
            "location": [
                "19.18744329",
                "72.86468328"
            ],
            "address": "Sainath Society, Sainath Societysantosh Nagar, Goregaon East-400065"
        },
        {
            "location": [
                "19.18497541",
                "72.82080140000001"
            ],
            "address": "Plot No 71, Gate No 7, Malwani, Malad West-400104"
        },
        {
            "location": [
                "19.18560225",
                "72.82084449"
            ],
            "address": "Ncc, Gate No 7, Malwani, Malad West-400104"
        },
        {
            "location": [
                "19.180259399999997",
                "72.86128000000001"
            ],
            "address": "Upadhyay Chawl, Near Adarsh Bhara Chawl, Sanjay Nagar, Pathanwadi, Malad East-400104"
        },
        {
            "location": [
                "19.171587",
                "72.878783"
            ],
            "address": "G Ward, Bmc Colony, Santosh Nagar, Goregaon East-400076"
        },
        {
            "location": [
                "19.17902222",
                "72.86228056"
            ],
            "address": "F G Mulla Chawl, Near Noorani Masjid, Rani Sati Marg, Pathanwadi, Malad East-400042"
        },
        {
            "location": [
                "19.18040411",
                "72.85017373"
            ],
            "address": "Hindu Dabi Chawl, Haji Bapu Road, Malad East-400078"
        },
        {
            "location": [
                "19.13867302",
                "72.85367576"
            ],
            "address": "Lakhau Letha Chawl, R No 3, Ramnagar, Bandrekarwadi, Jogeshwari East, Bandrekarwadi, Jogeshwari East-400078"
        },
        {
            "location": [
                "19.1718491",
                "72.83825470000001"
            ],
            "address": "Jai Bhavani Chawl, Prem Nagar, Hanuman Nagar, Goregaon West-400083"
        },
        {
            "location": [
                "19.24090062",
                "72.85999383"
            ],
            "address": "Valmiki Chawl (Slum), Valmiki Chawl, Dn Dubey Rd, Ambawadi, Dahisar East-400097"
        },
        {
            "location": [
                "19.25730118",
                "72.87505036"
            ],
            "address": "Padwal And Ramchandra Gurav Chawl, Babu Pednekar Road, Ketkipada, Dahisar East-400097"
        },
        {
            "location": [
                "19.25545296",
                "72.86739021"
            ],
            "address": "pasekar chawl,anand nagar, dahisar east, 400068"
        },
        {
            "location": [
                "19.19958939",
                "72.86403704"
            ],
            "address": "Lokmanya Chawl No, 2, Wadar Pada, Road No 2, Hanuman Nagar, Kandivali East, Mumabi-400097"
        },
        {
            "location": [
                "19.19049948",
                "72.85939303"
            ],
            "address": "Rukiyabai Noor Mohommad Chawl, Bandongari, Kandivali East, Mumbai-400097"
        },
        {
            "location": [
                "19.2037543",
                "72.83185211"
            ],
            "address": "Sadabahar Chawl, Azad Compound, Ram Galli, Opp Chandrika Hotel, Kandivali West-400095"
        },
        {
            "location": [
                "19.20341389",
                "72.83129444"
            ],
            "address": "Janseva Samiti, Azad Compound, Opp Chandrika Hotel, Kandivali West-400063"
        },
        {
            "location": [
                "19.19815",
                "72.82790278"
            ],
            "address": "Ekta Nagar, Galli No 07, Old Link Road, Opp Petrol Pump, Near Ashish Hotel, Kandivali West-400068"
        },
        {
            "location": [
                "19.210225",
                "72.82191111"
            ],
            "address": "Sagar Soc, Sagar Soc, Charkop Sec 2, Rsc 7, Charkop Sec 2, Kandivali West-400103"
        },
        {
            "location": [
                "19.16279007",
                "72.9311221"
            ],
            "address": "Khindipada, Vishwashanti CHS, Near Omega School, Khadan, Khindipada-400067"
        },
        {
            "location": [
                "19.12836161",
                "72.93512059"
            ],
            "address": "Neharu Nagar, Ambika Niwas, Neharu Nagar, Kanjurmarg East-400067"
        },
        {
            "location": [
                "19.12430041",
                "72.91806423"
            ],
            "address": "Chaitanya Nagar, PanCHShil Society, Opp Iit Main Gate, Chaitanya Nagar, Powai Mumbai-400067"
        },
        {
            "location": [
                "19.11577539",
                "72.93326255"
            ],
            "address": "Tagor Nagar No 8, Tagor Nagar Group No8, Tagor Nagar, Vikroli East-400067"
        },
        {
            "location": [
                "19.13608531",
                "72.93850292"
            ],
            "address": "Sai Nagar,Bhandup East, Nanda Sawant Chawl No 14, Sai Nagar, Bhandup East-400067"
        },
        {
            "location": [
                "19.16050822",
                "72.9295127"
            ],
            "address": "Khindipada, Anand Thakur Chawl, Near Shivsena Shakha, Khindipada-400067"
        },
        {
            "location": [
                "19.16344982",
                "72.93592355"
            ],
            "address": "Chawl No 1, Sai Hill Bhandup, Narayan CHS, Sai Hill, Bhandup (W)-400067"
        },
        {
            "location": [
                "19.16112526",
                "72.92957415"
            ],
            "address": "New Parivartan Society, Lbs Road, K-1, Mmrda Colony, Kanjurmarg Railway Station, Kanjurmarg (W)-400067"
        },
        {
            "location": [
                "19.14005853",
                "72.92969351"
            ],
            "address": "Ganesh Nager, Sitaram Jadhav Chawl, Behind Mangat Petrol Pump, Kaju Hill, Ganesh Nager, Bhandup(W)-400067"
        },
        {
            "location": [
                "19.16601008",
                "72.93510986"
            ],
            "address": "Rajiv Ganghi Nagar Chawl, Bhandup (W), Sonapur, Dargah Road, Rajiv Gandhi Nagar Chawl, Bhandup (W)-400067"
        },
        {
            "location": [
                "19.120140799999998",
                "72.9292663"
            ],
            "address": "Tagorenagar, Vikhroli €, Raj Mohhammad Chawl, Masjid Road No 2, Tagorenagar, Vikhroli (E)-400067"
        },
        {
            "location": [
                "19.15696111",
                "72.92876111"
            ],
            "address": "Gurav Chawl, Tembhipada, Vaghobawadi, Bhandup West-400092"
        },
        {
            "location": [
                "19.1655882",
                "72.95062668"
            ],
            "address": "Indira Nagar -3, Shakti Chawl, J N Road, Shivsena Shakha, Mulund West-400080"
        },
        {
            "location": [
                "18.91919167",
                "72.82568611"
            ],
            "address": "Garib Janata Nagar, Badhwar Park, Captain Prakash Pethe Marg, Cuffe Parade-400021"
        },
        {
            "location": [
                "18.966234399999998",
                "72.8234191"
            ],
            "address": "Mangli Kanduri Chawl, R S Nimkar Marg, Grant Road-400008"
        },
        {
            "location": [
                "18.971766600000002",
                "72.8266"
            ],
            "address": "Nayee Chawl, 3Rd Ghelabhai Lane, Mandapura-400012"
        },
        {
            "location": [
                "18.975631200000002",
                "72.8295353"
            ],
            "address": "Chawl No 14, Transist Camp, Tank Pakadi Street, Mominpura-400012"
        },
        {
            "location": [
                "18.97225833",
                "72.81301111"
            ],
            "address": "Bmc Chawl No 1, Kamthipura, 9Th Gulli, Kamthipura, Byculla-400011"
        },
        {
            "location": [
                "18.96478056",
                "72.82665278"
            ],
            "address": "Chawl, Bldg 21/23, 7Th Gully, Kamthipura, Byculla-400013"
        },
        {
            "location": [
                "19.01832222",
                "72.86669444"
            ],
            "address": "Bhaiyasaheb Nagar, 90Feet Road, Barkat Ali Naka, Wadala, Barkat Ali Naka, Wadala East-400013"
        },
        {
            "location": [
                "19.00760649",
                "72.85458911"
            ],
            "address": "Pathan Masjid Chawl, Sewree Cross Road, Pathan Masjid, Sewree-400030"
        },
        {
            "location": [
                "19.00187574",
                "72.85491316"
            ],
            "address": "Bhola Master Chawl 1/4, Bhola Master Chawl, Sewree Cross Road, Near Railway Line Gate No 6, Wadala-400030"
        },
        {
            "location": [
                "19.0034957",
                "72.8205292"
            ],
            "address": "1B D D, B D D, Gm Bhosle Marg, Worli-400037"
        },
        {
            "location": [
                "19.0185886",
                "72.81882490000001"
            ],
            "address": "Arun Prakash Sang Society, Buva Bhai Marg, Worli Village, Pin - 400030"
        },
        {
            "location": [
                "18.991418",
                "72.830998"
            ],
            "address": "Pwd Chawl, Nm Joshi Police Station, N M Joshi Marg, Delile Road, Lower Parel, Near N M Joshi Marg Police Station-400102"
        },
        {
            "location": [
                "19.01020278",
                "72.82756944"
            ],
            "address": "Siddique Mohammad Chawl, Old Prabhadevi Road, Prabhadevi-400058"
        },
        {
            "location": [
                "19.01693333",
                "72.81821389"
            ],
            "address": "Amar Sandesh Janta Colony, Amar Sandesh Janata Colony, Kesari Nath Buva Bhay Marg, Worli Village, Janata Colony-400058"
        },
        {
            "location": [
                "19.01945833",
                "72.81738611"
            ],
            "address": "Hirasheth Chawal, Worli Koliwada, Kesari Nath Buva Bhay Marg, Worli Village-400056"
        },
        {
            "location": [
                "19.02079167",
                "72.81786944"
            ],
            "address": "Vikas Lane, Worli Koliwada, Vikas Lane, Kesari Nath Buva Bhay Marg, Worli Village-400061"
        },
        {
            "location": [
                "19.020125",
                "72.81663889"
            ],
            "address": "Achanak Krida Mandal, Worli Koliwada, Kesari Nath Buva Bhay Marg, Worli Village-400008"
        },
        {
            "location": [
                "19.01098056",
                "72.81913056"
            ],
            "address": "Shivaji Nagar, Sasmira Marg, Sasmira College, Worli-400011"
        },
        {
            "location": [
                "18.98578889",
                "72.82861667"
            ],
            "address": "Ganesh Nagar, C Committee, C Committee, J R Boricha Marg, Near Arthur Road Jail, Saatrasta-400008"
        },
        {
            "location": [
                "19.0671855",
                "72.83650829999999"
            ],
            "address": "New Nirman Chawl Building, Ahmed Zakeria Nagar, Behram Pada, Bandra East-400008"
        },
        {
            "location": [
                "19.0683073",
                "72.84490140000001"
            ],
            "address": "Abdul Rasul Tailor Chawl, Jawahar Nagar, Near Sansi Wadi, Khar East-400010"
        },
        {
            "location": [
                "19.0732146",
                "72.8457858"
            ],
            "address": "Harish Chandra Viajy Khot Chawl, New Agripada, Agripada Golibar, Santacruz East-400008"
        },
        {
            "location": [
                "19.06831667",
                "72.84491111"
            ],
            "address": "Gurubaksha Punjabi Chawl, Jawahar Nagar, Sai Baba Road, Khar East-400011"
        },
        {
            "location": [
                "19.06312222",
                "72.85413889"
            ],
            "address": "Jai Ma Sharada Rahivasi Sevak, Dnyaneshwar Nagar, Nalaside, Bandra East-400011"
        },
        {
            "location": [
                "19.06057222",
                "72.84231389"
            ],
            "address": "Yunus Miyan Chawl, Navpada, Bandra East-400011"
        },
        {
            "location": [
                "19.08668611",
                "72.84411944"
            ],
            "address": "Mahakali Shivshankar Nagar, Chawl No 7, New Agripada, Santacruz East-400033"
        },
        {
            "location": [
                "19.07799167",
                "72.87481111"
            ],
            "address": "Parvez Chawl, Near Mohammadi Masjid, Shashri Nagar, Kalina, Santacruz East-400011"
        },
        {
            "location": [
                "19.08686667",
                "72.84554722"
            ],
            "address": "Gajanan Rahivasi Sangh, New Agripada, Santacruz East-400011"
        },
        {
            "location": [
                "19.06335278",
                "72.85695833"
            ],
            "address": "Pathar Nagar, Bharat Nagar, Bkc Road, Bandra East-400011"
        },
        {
            "location": [
                "19.06374878",
                "72.85659799999999"
            ],
            "address": "Plot No 8, Bharat Nagar, Bandra East-400017"
        },
        {
            "location": [
                "19.07419886",
                "72.84366332"
            ],
            "address": "Madina Masjid, Golibar, Santacruz East-400016"
        },
        {
            "location": [
                "19.10834929",
                "72.85911519"
            ],
            "address": "Kurban Chawl, Infront Of Ratna Mahal Hotel, Parsiwada ,Chakala, Andheri East-400055"
        },
        {
            "location": [
                "19.0726016",
                "72.9133536"
            ],
            "address": "Radhabai Chawl, Jhula Maidan, Meghwadi, Jogeshwari East-400055"
        },
        {
            "location": [
                "19.1262049",
                "72.84933240000001"
            ],
            "address": "Damodar Chawle, Damodar Chawle, Mogra Pada, Andheri East-400055"
        },
        {
            "location": [
                "19.1325515",
                "72.85642788"
            ],
            "address": "Koliwada, Koliwada, Jog E-400055"
        },
        {
            "location": [
                "19.192091100000003",
                "72.86622320000001"
            ],
            "address": "Jaywanti Chawl, Sarota Pada, Andheri West-400055"
        },
        {
            "location": [
                "19.13643289",
                "72.84659276"
            ],
            "address": "Manisha Building, Plot No 52, N S Road, Jvpd, Vile Parle West-400055"
        },
        {
            "location": [
                "19.10471365",
                "72.82883576"
            ],
            "address": "Ruiya Park, Jr Mhatre, Saibaba Mandir, Moragaon, Juhu-400055"
        },
        {
            "location": [
                "19.095611899999998",
                "72.83682439"
            ],
            "address": "Ramale House, Dongari Galli, Versova, Andheri West-400055"
        },
        {
            "location": [
                "19.121501000000002",
                "72.8413995"
            ],
            "address": "2/1, Haji Dawood Chawl, S V Road, Amboli, Andheri West-400093"
        },
        {
            "location": [
                "19.12460921",
                "72.84538538"
            ],
            "address": "Mhada Colony No 2, Tape Darga, Opp Wadia Highschool, Andheri West-400060"
        },
        {
            "location": [
                "19.11834167",
                "72.84248611"
            ],
            "address": "Aman Society, Juhu Galli, Near Aqusa Masjid, Andheri West-400070"
        },
        {
            "location": [
                "19.10449722",
                "72.8395"
            ],
            "address": "Manikam Chawl, Vile Parle West-400070"
        },
        {
            "location": [
                "19.06863056",
                "72.87996389"
            ],
            "address": "Hitech Seating System, Gala No 3, Opp Peninsula Hotel,Sakinaka, Kurla W, Sakinaka Metro, Kurla West-400070"
        },
        {
            "location": [
                "19.06276389",
                "72.87304722"
            ],
            "address": "Kadar Shah Chawl, 70/7, Qureshi Nagar, Masjid Road, Badi Masjisd, Kurla East-400072"
        },
        {
            "location": [
                "19.09290278",
                "72.88258333"
            ],
            "address": "Hari Masjid, Andheri Road, Juna Kabrasthan, Andheri (E)-400070"
        },
        {
            "location": [
                "19.0599",
                "72.88810278"
            ],
            "address": "Galli No 22 & 23, Thakkar Bappa Colony, Indira Nagar, Chembur-400086"
        },
        {
            "location": [
                "19.06212222",
                "72.90545556"
            ],
            "address": "Utkarsh Nagar, P L Lokhande Marg, Chembur-400086"
        },
        {
            "location": [
                "19.09076111",
                "72.90501111"
            ],
            "address": "Veer Sambhaji Chawl, Ganesh Nagar, Above Duckline, Near Saibaba Mandir, Khandoba Tekadi Vps-400071"
        },
        {
            "location": [
                "19.178345899999997",
                "72.81644859999999"
            ],
            "address": "Ncc Plot No 14, Ncc, Plot No 14, Malvani Gate No 06 , Malvani, Malad West-400104"
        },
        {
            "location": [
                "19.1893374",
                "72.81831340000001"
            ],
            "address": "Aman Ekta Chawl, Behind Pathanwadi Masjid, Rani Sati Marg, Pathanwadi, Malad East-400083"
        },
        {
            "location": [
                "19.18343078",
                "72.81842621"
            ],
            "address": "Chawl No 22, Mhb Colony, Gate No 8, Malwani, Malad West-400042"
        },
        {
            "location": [
                "19.18565833",
                "72.86441667"
            ],
            "address": "Old Ganesh Wadi, Behind St Francis School, Laxman Nagar, Malad East-400078"
        },
        {
            "location": [
                "19.17031389",
                "72.83857778"
            ],
            "address": "Zadu Galli, Prem Nagar, Unnat Nagar Road No 2, Goregaon West-400064"
        },
        {
            "location": [
                "19.15728611",
                "72.83352222"
            ],
            "address": "Zadu Galli, Prem Nagar, Unnat Nagar Road No 2, Goregaon West-400064"
        },
        {
            "location": [
                "19.17597222",
                "72.86434722"
            ],
            "address": "Devisati Vanicha Pada, Film City Road, Goregaon East, Goregaon East-400061"
        },
        {
            "location": [
                "19.257877399999998",
                "72.85204499999999"
            ],
            "address": "Snehal Chawl, Kandarpada, Kandarpada, Dahisar West-400097"
        },
        {
            "location": [
                "19.20378408",
                "72.83132615"
            ],
            "address": "Janseva Samiti, Azad Compound, Opp Chandrika Hotel, Kandivali West-400063"
        },
        {
            "location": [
                "19.20279444",
                "72.82734722"
            ],
            "address": "Deep Ganga CHSl, Neelkanth Nagar, Ganesh Nagar, Mhada Colony, Kandivali West-400103"
        },
        {
            "location": [
                "19.21404444",
                "72.83229722"
            ],
            "address": "Patil House , M G, Road, Nr Gaurav Garden, Bundar Pakhadi, Kandivali West-400103"
        },
        {
            "location": [
                "19.2051",
                "72.83074167"
            ],
            "address": "Shivshakti Chawl, Shivshakti Compound, Gandhi Nagar, Kandivali West-400068"
        },
        {
            "location": [
                "19.21427778",
                "72.82120278"
            ],
            "address": "Nandanvan CHS, Plot No 235, Charkop, Kandivali West-400101"
        },
        {
            "location": [
                "19.16526649",
                "72.93240775"
            ],
            "address": "Ganesh Nager, Sitaram Jadhav Chawl, Behind Mangat Petrol Pump, Kaju Hill, Ganesh Nager, Bhandup(W)-400067"
        },
        {
            "location": [
                "19.14012549",
                "72.93015576"
            ],
            "address": "Jitu Rai Yadav Chawl, Pratapnagar Road, Munshi Mahal, Bhandup (W)-400101"
        },
        {
            "location": [
                "19.17134177",
                "72.95345676"
            ],
            "address": "Juvekar Road, Bhandup €, Arogyasadan Society, Juvekar Road, Bhandup (E)-400067"
        },
        {
            "location": [
                "19.12486163",
                "72.91693322"
            ],
            "address": "Building No 215/8448, Kannamwar Nagar-1, Vikhroli €, Kannamwar Nagar-1, Near Gajanan Maharaj Chowk, Vikhroli (E)-400067"
        },
        {
            "location": [
                "19.12486105",
                "72.91691223"
            ],
            "address": "Tagorenagar, Vikhroli €, Raj Mohhammad Chawl, Masjid Road No 2, Tagorenagar, Vikhroli (E)-400067"
        },
        {
            "location": [
                "19.136063800000002",
                "72.93824274"
            ],
            "address": "Bhandup (E), Nav Yashodhara CHS, Udayshree Road, Bhandup (E)-400067"
        },
        {
            "location": [
                "19.1610323",
                "72.9357215"
            ],
            "address": "Neelkamal CHS, Tagorenagar, Vikhroli (E)-400101"
        },
        {
            "location": [
                "19.13997855",
                "72.93009298"
            ],
            "address": "Ganesh Nager, Sitaram Jadhav Chawl, Behind Mangat Petrol Pump, Bhandup(W)- 400078"
        },
        {
            "location": [
                "19.141375",
                "72.92383056"
            ],
            "address": "Jitu Rai Yadav Chawl, Pratapnagar Road, Munshi Mahal, Bhandup (W)-400101"
        },
        {
            "location": [
                "19.15640833",
                "72.9268"
            ],
            "address": "Priti Niwas Chawl, Maroda Hill, Tembhipada, Bhandup (W)-400067"
        },
        {
            "location": [
                "19.17076389",
                "72.87108889"
            ],
            "address": "PanCHSheel Chawl, Near Kailas Mandir, Suryanagar, Vikhroli (W)-400066"
        },
        {
            "location": [
                "19.13983056",
                "72.92569722"
            ],
            "address": "Kamble Compound, Near PanCHSheel Buddhvihar, Pratap Nagar Road, Bhandup (W)-400066"
        },
        {
            "location": [
                "19.11710556",
                "72.94157222"
            ],
            "address": "Indira Vikas Seva Sangh Chawl No 1, Kannamwar Nagar-Ii, Opp Bldg No 178, Vikhroli (E)-400092"
        },
        {
            "location": [
                "18.93452542",
                "72.83641078"
            ],
            "address": "blossoms, modi strret, opp fish market, fort Mumbai- 400001"
        },
        {
            "location": [
                "18.92156682",
                "72.83228100000001"
            ],
            "address": "Abbas bldg,b k boman behram marg,back side of taj hotel, colaba,Mumbai-400005"
        },
        {
            "location": [
                "18.9238042",
                "72.83177018"
            ],
            "address": "Munira bldg, Shahid bhagatsing road, near delhi darbar, colaba, Mumbai- 400005"
        },
        {
            "location": [
                "18.9151653",
                "72.82994599999999"
            ],
            "address": "sundernagar indu sarakikar marg near colaba market colaba 400005"
        },
        {
            "location": [
                "18.92346139",
                "72.83336606"
            ],
            "address": "Narang  house arthur bunder road near Gate way of India Colaba 400005"
        },
        {
            "location": [
                "18.93826338",
                "72.83736536"
            ],
            "address": "25,sahayog 5, Mint road opp GPO fort 400001"
        },
        {
            "location": [
                "18.91736667",
                "72.82833611"
            ],
            "address": "Add- 202, Mistry Chamber\t\tStrand Road\tNear Strand Road\tColaba400005"
        },
        {
            "location": [
                "18.91927778",
                "72.82738333"
            ],
            "address": "Add- 202, Bandus Court\t\t1st Pasta Lane\t\tColaba\t400005"
        },
        {
            "location": [
                "18.94022222",
                "72.82704722"
            ],
            "address": "Add- Birla Matoshree Quarters\tBombay Hospital Premises\tVitthaldas Thakrsi Marg\tMarine Lines\t400020"
        },
        {
            "location": [
                "18.95573966",
                "72.83465298"
            ],
            "address": "Kashmiri Manzil, J.B.Shah marg Mumbai-400003"
        },
        {
            "location": [
                "18.95233507",
                "72.83440789"
            ],
            "address": "Lucky Mansion, Mohd Ali Rd, Mumbai- 400003"
        },
        {
            "location": [
                "18.95770413",
                "72.83667874"
            ],
            "address": "AmirAli Building, Shahida Marg, Mumbai- 400009"
        },
        {
            "location": [
                "18.95403806",
                "72.83336988"
            ],
            "address": "Noor Hospital Building, Mohammed Ali Road, Mumbai-400003"
        },
        {
            "location": [
                "18.95845887",
                "72.83547542"
            ],
            "address": "Heights Nishanpada Road Mumbai- 400009"
        },
        {
            "location": [
                "18.95629258",
                "72.83564771"
            ],
            "address": "Masjid Building Nishanpada Road Mumbai- 400009"
        },
        {
            "location": [
                "18.949424899999997",
                "72.83568129999999"
            ],
            "address": "manzil, Old Bengalipura, Koliwada- 400003"
        },
        {
            "location": [
                "18.95019628",
                "72.83891489"
            ],
            "address": "hi Godown, Masjid Side Road, Masjid Bandar, Mumbai-400009"
        },
        {
            "location": [
                "18.9617046",
                "72.83455537"
            ],
            "address": "ad chamber L.N.Jadhav marg, Opp J.J. Hospital, Mumbai- 400009"
        },
        {
            "location": [
                "18.95854357",
                "72.837018"
            ],
            "address": "him ManorBuilding, SVP Rd, Dongari, Mumbai- 400009"
        },
        {
            "location": [
                "18.95371731",
                "72.83379651"
            ],
            "address": "Mansion, Tantanpura Road, Mumbai- 400003"
        },
        {
            "location": [
                "18.95971",
                "72.8331558"
            ],
            "address": "o Siddique Hospital Building, Imamwada Rd, Mumbai- 400009"
        },
        {
            "location": [
                "18.95930556",
                "72.83317222"
            ],
            "address": "Add- KGN CHS\tImamwada Road\t400009"
        },
        {
            "location": [
                "18.96211944",
                "72.83595"
            ],
            "address": "Add- Samson Apt\tRamchandra Bhatt Marg400009"
        },
        {
            "location": [
                "18.95540833",
                "72.83476944"
            ],
            "address": "Add- Nobel Tower\tZakeria Masjid Street400003"
        },
        {
            "location": [
                "18.95764932",
                "72.83151240000001"
            ],
            "address": "Makka Manzil, Nizam street, Bhendi bazar, Mumbai- 400003"
        },
        {
            "location": [
                "18.9592436",
                "72.82760318"
            ],
            "address": "Suryadarshan building, Santsena marg, second Kumbharwada, Girgaon, Mumbai-400003"
        },
        {
            "location": [
                "18.949994699999998",
                "72.8232978"
            ],
            "address": "ke building, gangaram khatriwadi thakurdwar Kalbadevi, Mumbai- 400004"
        },
        {
            "location": [
                "18.95581874",
                "72.83170594"
            ],
            "address": "os manzil Noor Bakery Ghoghari Muhalla Mumbai- 400003"
        },
        {
            "location": [
                "18.9572217",
                "72.8263977"
            ],
            "address": "mpura Masjid Charni Road East Mumbai-400003"
        },
        {
            "location": [
                "18.9592588",
                "72.82760400000001"
            ],
            "address": "Suryadarshan Building B wing Santsena marg second Kumbharwada Girgaon 400003"
        },
        {
            "location": [
                "18.95070824",
                "72.82112685"
            ],
            "address": "Md Ali Rogay Bldg Thakurdwar Road Near Saifee hospital Charni road  400004"
        },
        {
            "location": [
                "18.949316",
                "72.8292431"
            ],
            "address": "Vivek Bldg Kalbadevi road Badamwadi 400003"
        },
        {
            "location": [
                "18.95488889",
                "72.83106944"
            ],
            "address": "Add- Bldg no 123\tAli Umar street\tMarine lines\t400003"
        },
        {
            "location": [
                "18.95761667",
                "72.83215833"
            ],
            "address": "Add- Hotel delight\tI R road\tBhendi bazarMarine lines\t400003"
        },
        {
            "location": [
                "18.96086917",
                "72.80976911"
            ],
            "address": "Gopalani Najma Building, Krishna Sanghi Path, Opp A K Maidan, Gamdevi, Mumbai-400007"
        },
        {
            "location": [
                "18.95419371",
                "72.81652551"
            ],
            "address": "Hermes House, Mama Parmanand Marg, Opera House, Charni road, Mumbai-400004"
        },
        {
            "location": [
                "18.96162695",
                "72.80980515"
            ],
            "address": "Angel building, Krishna Sanghi Path, August Krankti maidan,Gamdevi. Mumbai- 400007"
        },
        {
            "location": [
                "18.96679091",
                "72.803599"
            ],
            "address": "Shreevardhan Building, Oomar Park, B D Marg, Tata garden, Grant Road, Mumbai- 400026"
        },
        {
            "location": [
                "18.94860326",
                "72.79673496"
            ],
            "address": "Alankar Building, J Mehta marg, Teen Batti, Walkeshwar, Mumbai- 400006"
        },
        {
            "location": [
                "18.95640253",
                "72.80970322"
            ],
            "address": "Suresh Bhavan, Chowpati Road, Opp Nana nani park, Malabar Hill, Mumbai-400007"
        },
        {
            "location": [
                "18.96371376",
                "72.82159692"
            ],
            "address": "Murga Giran Building, P B Marg, Kamathipura, Mumbai- 400008"
        },
        {
            "location": [
                "18.958736899999998",
                "72.81309187"
            ],
            "address": "J K Finance Tower, Gamdevi Road, Gamdevi, Mumbai- 400007"
        },
        {
            "location": [
                "18.96366311",
                "72.8207634"
            ],
            "address": "Siddhesh Deep Building, Balram Street Road, P B Marg, Grant road, Mumbai- 400006"
        },
        {
            "location": [
                "18.95345324",
                "72.80619074"
            ],
            "address": "Doshi palace, Walkeshwar road, Malabar hill, Walkeshwar, Mumbai- 400006"
        },
        {
            "location": [
                "18.9615671",
                "72.82123674"
            ],
            "address": "12th Lane Khetwadi, Mithaiwala Mansion, Grant road, Near Balwas Hotel, Khetwadi, Mumbai-400007"
        },
        {
            "location": [
                "18.96494001",
                "72.81965255"
            ],
            "address": "Kamar Building, K K Marg, Opp Navjivan society, Kamathipura, Mumbai- 400008"
        },
        {
            "location": [
                "18.96394113",
                "72.8104186"
            ],
            "address": "Spenta Tower, Forjett street, Gawalia tank, Grant Road, Mumbai- 400036"
        },
        {
            "location": [
                "18.97302991",
                "72.81515646"
            ],
            "address": "Milan Building, Tardeo Rd, AC Market, Tardeo, Mumbai-400034"
        },
        {
            "location": [
                "18.956426399999998",
                "72.81308495"
            ],
            "address": "Nemani apartment,N S patkar marg, Girgaon chowpatty, Mumbai- 400007"
        },
        {
            "location": [
                "18.96569416",
                "72.81339531"
            ],
            "address": "Bhatia Hospital, Tardeo road, Old Chikalwadi, Grant Road, Mumbai-400007"
        },
        {
            "location": [
                "18.95489672",
                "72.82240453"
            ],
            "address": "Kalyan Building, Sadashiv Cross Lane, Kandawadi, Grant Rd, Mumbai- 400007"
        },
        {
            "location": [
                "18.96845022",
                "72.82254177"
            ],
            "address": "Kailash Apartment, JBB Rd, Dalal Estate, Mumbai Central-400008"
        },
        {
            "location": [
                "18.95567678",
                "72.82030817"
            ],
            "address": "Khotachi wadi, Dhobi Ghat, Girgaon, Mumbai- 400004"
        },
        {
            "location": [
                "18.95748908",
                "72.81542731"
            ],
            "address": "Fateh Manzil, Dr.D B Marg, Opera House, Girgaon, Mumbai-400004"
        },
        {
            "location": [
                "18.95671811",
                "72.79948921"
            ],
            "address": "Priyadarshani park, L J Marg, Navshanti Nagar, Malabar Hill, Mumbai 400006"
        },
        {
            "location": [
                "18.96627255",
                "72.8126142"
            ],
            "address": "Hari Building V N Marg Gawalia Tank Grant Rd Mumbai-400007"
        },
        {
            "location": [
                "18.964810699999997",
                "72.81128709999999"
            ],
            "address": "rn House Bldg Forjett Street Grant Rd Mumbai- 400007"
        },
        {
            "location": [
                "18.964287699999996",
                "72.81579278"
            ],
            "address": "hkar Building Grant Rd Mumbai- 400007"
        },
        {
            "location": [
                "18.952394100000003",
                "72.8030381"
            ],
            "address": "Bay View Building Bay View Ridge Road Malabar Hill Malabar Hill 400006"
        },
        {
            "location": [
                "18.9512394",
                "72.80247437"
            ],
            "address": "Goenka House Walkeshwar Rd Malabar Hill Malabar Hill 400006"
        },
        {
            "location": [
                "18.9630285",
                "72.81339709999999"
            ],
            "address": "Orbit Heights Orbit Heights J D Marg Nanachowk Grant Road 400007"
        },
        {
            "location": [
                "18.973557500000002",
                "72.8087617"
            ],
            "address": "Blue Gardenia Building Pedder Road Opposite Jaslok Hospital Cumbala Hill 400026"
        },
        {
            "location": [
                "18.94819641",
                "72.79640672"
            ],
            "address": "Girnar Apartment Girnar Apartment Dungarsi Road Teen Batti Malabar Hill 400006"
        },
        {
            "location": [
                "18.9674257",
                "72.8235318"
            ],
            "address": "Orchid Enclave Orchid Enclave Bellasis Road Dalal Estate Mumbai central 400008"
        },
        {
            "location": [
                "18.97766003",
                "72.81071189"
            ],
            "address": "Hira Panna Building Hira Panna Building B D Marg Haji Ali Malabar Hill 400006"
        },
        {
            "location": [
                "18.9535107",
                "72.79739670000001"
            ],
            "address": "Hanuvant Bhuvan Hanuvant Bhuvan Napean Sea Road Navshanti Nagar Malabar Hill 400006"
        },
        {
            "location": [
                "18.96306667",
                "72.81490278"
            ],
            "address": "Add- 1803, 18th floor, Amorina Heigts CHS  ,  Bhaji galli ,Grant road (W) 400007"
        },
        {
            "location": [
                "18.97201944",
                "72.81515278"
            ],
            "address": "Add- Room No- 26, 3rd Floor, Firoza Mansion , Lamington Road Shapur Baug , Grant Road  - 400007"
        },
        {
            "location": [
                "18.97358107",
                "72.82819128"
            ],
            "address": "Shakkarwala Bldg, Baban Gully, Sankhali Street, Madanpura, Agripada, Mumbai- 400008"
        },
        {
            "location": [
                "18.976923",
                "72.83014"
            ],
            "address": "BMC Bldg, B. J, Marg, Kanjarwada,Byculla, Mumbai- 400011"
        },
        {
            "location": [
                "18.97308107",
                "72.82557268"
            ],
            "address": "Suhag Palace, Reynold Road, Opp YMCA Ground, Agripada 400011"
        },
        {
            "location": [
                "18.97688869",
                "72.82459097"
            ],
            "address": "Prabhat Building, R B Chandorkar Marg, Police Staion Agripada, Mumbai- 400011"
        },
        {
            "location": [
                "18.97464496",
                "72.82651562"
            ],
            "address": "Shirinbhai Chawl, Morland Road, Agripada Police Staion, Mumbai Central- 400008"
        },
        {
            "location": [
                "18.96733",
                "72.83910999999999"
            ],
            "address": "Shirin Manzil, Hawabai Chawl, St Merry Road, Tadwadi, Mazgaon, Mumbai-400010"
        },
        {
            "location": [
                "18.9752486",
                "72.8238218"
            ],
            "address": "hardt Hospital Dr. A. Nair Road Agripada Police Station, Mumbai - 400011"
        },
        {
            "location": [
                "18.97480981",
                "72.82624095"
            ],
            "address": "ing NO. 22 BIT Chawl Madhavrao Gangan Marg Near Fancy Market Agripada- 400011"
        },
        {
            "location": [
                "18.96908947",
                "72.82832897"
            ],
            "address": "m Buiding 3rd Ghelabhai Lane Madanpura Mumbai- 400011"
        },
        {
            "location": [
                "18.96521769",
                "72.84138128"
            ],
            "address": "Hussain Patel Marg Munna seth Compound Belveder Road, Bhandar Tekdi, Mazgaon, Mumbai - 400010"
        },
        {
            "location": [
                "18.9856305",
                "72.831377"
            ],
            "address": "ani Building (Anand Estate) N. M. Joshi Marg Chinchpokli, Mumbai 400011"
        },
        {
            "location": [
                "18.97440913",
                "72.83234188"
            ],
            "address": "l No.1 Panch Khate Chawl B. J. Marg Byculla Mumbai- 400008"
        },
        {
            "location": [
                "18.973023100000002",
                "72.8294662"
            ],
            "address": "illa Arcade Sankhali Stree huda masjid Byculla Mumbai-400008"
        },
        {
            "location": [
                "18.9634875",
                "72.8309846"
            ],
            "address": "Height Barkat Ali Virani Marg Nagpada Mumbai- 400010"
        },
        {
            "location": [
                "18.96654549",
                "72.8465063"
            ],
            "address": "ir Niwas, Brahmadev Khot Marg Mazgaon Mumbai- 400010"
        },
        {
            "location": [
                "18.9681186",
                "72.8292522"
            ],
            "address": "B Block B Block Bmc Bldg. Chandramani Buddhvihar Marg Two Tank Kamathipura 400008"
        },
        {
            "location": [
                "18.988100600000003",
                "72.8341527"
            ],
            "address": "Siddhivinayak Bldg & Shivshakti Bldg Vishnu Ganesh Pingle Marg Near aachrekar garden Chinchpokli 400011"
        },
        {
            "location": [
                "18.97686249",
                "72.8277437"
            ],
            "address": "A wing / Chawl No. 4 Building Khusnuma Apartment / BIT Chawl M A Road / M. S. Ansari Marg Kalapani Agripada 400011"
        },
        {
            "location": [
                "18.983497399999997",
                "72.83956090000001"
            ],
            "address": "Patra Chawl  Chawl Patra Chawl B. J. Marg Byculla 400008"
        },
        {
            "location": [
                "18.9658907",
                "72.8306593"
            ],
            "address": "Mustafa Manzil Building Mustafa Manzil  peerfan Street, Opp BMC School Nagpada 400008"
        },
        {
            "location": [
                "18.9780203",
                "72.82828420000001"
            ],
            "address": "Dagdi Chawal Building Dagdi chawal B.J. Marg Dagadi Chawl Dagadi Chawl 400011"
        },
        {
            "location": [
                "18.988566199999998",
                "72.83493"
            ],
            "address": "Vitthal Sadan Building Room no.26, N.M Joshi marg Byculla Stn. Buyculla 400011"
        },
        {
            "location": [
                "18.98091389",
                "72.83933889"
            ],
            "address": "Add- Heramb darashan building\tDP wadi Road\tKapreshwar mandir\tByculla\t400033"
        },
        {
            "location": [
                "18.96657222",
                "72.82949722"
            ],
            "address": "Add- Acharwala buildingUndriya street Nagpada\tNagpada\tByculla\t400008"
        },
        {
            "location": [
                "18.97483889",
                "72.82950556"
            ],
            "address": "Add- Chavhan Mension\tTank Pakadi Road\topposite Khatao Mill\tByculla\t400011"
        },
        {
            "location": [
                "18.97112778",
                "72.83051111"
            ],
            "address": "Add- Bage Usman HeightsSheikh hafizuddin marg\tBehind E ward\tByculla\t400011"
        },
        {
            "location": [
                "18.97338889",
                "72.82780833"
            ],
            "address": "Add- Bage Rabbani ApartmentMegraj sethi marg\tBadliwala charitable dispensary\tByculla\t400011"
        },
        {
            "location": [
                "18.96867537",
                "72.82908889"
            ],
            "address": "Add- Islamia Housing societyClaire road\tSaint Agnes high school\tByculla\t400011"
        },
        {
            "location": [
                "18.97191389",
                "72.83211111"
            ],
            "address": "Add- 4th floor room no. 12 byculla Khatau Makanji Spinning and Weaving Mills, Haines Road, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400008, India"
        },
        {
            "location": [
                "18.97253056",
                "72.82932222"
            ],
            "address": "Add- Merchant Building Sheik Hafizuddin Marg (Sankli Street), E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400008, India"
        },
        {
            "location": [
                "18.96689444",
                "72.84080556"
            ],
            "address": "Add- Belvedere hill St Peters School, Belvedere Road, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400009, India"
        },
        {
            "location": [
                "19.01706078",
                "72.85842755"
            ],
            "address": "Vaibhav Building, Near Wadala Bridge, Wadala (E), Mumbai-400037"
        },
        {
            "location": [
                "19.01307254",
                "72.86144911"
            ],
            "address": "Sushruta Building, MBPT Hospital, Wadala (E), Mumbai- 400037"
        },
        {
            "location": [
                "19.05176532",
                "72.86876975"
            ],
            "address": "Bhangiri Building, Manakikar marg, Near Chunabhatti Phatak, Chunabhatti West, Mumbai- 400022"
        },
        {
            "location": [
                "19.01757143",
                "72.85470573"
            ],
            "address": "Sainath Hotel, Near fish market, Wadala (W), Mumbai- 400031"
        },
        {
            "location": [
                "19.0247994",
                "72.8665497"
            ],
            "address": "Dosti orchid, Dosti Acres, Antop Hill, Wadala, Mumbai-400037"
        },
        {
            "location": [
                "19.03795161",
                "72.85956456"
            ],
            "address": "Jain Society, Road No.18, Manhar Niwas, Sion West, Mumbai- 400022"
        },
        {
            "location": [
                "19.03482734",
                "72.85716533"
            ],
            "address": "Shivaji Nagar CHS, Bhau Daji Rd,Sion West, Mumbai- 400022"
        },
        {
            "location": [
                "19.0236768",
                "72.86751985"
            ],
            "address": "Dosti Blossom, Antop Hill, Wadala East, Mumbai-400037"
        },
        {
            "location": [
                "19.025437300000004",
                "72.85979453"
            ],
            "address": "Shamala Building, Lotlikar Lane, Matunga, Mumbai- 400019"
        },
        {
            "location": [
                "19.03408418",
                "72.86449421"
            ],
            "address": "Punjabi Camp, Near Hari Mandir, Sion Koliwada, Mumbai- 400022"
        },
        {
            "location": [
                "19.01161318",
                "72.85651403"
            ],
            "address": "MBPT New Colony, Wadala (E), Mumbai- 400037"
        },
        {
            "location": [
                "19.0214422",
                "72.84822928"
            ],
            "address": "Hindu Colony, IES Raje Shivaji Vidyalay Canteen, Dadar, Mumbai- 400014"
        },
        {
            "location": [
                "19.03344768",
                "72.8593136"
            ],
            "address": "NO. 100, KRUSHNA KUNJ, OPP MANAV SEVA SANGH B A Road Sion East MUMBAI- 400022"
        },
        {
            "location": [
                "19.00764237",
                "72.85460306"
            ],
            "address": "SHARIFA MANZIL, SEWREE CROSS ROAD, BEHIND DYANESHWAR VIDYALAY, SEWAREE, MUMBAI- 400015"
        },
        {
            "location": [
                "18.9913233",
                "72.83635229999999"
            ],
            "address": "WEILLINGTON HOUSE, NEAR SUPARI BAUG, PAREL, MUMBAI- 400012"
        },
        {
            "location": [
                "19.0037055",
                "72.8546417"
            ],
            "address": "MONARCH GARDEN, R A KIDWAI ROAD, SEWREE, MUMBAI-400015"
        },
        {
            "location": [
                "19.00475323",
                "72.85423659"
            ],
            "address": "Rati Wadala, Near R A Kidwai Road,Police Station, Sewree, Mumbai- 400015"
        },
        {
            "location": [
                "19.00648138",
                "72.83909134"
            ],
            "address": "Tata Mills CHS, Parel, MUmbai-400012"
        },
        {
            "location": [
                "18.9936733",
                "72.836893"
            ],
            "address": "NARAYAN ASHRAM, GANESH GALLI ROAD, LALBAUG, PAREL, MUMBAI, 400012"
        },
        {
            "location": [
                "18.99076127",
                "72.83659406"
            ],
            "address": "SHRI GANESH NAGAR CO HOUSING SOCIETY, CHIWDA GALLI ROAD, LALBAUG, PAREL, MUMBAI-400012"
        },
        {
            "location": [
                "19.00434094",
                "72.84294172"
            ],
            "address": "Tata foothpath, Near tata hospital, Parel, Mumbai- 400012"
        },
        {
            "location": [
                "19.00512767",
                "72.83845266"
            ],
            "address": "BEST Quaters, V Shantaram Road, Gurudam Kripa Housing Society, Parel, Mumbai- 400012"
        },
        {
            "location": [
                "19.00429543",
                "72.83777707"
            ],
            "address": "BIT CHAWL, VITTHAL CHAVAN MARG, NEXT TO DAMODAR HALL, PAREL, MUMBAI- 400012"
        },
        {
            "location": [
                "18.99430915",
                "72.84475835"
            ],
            "address": "asindhu Chs Transit Camp, G D Ambekar Road Near, Monorail Poll no 11, Kalewadi, Mumbai - 400033"
        },
        {
            "location": [
                "19.00558071",
                "72.85414154"
            ],
            "address": "rashtra Housing, Board Dyaneshwar Nagar R A Kidwai Road, Sewree,Mumbai-400015"
        },
        {
            "location": [
                "19.00826371",
                "72.84678996"
            ],
            "address": "AON POLICE BLDG HEADQUARTERS,DADAR east, Mumabi-400014"
        },
        {
            "location": [
                "19.01444176",
                "72.84283576"
            ],
            "address": "BAI BUILDING,ABOVR SADHNA HOTEL,DADAR EAST, DADAR, MUMBAI - 400014"
        },
        {
            "location": [
                "19.01330763",
                "72.85211919"
            ],
            "address": "Sahkar Nagar Bldg  SAHAKAR NAGAR BLD Wadala West 400031"
        },
        {
            "location": [
                "19.0247994",
                "72.8665497"
            ],
            "address": "Dosti Orchid Flat 901, Dosti  orchid, Dosti Acres Antop Hill  Wadala 400037"
        },
        {
            "location": [
                "19.0052085",
                "72.8484762"
            ],
            "address": "A WING A WING AND B WING  MATOSHRI TOWER JER BAI WADIA ROAD BHOIWADA PAREL  400012"
        },
        {
            "location": [
                "18.99896837",
                "72.85375121"
            ],
            "address": "BDD 13 &14 SEWREE BDD SEWREE CROSS ROAD OPP. SEWREE RAILWAY STATION SEWREE 400015"
        },
        {
            "location": [
                "19.002670499999997",
                "72.8533941"
            ],
            "address": "B/13/74 MaharashSta Housing Board Maharashtra Housing Board Dyaneshwar Nagar R A Kidwai Road Sewree Sewree 400015"
        },
        {
            "location": [
                "19.0082363",
                "72.8467897"
            ],
            "address": "BUILDING NO.1 ROOM NO. 53, SECOND FLOOR NAIGAON POLICE BLDG HEADQUARTERS DADAR 400014"
        },
        {
            "location": [
                "19.014345300000002",
                "72.84283190000001"
            ],
            "address": "JANABAI BUILDING ROOM NO. 34, 3RD FLOOR ABOVR SADHNA HOTEL DADAR EAST  DADAR 400014"
        },
        {
            "location": [
                "18.98822222",
                "72.84313889"
            ],
            "address": "Add- BDLB Colony\tShrikant Hadkar MargKalachowky400033"
        },
        {
            "location": [
                "18.99978333",
                "72.83722778"
            ],
            "address": "Add- BLD NO 273 Railway Colonyrailway Colony RoadNear Central Railway Locomotive Workshop\tParel400012"
        },
        {
            "location": [
                "19.03527811",
                "72.8403386"
            ],
            "address": "Unique Heights, Opp Canossa high school, Mahim, Mumbai- 400016"
        },
        {
            "location": [
                "19.03339319",
                "72.84237938"
            ],
            "address": "Emerald, Mahim, MUmbai- 400016"
        },
        {
            "location": [
                "19.04252623",
                "72.84860047"
            ],
            "address": "Dr Baliga Nagar, jasimin mill Road, Dharavi Jasmin mill road, Dharavi, Mumbai- 400017"
        },
        {
            "location": [
                "19.0436389",
                "72.8499579"
            ],
            "address": "Vaibhav apartment, Dharavi main road, opposite Abhudaya Bank, Dharavi, Mumbai- 400017"
        },
        {
            "location": [
                "19.02315926",
                "72.83421819"
            ],
            "address": "Dinkar Apartment, behind Suryavanshi Hall, Dadar west, Mumbai- 400016"
        },
        {
            "location": [
                "19.0183772",
                "72.83765135"
            ],
            "address": "Tavade building, Krushnaji Waman Chitale path, Dadar, Mumbai- 400028"
        },
        {
            "location": [
                "19.0191525",
                "72.83784109999999"
            ],
            "address": "Soubhagya apartment, S.K. Bole Marg, Laxmi Narayan Mandir, Dadar West, Mumbai- 400028"
        },
        {
            "location": [
                "19.04185019",
                "72.84822476"
            ],
            "address": "nd bldg,Jasmin Mill road,Gasita ram factory,dharavi,Mumbai-400017"
        },
        {
            "location": [
                "18.99196791",
                "72.81775716"
            ],
            "address": "Mata ramabai ambedkar nagar, E Moses Road, Worli, Mumbai- 400018"
        },
        {
            "location": [
                "18.99528651",
                "72.82119253"
            ],
            "address": "Lokhandwala residency, L.N. Pappan Marg, Near Four seasons hotel, Worli, MUmbai- 400013"
        },
        {
            "location": [
                "19.015019",
                "72.81752900000001"
            ],
            "address": "WPC, Sir Pochkhanwala Road, Worli, Mumbai-400030"
        },
        {
            "location": [
                "19.01730156",
                "72.81922836"
            ],
            "address": "NO.25,buva bhaye marg,worli, village,Dadar,Mumbai-400030"
        },
        {
            "location": [
                "19.01749965",
                "72.82078392"
            ],
            "address": "NO 35,ADARSH NGR,buva bhaye marg,worli village,Dadar,Mumbai-400030"
        },
        {
            "location": [
                "19.01754458",
                "72.81905808"
            ],
            "address": "QTR,buva bhaye marg/worli village,Dadar,Mumbai400030"
        },
        {
            "location": [
                "18.99219662",
                "72.81810517"
            ],
            "address": "ramabai ambedkar nagar,E Moses Road,Worli,Mumbai-400018"
        },
        {
            "location": [
                "19.01040866",
                "72.82458415"
            ],
            "address": "NO 6,ADARSH NAGAR,buva bhaye marg,worli village,Dadar,Mumabi-400030"
        },
        {
            "location": [
                "19.00576667",
                "72.84571944"
            ],
            "address": "Add- 19/1390, Mamta Bldg Parel Institute Of Orthopaedic Specialities, Jerbai Wadia Marg, Bhoiwada, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400012, India"
        },
        {
            "location": [
                "19.0021861",
                "72.82187074"
            ],
            "address": "chawl no 111, SS amrutwar marg,worli, Dadar, Mubaii 400018"
        },
        {
            "location": [
                "18.99626048",
                "72.81482888"
            ],
            "address": "mari sadan blg, worli hill road, worl, Dadar, Mumbai- 400018"
        },
        {
            "location": [
                "19.00349502",
                "72.82764953"
            ],
            "address": "s Network, Kamala mill campus, lower parel, Mumbai- 400013"
        },
        {
            "location": [
                "18.98613796",
                "72.82723846"
            ],
            "address": "hivinayak building, j r boricha marg, Mahalakshi East, Mumbai-400011"
        },
        {
            "location": [
                "19.00855351",
                "72.83484827"
            ],
            "address": "a house, Elphinstone road, Elphinstone, Mumbai- 400013"
        },
        {
            "location": [
                "19.00972574",
                "72.8298011"
            ],
            "address": "hi Aasra CHS, new Prabhadevi Road, Saamna press, Prabhadevi, Mumbai400025"
        },
        {
            "location": [
                "19.01149668",
                "72.82578022"
            ],
            "address": "hadevi SRA bldg no.2 , Rajabhau Desai Marg, Prabhadevi, Mumbai-400025"
        },
        {
            "location": [
                "19.01716811",
                "72.82655399"
            ],
            "address": "d Chaya, tata press lane, Prabhadevi,Mumbai-400025"
        },
        {
            "location": [
                "19.0124593",
                "72.82846416"
            ],
            "address": "ENCLAVE ,Appa Saheb Marathe Marg , Prabhadevi, Mumbai-400025"
        },
        {
            "location": [
                "19.01239957",
                "72.83021301"
            ],
            "address": "rsh Cooperative Housing Society - Condominium complex, J A Raul Marg, Prabhadevi, Mumbai - 400025"
        },
        {
            "location": [
                "19.00000242",
                "72.8214729"
            ],
            "address": "Chawl Building No. 101, Prof NG Bansode Marg, Amrutwar Mare, BDD Chawls Worli, Worli, Mumbai 400018"
        },
        {
            "location": [
                "19.0025407",
                "72.8265301"
            ],
            "address": "world one tower world one SB marg Lower Parel 400013"
        },
        {
            "location": [
                "19.0185886",
                "72.81882490000001"
            ],
            "address": "ADARSH NAGAR buva bhaye marg worli  worli village 400030"
        },
        {
            "location": [
                "18.98527209",
                "72.82696352"
            ],
            "address": "laxmipooja c wing laxmipooja c wing laxmipooja society J R boricha marg near arthur road jail 400011"
        },
        {
            "location": [
                "18.996018600000003",
                "72.8322386"
            ],
            "address": "31/shivkrupa 1st floor S.balaji pawar marg,currey road mumbai13 shivkrupa building S,balaji pawar marg currey road currey road 400013"
        },
        {
            "location": [
                "19.0136672",
                "72.8265078"
            ],
            "address": "R.no. 2 , ground floor Charak Building Charak Building off veer Savarkar Marg beside Chavanni Maidan Prabhadevi 400025"
        },
        {
            "location": [
                "19.001171",
                "72.817256"
            ],
            "address": "BDD chawl no 101,Bansode marg near Ambedkar school  worli 400018"
        },
        {
            "location": [
                "19.01858889",
                "72.818825"
            ],
            "address": "Add- Bldg No.6 Adarsh Nagar\tKesari Nath Buva Bhay Marg\tWorli Village\t400030"
        },
        {
            "location": [
                "19.02020943",
                "72.81726813"
            ],
            "address": "Add- Bpt Qtr,Bldg No.4\tKesari Nath Buva Bhay Marg\tWorli Village400030"
        },
        {
            "location": [
                "19.01595917",
                "72.82937572"
            ],
            "address": "hi prabha Building, sayani road, Opposite Ravindra Natya Mandir, Prabhadevi, Mumbai-400025"
        },
        {
            "location": [
                "19.0769947",
                "72.86708083"
            ],
            "address": "Holy View Building, Kalina, Santacruz East, Mumbai- 400055"
        },
        {
            "location": [
                "19.07996723",
                "72.8518663"
            ],
            "address": "Dalkhaniya House, Nehru Road, Santacruz East, Mumbai- 400050"
        },
        {
            "location": [
                "19.0809177",
                "72.850521"
            ],
            "address": "Yashodhan Building, SBI Golibar, Vakola, Mumbai- 400055"
        },
        {
            "location": [
                "19.08417946",
                "72.85655348"
            ],
            "address": "Kanishka Building, CISF camp, Kalina, Santacruz East, Mumbai- 400055"
        },
        {
            "location": [
                "19.05515556",
                "72.84276389"
            ],
            "address": "Floor No 214 , Behram Nagar, Bandra East, 400055"
        },
        {
            "location": [
                "18.99535",
                "72.82621667"
            ],
            "address": "Add- 3/52 Khimji Nagji Firki, 1, Janta Industrial Estate, Senapati Bapat Marg, BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400013, India"
        },
        {
            "location": [
                "19.08574722",
                "72.84483611"
            ],
            "address": "Ravi Tambolli Chawl, Nre Agripada, Santacruz East, 400055"
        },
        {
            "location": [
                "19.05675833",
                "72.84176389"
            ],
            "address": "R/23, razam Chawl No 03, bandra east, 400055"
        },
        {
            "location": [
                "19.05524444",
                "72.83092222"
            ],
            "address": "Flat no. 9,Sankalp Siddhi ,Kher Nagar ,Bandra East - 400055"
        },
        {
            "location": [
                "19.0647",
                "72.85949722"
            ],
            "address": "Chawl No.60/926, Bharat Nagar, Bandra East - 400055"
        },
        {
            "location": [
                "19.06745",
                "72.84631944"
            ],
            "address": "Room no.3 ,Dayaram Chawl ,New Deepakwadi ,Nirmal Nagar ,Khar East - 400055"
        },
        {
            "location": [
                "19.05641111",
                "72.844125"
            ],
            "address": "Opp. Nav Nirman Chawl, Ahmed Zakeria, Bandra East-400055"
        },
        {
            "location": [
                "19.0808",
                "72.8567973"
            ],
            "address": "HM Appartment Masjid Road Vakola Masjid Vakola 400055"
        },
        {
            "location": [
                "19.06060012",
                "72.85043992"
            ],
            "address": "Govt Colony Govt colony Road Govt Colony 400050"
        },
        {
            "location": [
                "19.06058967",
                "72.85043276"
            ],
            "address": "Govt Colony Govt colony Road 0 Govt Colony 400050"
        },
        {
            "location": [
                "19.06527948",
                "72.83153812"
            ],
            "address": "Orchid Building Nargis Dutt Road Opp Dilip Kumar bunglow Bandra West Mumbai- 400050"
        },
        {
            "location": [
                "19.0618408",
                "72.82633842"
            ],
            "address": "Blooming Heights Pali Hill Road Bandra West Mumbai- 400050"
        },
        {
            "location": [
                "19.05110745",
                "72.83811031"
            ],
            "address": "Blue Flame Building S V Road Shanti Nursing Home Building - Next To Indian Oil Bandra West Mumbai- 400050"
        },
        {
            "location": [
                "19.0718671",
                "72.8318948"
            ],
            "address": "Nav Bahar Building, 15th Road, Khar West, Mumbai- 400052"
        },
        {
            "location": [
                "19.05134486",
                "72.83802131"
            ],
            "address": "Blue Flame CHS S V Road Indain oil petrol pump Bandra West Mumbai- 400050"
        },
        {
            "location": [
                "19.0680421",
                "72.8303597"
            ],
            "address": "Chinar 21st Rd, khar, Mumbai- 400050"
        },
        {
            "location": [
                "19.05463498",
                "72.83236681"
            ],
            "address": "Rose mary building, Ice Factory Lane, Off Hill Road, Trios Mall Bandra West, Mumbai- 400050"
        },
        {
            "location": [
                "19.0744892",
                "72.8369853"
            ],
            "address": "Sandeep building, 10th road, Khar West Mumbai- 400052"
        },
        {
            "location": [
                "19.07065945",
                "72.83625993"
            ],
            "address": "Hari Niwas, S V Road Next To Podar IB board school Khar West Mumbai- 400052"
        },
        {
            "location": [
                "19.05194475",
                "72.82233892"
            ],
            "address": "Vastu Building B J Road Bandra West Mumbai- 400050"
        },
        {
            "location": [
                "19.07554433",
                "72.83448866"
            ],
            "address": "Ramadevi Mansion, Sea View Building West Avenue Road Santacruz West Mumbai- 400054"
        },
        {
            "location": [
                "19.06597478",
                "72.83273244"
            ],
            "address": "Shiv Chhaya Building 14th Road Opp N M Medical Khar West MUmbai- 400052"
        },
        {
            "location": [
                "19.08453971",
                "72.83558819"
            ],
            "address": "Indrayani Bulding Juhu Road Santacruz West Mumbai- 400054"
        },
        {
            "location": [
                "19.05507717",
                "72.83742302"
            ],
            "address": "Zarina CHS S V Road Opp H P Petrol Pump & Jama Masjid Bandra West Mumbai- 400050"
        },
        {
            "location": [
                "19.05430542",
                "72.83356767"
            ],
            "address": "al wala bldg,opp fish market bazar road,bandra west, Mumbai - 400050"
        },
        {
            "location": [
                "19.09952416",
                "72.85036051"
            ],
            "address": "Harish Society Hosstel Dixit Road Behind Sathey Collage Vile Parle East Mumbai- 400057"
        },
        {
            "location": [
                "19.11987853",
                "72.85333609"
            ],
            "address": "Suhana Building In Front Of Kamgar Kalyan Kendra Gundavali Andheri East Mumbai- 400069"
        },
        {
            "location": [
                "19.10846073",
                "72.84741959"
            ],
            "address": "Durvankur Society Shahaji Raje Road Vile Parle East Mumbai- 400057"
        },
        {
            "location": [
                "19.12869021",
                "72.86779608"
            ],
            "address": "Guru Arjun Dev CHS Mahakali Caves Road Bindra Complex Andheri East Mumbai- 400093"
        },
        {
            "location": [
                "19.0940131",
                "72.8443921"
            ],
            "address": "Padmavati Azad Road Vile Parle East Mumbai- 400057"
        },
        {
            "location": [
                "19.09573516",
                "72.84659697"
            ],
            "address": "Shivshakti shraddhanand road vileparle east Mumbai- 400057"
        },
        {
            "location": [
                "19.1179997",
                "72.87803740000001"
            ],
            "address": "A wing Sevenhills hospital residential quarters Marol Maroshi Road Andheri East Mumbai- 400059"
        },
        {
            "location": [
                "19.09393494",
                "72.84485484"
            ],
            "address": "HOSTEL NO 2 HILL VIEW APARTMENT N. P. Thakkar Road VILEPARLE EAST MUMBAI- 400057"
        },
        {
            "location": [
                "19.0964137",
                "72.8491605"
            ],
            "address": "VISHNU VILLA NARIMAN ROAD VILEPARLE EAST MUMBAI- 400057"
        },
        {
            "location": [
                "19.13483349",
                "72.86007485"
            ],
            "address": "han-E -Madina Masjid, Shani Maharaj Mandir Road, Prem Nagar, Jogeshwari East, Mumbai - 400060"
        },
        {
            "location": [
                "19.12611395",
                "72.84809109999999"
            ],
            "address": "khan Chawl, Mogra Pada, Endheri East, Mumbai - 400069"
        },
        {
            "location": [
                "19.10544489",
                "72.86005493"
            ],
            "address": "tma Kabir Nagar, Bamanwada, Andheri East, Mumbai - 400099"
        },
        {
            "location": [
                "19.12565764",
                "72.88388968"
            ],
            "address": "Marol Police Camp, Marol Maroshi Road, Customs Colony, Marol, Andheri East, Mumbai - 400059"
        },
        {
            "location": [
                "19.13468056",
                "72.85989167"
            ],
            "address": "C-13/183  , PREM NAGAR  , MASJID THAKUR MAIDAN, COMMUNIST PARTY GALLI, Jogeshwari East - 400060"
        },
        {
            "location": [
                "19.09795833",
                "72.85079444"
            ],
            "address": "Room no 60 , Shastri nagar, Aliyavar Jung marg , Vile parle East - 400050"
        },
        {
            "location": [
                "19.10656389",
                "72.86858889"
            ],
            "address": "Kadamwadi, Marol Pipeline , Andheri Kurla - 400059"
        },
        {
            "location": [
                "19.11530833",
                "72.85383611"
            ],
            "address": "Govind Wadi, Behind Darpan Talkies, Chakala , Andheri East - 400093"
        },
        {
            "location": [
                "19.11156111",
                "72.84957778"
            ],
            "address": "6/609, Building no. 3 , Tirupati Balaj, Sahar Rd, Saiwad, Andheri East - 400069"
        },
        {
            "location": [
                "19.12399184",
                "72.85027038"
            ],
            "address": "Room 3 , Sitaram Mithai Wala Chawl, Mogra Pada Andheri East - 400069"
        },
        {
            "location": [
                "19.10033611",
                "72.84599167"
            ],
            "address": "16 A, Fernandes Street , Tejpal Road, Vile Parle East - 400057"
        },
        {
            "location": [
                "19.14522778",
                "72.84733889"
            ],
            "address": "405- B, AQUA Cooperative Society,  BUILDING NO.18 , AMRUT NAGAR, JOGESHWARI WEST - 400102"
        },
        {
            "location": [
                "19.1288848",
                "72.831797"
            ],
            "address": "TITANIUM TOWER SAHAKAR NAGAR NEAR APNA BAZAR ANDHERI WEST MUMBAI- 400058"
        },
        {
            "location": [
                "19.129388199999998",
                "72.84720899999999"
            ],
            "address": "CAMPZ SRA S V ROAD AMBOLI ANDHERI WEST MUMBAI- 400058"
        },
        {
            "location": [
                "19.10161069",
                "72.84290127"
            ],
            "address": "NIVANT CHS BAJAJ ROAD VILE PARLE WEST MUMBAI-400056"
        },
        {
            "location": [
                "19.139436",
                "72.830467"
            ],
            "address": "ROYAL CLASSIC NEW LINK ROAD ANDHERI WEST MUMBAI-400058"
        },
        {
            "location": [
                "19.129358800000002",
                "72.8279345"
            ],
            "address": "WESTERN HEIGHTS J P ROAD ANDHERI WEST MUMBAI- 400058"
        },
        {
            "location": [
                "19.1315241",
                "72.8373753"
            ],
            "address": "MINUMEENAR BLDG OFF VEERA DESAI ROAD ANDHERI WEST MUMBAI- 400058"
        },
        {
            "location": [
                "19.124774",
                "72.840735"
            ],
            "address": "New heritage Near Collector Office Andheri West Mumbai- 400058"
        },
        {
            "location": [
                "19.10598257",
                "72.83092713"
            ],
            "address": "SHAGUN BLDG , N.S ROAD NO.9 JUHU VILLE PARLE WEST MUMBAI- 400056"
        },
        {
            "location": [
                "19.11367848",
                "72.83754003"
            ],
            "address": "Junaid Nagar C D Burfiwala Road, Andheri West Mumbai-400058"
        },
        {
            "location": [
                "19.11439161",
                "72.82710781"
            ],
            "address": "Dev Park, Chandan Cinema , Juhu, MUmbai- 400049"
        },
        {
            "location": [
                "19.11791969",
                "72.84025907"
            ],
            "address": "Manisha Building Plot No 52 N S Road JVPD VILE PARLE WEST MUMBAI- 400056"
        },
        {
            "location": [
                "19.144114399999996",
                "72.83854609999999"
            ],
            "address": "ELITE RESIDENTCE SULATANA BEHRAM BAUG JOGESHWARI WEST MUMBAI- 400102"
        },
        {
            "location": [
                "19.12838532",
                "72.83359827"
            ],
            "address": "MHADA COLONY NO 2 TAPE DARGA OPP WADIA HIGHSCHOOL ANDHERI WESTMUMBAI- 400053"
        },
        {
            "location": [
                "19.09585168",
                "72.84014427"
            ],
            "address": "NANAWATI HOSPITAL, VILEPARLE WEST, MUMBAI- 400056"
        },
        {
            "location": [
                "19.14139897",
                "72.80671912"
            ],
            "address": "THOMAS APPARTMENT OPP.NATRAJ BUILDING, VERSOVA ANDHERI WEST MUMBAI-400061"
        },
        {
            "location": [
                "19.144801",
                "72.840761"
            ],
            "address": "KHATIZA HIGHTECH TOWER BEHRAM BAUG ROAD JOG FISH MARKET JOGESHWARI WEST MUMBAI- 400102"
        },
        {
            "location": [
                "19.12693998",
                "72.82494255"
            ],
            "address": "KANWAL BLDG FOUR BUNGLOWS OPP FISH MARKET ANDHERI WEST MUMBAI- 400058"
        },
        {
            "location": [
                "19.119205800000003",
                "72.84328590000001"
            ],
            "address": "OM VIRAJ BLDG PALIRAM ROAD NEAR K WEST WARD ANDHERI WEST MUMBAI-400058"
        },
        {
            "location": [
                "19.13682455",
                "72.83005508"
            ],
            "address": "RED ROSE, RAVIRAJ COMPLEX OFF NEW ROAD NEXT TO LAXMI INDUSTRIAL ISTATE ANDHERI WEST MUMBAI- 400058"
        },
        {
            "location": [
                "19.14073707",
                "72.83404672"
            ],
            "address": "DHEERAJ GAURAV HEIGHTS NEAR INFINITY MALL ANDHERI WEST MUMBAI- 400058"
        },
        {
            "location": [
                "19.14232417",
                "72.84083679"
            ],
            "address": "er Soil CHS - Housing society, Raj Nagar, Jogeshwari, Mumbai - 400102"
        },
        {
            "location": [
                "19.12030673",
                "72.84589908"
            ],
            "address": "adia Dispensary - Doctor SV Road, Railway Colony, Andheri West, Mumbai - 400058"
        },
        {
            "location": [
                "19.14381432",
                "72.84215648"
            ],
            "address": "brothers, Behram Baug Road, Raj Nagar, Gautam Nagar, Jogeshwari, Mumbai - 400102"
        },
        {
            "location": [
                "19.15212217",
                "72.82802752"
            ],
            "address": "HAD BUILIDING, MILLAT NAGAR,JOGESHWARI WEST,400102"
        },
        {
            "location": [
                "19.14139618",
                "72.83570767"
            ],
            "address": "shine Cosmic - Apartment building, Behram Baug, Andheri West, Mumbai 400053"
        },
        {
            "location": [
                "19.10940817",
                "72.8301348"
            ],
            "address": "QUARTER, JUHU ROAD, MAKER KUNDAN GARDE< SANTACRUZ WEST, MUMBAI - 400049"
        },
        {
            "location": [
                "19.11916667",
                "72.83925"
            ],
            "address": "Add- SAGAR BUILDING SRA\tV.P Road Andheri West400058"
        },
        {
            "location": [
                "19.13577778",
                "72.82148056"
            ],
            "address": "Add- SHREE DARSHAN BUILDINGS.V.P MHADA\tVERSOVA TELEPHONE EXCHANGE\tANDHERI WEST\t400053"
        },
        {
            "location": [
                "19.12401389",
                "72.82595556"
            ],
            "address": "Add- SEEMA BUILDING\tN.DATTA MARG\tFOUR BUNGLOW\tANDHERI WEST\t400053"
        },
        {
            "location": [
                "19.11036944",
                "72.83023056"
            ],
            "address": "Add- D.C HOUSE10TH ROAD\tJVPD , JUHU\tANDHERI WEST\t400049"
        },
        {
            "location": [
                "19.13705556",
                "72.81655278"
            ],
            "address": "Add- HIBISCUSNEW FISHERIES ROAD7 BUNGLOWSANDHERI WEST\t400061"
        },
        {
            "location": [
                "19.084480199999998",
                "72.88669257"
            ],
            "address": "GULAB SHAH ESTATE LBS MARG OPP DELUX HOTEL KURLA WEST MUMBAI- 400070"
        },
        {
            "location": [
                "19.0689078",
                "72.88148879999999"
            ],
            "address": "TAYBAH APARTMENT KHAN ABDUL MASJID ROAD, BRAHMANWADI KURLA WEST MUMBAI - 400070"
        },
        {
            "location": [
                "19.070438600000003",
                "72.8802907"
            ],
            "address": "REGAL HOUSE BLDG PIPE LINE MARKAZ MASJID BUDDHA COLONY MUMBAI-400070"
        },
        {
            "location": [
                "19.07624797",
                "72.87818323"
            ],
            "address": "PRANAM HOUSING SOCIETY ANNASAGAR MARG 192 KURLA CST ROAD BEHIND NOOR HOSPITAL MATCH FACTORY MUMBAI- 400070"
        },
        {
            "location": [
                "19.06792045",
                "72.88102301"
            ],
            "address": "IMTIAZ BUILDING SHAMI COMPOUND BRAHMANWADI KALLU MUTTON SHOP KURLA WEST MUMBAI- 400070"
        },
        {
            "location": [
                "19.07724123",
                "72.88068201"
            ],
            "address": "IMAN BLDG,  NEW MILL ROAD, Mehboobi Sulemani Masjit, Near Gandhi Maidan, Kurla West - 400070"
        },
        {
            "location": [
                "19.06845953",
                "72.87994922"
            ],
            "address": "ALA BLDG, PIPE ROAD ,KURLA WEST, Mumbai-400070"
        },
        {
            "location": [
                "19.07045983",
                "72.88440877"
            ],
            "address": "rak Complex, LIG Colony, Vinobha Bhave Nagar, Kurla West, Kurla, Mumbai - 400070"
        },
        {
            "location": [
                "19.08335845",
                "72.88161523"
            ],
            "address": "FLOOR SHEETAL APT CST Road, Behind Shital Cinema, Kurla West, Mumbai - 400070"
        },
        {
            "location": [
                "19.07038889",
                "72.87995556"
            ],
            "address": "R NO 72 , REGAL HOUSE BLDG , PIPE LINE, MARKAZ MASJID, BUDDHA COLONY - 400070"
        },
        {
            "location": [
                "19.07611944",
                "72.87888611"
            ],
            "address": "R NO 3 ,PRANAM HOUSING SOCEITY BLDG ,ANNASAGAR MARG,192 KURLA CST ROAD ,BEHIND NOOR HOSPITAL ,MATCH FACTORY-400070"
        },
        {
            "location": [
                "19.07444722",
                "72.88048056"
            ],
            "address": "35 IMTIAZ BUILDING, SHAMI COMPOUND , BRAHMANWADI KALLU MUTTON SHOP , KURLA WEST - 400070"
        },
        {
            "location": [
                "19.06330898",
                "72.91688352"
            ],
            "address": "NATWAR PAREKH COMPOUND SHIVAJI NAGAR POLICE STATION MUMBAI- 400043"
        },
        {
            "location": [
                "19.0519766",
                "72.92671793"
            ],
            "address": "HIRANANDANI LALLUBHAI, LALLUBHAI POLICE STATION GOVANDI MUMBAI- 400043"
        },
        {
            "location": [
                "19.06673682",
                "72.9187473"
            ],
            "address": "SOCIETY, G.M LINK , Shivaji Nagar Police Station, Lotus Colony, Mumbai - 400043"
        },
        {
            "location": [
                "19.06853524",
                "72.89801372"
            ],
            "address": "Tilak Nagar Colony, Tilak Nagar, Chembur Mumbai- 400089"
        },
        {
            "location": [
                "19.05924055",
                "72.90605517"
            ],
            "address": "Building No. 22 near bhau pradhan maidan, subhash nagar, Chembur, Mumbai 400070"
        },
        {
            "location": [
                "19.068388199999998",
                "72.90118934"
            ],
            "address": "Amarkunj Society, Pestam Sagar Road No.2, Chembur Mumbai- 400089"
        },
        {
            "location": [
                "19.0623134",
                "72.9023659"
            ],
            "address": "Siddharth Residency, P.Y.Thorat Marg, Chembur, Mumbai- 400089"
        },
        {
            "location": [
                "19.05840073",
                "72.90080284"
            ],
            "address": "sanket apartment,14 th road,near ambedkar Garden Chembur Mumbai- 400071"
        },
        {
            "location": [
                "19.05255825",
                "72.91082055"
            ],
            "address": "Goldcrest Building W.T. Patil Marg amar cinema Chembur Mumbai- 400071"
        },
        {
            "location": [
                "19.046714",
                "72.8952621"
            ],
            "address": "Barrack no.25&32, Indira Nagar, Opp. Red Spice Hotel, Chembur Mumbai- 400071"
        },
        {
            "location": [
                "19.068089899999997",
                "72.89449590000001"
            ],
            "address": "Building No.73 Gangotri Building Tansa Pipe Line Road Gangotri Building Chembur- 400071"
        },
        {
            "location": [
                "19.07056667",
                "72.88114167"
            ],
            "address": "C/205 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
        },
        {
            "location": [
                "19.06301389",
                "72.88560278"
            ],
            "address": "R NO 302 3RD FLOOR Shree Harishwar Marg, Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
        },
        {
            "location": [
                "19.07038056",
                "72.88439722"
            ],
            "address": "101 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
        },
        {
            "location": [
                "19.08418333",
                "72.87963056"
            ],
            "address": "12/412 Jarimari, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
        },
        {
            "location": [
                "19.07345278",
                "72.88125833"
            ],
            "address": "R NO 14 Pipe Line Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
        },
        {
            "location": [
                "19.08295833",
                "72.8816"
            ],
            "address": "A/102 Bhakti Vilas Apartment, 214/1-8, Magan Nathuram Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
        },
        {
            "location": [
                "19.06842222",
                "72.87994444"
            ],
            "address": "157 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
        },
        {
            "location": [
                "19.05531389",
                "72.87068889"
            ],
            "address": "Room no. 1708 Reliance Industries Ltd, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 022, India"
        },
        {
            "location": [
                "19.07719167",
                "72.88201389"
            ],
            "address": "ROOM NO 3 Pipe Line Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
        },
        {
            "location": [
                "19.04677011",
                "72.89344833"
            ],
            "address": "Inlak Hospital C.G. Road Inlak Hospital Chembur 400071"
        },
        {
            "location": [
                "19.05734167",
                "72.89060833"
            ],
            "address": "Add- Ajinkyatara Chs\tSwastik Park\tCST Road\tInside Sarvoday Nagar Soc.\tNear Kurla Signal\tChembur\t400071"
        },
        {
            "location": [
                "19.08515915",
                "72.91089749"
            ],
            "address": "Neelkanth, R N Marg, Opposite Tea Villa, Pant Nagar, Mumbai- 400075"
        },
        {
            "location": [
                "19.0753888",
                "72.9124205"
            ],
            "address": "Parasnath Building Sudha Park Near Railway Police ground Garodia Nagar Mumbai-400075"
        },
        {
            "location": [
                "19.19091585",
                "72.85697813"
            ],
            "address": "Oscar Apartment, Pushpa park, Malad east, Mumbai- 400097"
        },
        {
            "location": [
                "19.19852462",
                "72.83819434"
            ],
            "address": "Maxmay Building, tank road, orlem,Malad West , Mumbai- 400064"
        },
        {
            "location": [
                "19.1843467",
                "72.85297987"
            ],
            "address": "Raheja park sanjivani hospital Malad east Mumbai- 400097"
        },
        {
            "location": [
                "19.16840665",
                "72.88072014"
            ],
            "address": "Lilly building Mantri park, Dindoshi Malad East Mumbai- 400097"
        },
        {
            "location": [
                "19.1904167",
                "72.844786"
            ],
            "address": "Shivram Apartment , Ramchandra Lane Ramchandra Lane Malad west Mumbai- 400064"
        },
        {
            "location": [
                "19.18015358",
                "72.86128103"
            ],
            "address": "Bahist Apartment , Near Bahji Market, Pathanwadi Malad east Mumbai- 400097"
        },
        {
            "location": [
                "19.1913067",
                "72.85477879999999"
            ],
            "address": "Abhijit Indavan Complex Datta Mandir Road Malad East Mumbai- 400097"
        },
        {
            "location": [
                "19.17983885",
                "72.86365681"
            ],
            "address": "HUMERA PARK RANISATI MARG , PATHANWADI Malad East, Mumbai-400097"
        },
        {
            "location": [
                "19.18579722",
                "72.81902509"
            ],
            "address": "Vaishali Apartment, MHADA Malwani Malad West Mumbai-400095"
        },
        {
            "location": [
                "19.1868259",
                "72.8324187"
            ],
            "address": "Interface heights link road Behind D mart Malad West Mumbai- 400064"
        },
        {
            "location": [
                "19.1951742",
                "72.84173630000001"
            ],
            "address": "Farm manor Apartment Adarsh complex Malad West Mumbai-400064"
        },
        {
            "location": [
                "19.19700349",
                "72.82162947"
            ],
            "address": "iri Building, Oppo ST Paul School ,Malvani Gate No, Malvani,Malad west, Mumbai-400095"
        },
        {
            "location": [
                "19.176247699999998",
                "72.86790399"
            ],
            "address": "ay Gandhi Nagar, Dindoshi Court, Malad East, Mumbai 400097"
        },
        {
            "location": [
                "19.18583056",
                "72.84183889"
            ],
            "address": "402, Dhavalgiri Building, Near Sonali Plaza, Liberty Garden , Malad west  - 400095"
        },
        {
            "location": [
                "19.18166944",
                "72.84060833"
            ],
            "address": "A/601, SOLITAIRE STAR , NEAR DATTA MANDIR , SOMWARI BAZAR, MALAD WEST  -400064"
        },
        {
            "location": [
                "19.18349722",
                "72.860225"
            ],
            "address": "OMKAR SRA BUILDING , SANTOSH NAGAR  , DINDOSHI, MALAD EAST- 400097"
        },
        {
            "location": [
                "19.17396857",
                "72.84630525"
            ],
            "address": "A. K. Tower S V Road Opp. DHS Goregaon West Mumbai-400104"
        },
        {
            "location": [
                "19.1459147",
                "72.85743459999999"
            ],
            "address": "Hill view Near Western express Highway bimbisar nagar, goregaon East Mumbai-400065"
        },
        {
            "location": [
                "19.1743819",
                "72.8536734"
            ],
            "address": "kailash ram krupa kale bldg, Upper govind nagar, Mumbai- 400065"
        },
        {
            "location": [
                "19.06534167",
                "72.90718333"
            ],
            "address": "Add- Topaz Building Rahul Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400044, India"
        },
        {
            "location": [
                "19.07239722",
                "72.90846111"
            ],
            "address": "Add- R,510 , Bldg 21, Vallabh Baug lane, Ramabai Sahakar Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
        },
        {
            "location": [
                "19.08761389",
                "72.90238056"
            ],
            "address": "Add- Sindhi Chawl LBS Marg, Sunder Baug, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
        },
        {
            "location": [
                "19.178875",
                "72.86304444"
            ],
            "address": "Add- Room No 107 Pathanwadi Road, P/N Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400097, India"
        },
        {
            "location": [
                "19.176124100000003",
                "72.84443979999999"
            ],
            "address": "Deep Sadan Building SV road Sunder nagar Goregaon Mumbai- 400064"
        },
        {
            "location": [
                "19.1704516",
                "72.84311890000001"
            ],
            "address": "OFF OPP. to Patel Petrol Pump ?????? ????????? ????? Goregaon West Mumbai-400062"
        },
        {
            "location": [
                "19.15757854",
                "72.83750159"
            ],
            "address": "Ganesh Maidan Motilal nagar no. 2 Goregaon West Mumbai- 400104"
        },
        {
            "location": [
                "19.163212100000003",
                "72.8350438"
            ],
            "address": "prathana hospital bldg, mg road behind kokan kinara hotel Goregaon Wesrt Mumbai- 400104"
        },
        {
            "location": [
                "19.1591",
                "72.847602"
            ],
            "address": "Swastik Residency road no 2 jawahar nagar Goregaon West Mumbai- 400104"
        },
        {
            "location": [
                "19.15724889",
                "72.83307611"
            ],
            "address": "masjid galli bhagat singh nagar no 1 near tayeba masjir Goregaon West Mumbai-400104"
        },
        {
            "location": [
                "19.1606655",
                "72.8487144"
            ],
            "address": "8 Jawahar Nagar Road No. 8 Opposite Bank of Baroda Goregaon West Mumbai- 400104"
        },
        {
            "location": [
                "19.161441",
                "72.8341465"
            ],
            "address": "s Building Laxmi nagarGoregaon West Mumbai- 400104"
        },
        {
            "location": [
                "19.15668789",
                "72.84568019"
            ],
            "address": "ng kumud nagar SV road Goregaon West Mumbai- 400062"
        },
        {
            "location": [
                "19.16321944",
                "72.83446944"
            ],
            "address": "Room no 615 R8, Millat society, Ram Mandir, Goregaon west - 400104"
        },
        {
            "location": [
                "19.15335",
                "72.88556944"
            ],
            "address": "19, Royal Palm, Goregaon east - 400065"
        },
        {
            "location": [
                "19.16593611",
                "72.85233611"
            ],
            "address": "Add- Sahyadri building\tAarey Road\tPeru baug\tNear Pritam Fast Food\tGoregaon East\t400087"
        },
        {
            "location": [
                "19.23158763",
                "72.83848845"
            ],
            "address": "Building no.5 MHB colony Old MHB Gorai Rd Borivali West Mumbai-400092"
        },
        {
            "location": [
                "19.23692269",
                "72.84220703"
            ],
            "address": "Police quarters,Yogi Nagar, Borivali west- 400092"
        },
        {
            "location": [
                "19.23250838",
                "72.86004746"
            ],
            "address": "Siddhivinayak, Sukarwadi, Borivali west- 400092"
        },
        {
            "location": [
                "19.23038187",
                "72.82724672"
            ],
            "address": "Yogeshwar CHS Plot no 40, Gorai 2, Pepsi Ground, Borivali west- 400092"
        },
        {
            "location": [
                "19.24486718",
                "72.84953588"
            ],
            "address": "Raj Flodio , I C Colony, Borivali West- 400103"
        },
        {
            "location": [
                "19.24896702",
                "72.85039502"
            ],
            "address": "Hill crest, Holy cross road, Thomas church, IC colony, Borivali west-400103"
        },
        {
            "location": [
                "19.24373489",
                "72.84790500000001"
            ],
            "address": "Haven LIC Colony Boriwali west Mumbai- 400103"
        },
        {
            "location": [
                "19.19378279",
                "72.85883772"
            ],
            "address": "Sunshine Society, Datta Mandir Road, Kandivali East- 400101"
        },
        {
            "location": [
                "19.2005778",
                "72.8680722"
            ],
            "address": "Acme Oasis ,Akurli Road, opp. Mahindra & Mahindra, Kandivali East, Mumbai, 400101"
        },
        {
            "location": [
                "19.20736034",
                "72.81977715"
            ],
            "address": "Tirumala Krupa, Kandivali, Charkop, Charkop Gaon, Kandivali West, Mumbai, 400067"
        },
        {
            "location": [
                "19.22093333",
                "72.86094167"
            ],
            "address": "Add- 1 Dattapada Road, R/C Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400066, India"
        },
        {
            "location": [
                "19.2103657",
                "72.86568642"
            ],
            "address": "Videocon Tower, Kandivali East, Mumbai, 400101"
        },
        {
            "location": [
                "19.19827942",
                "72.85432179"
            ],
            "address": "Kalpataru Garden Chs, Rajguru Flyover, Kandivali, Ashok Nagar, Kandivali East, Mumbai, 400101"
        },
        {
            "location": [
                "19.21161666",
                "72.84251673"
            ],
            "address": "Ronak Arcade, S V Road, Opposite Telehpone Exchange, Kandiwali West- 400067"
        },
        {
            "location": [
                "19.21132252",
                "72.87329464"
            ],
            "address": "EMP Bldg no.49, Thakur Village, Kandiwali West, 400101"
        },
        {
            "location": [
                "19.19821809",
                "72.85702182"
            ],
            "address": "Amrut kanchan Society, Ashok nagar, Kandivali East- 400101"
        },
        {
            "location": [
                "19.21301532",
                "72.84150095"
            ],
            "address": "Raj Arcade, Mahavir Nagar, Kandivali West- 400067"
        },
        {
            "location": [
                "19.21185534",
                "72.85164186"
            ],
            "address": "Silver Avenue,Julekabai Chandu Chawl, Kandivali West- 400067"
        },
        {
            "location": [
                "19.19505911",
                "72.86733716"
            ],
            "address": "Sagar Society SRA,Hanuman Nagar,Nr. Ayyappa Mandir,Kandivali East, Mumbai-400101"
        },
        {
            "location": [
                "19.20141879",
                "72.84210039"
            ],
            "address": "Dharamveer chs,iraniwadi road no.3,kandivali west- 400067"
        },
        {
            "location": [
                "19.21648886",
                "72.84569677"
            ],
            "address": "J3 Block no.3, Mahavir Nagar, Kandivali West, 400067"
        },
        {
            "location": [
                "19.2066165",
                "72.85040409999999"
            ],
            "address": "Ladiwala Bhavan, kandivali west, 400067"
        },
        {
            "location": [
                "19.21211643",
                "72.84074747"
            ],
            "address": "mi residency, mahavir nagar,ekta nagar Kandivali West Mumbai- 400067"
        },
        {
            "location": [
                "19.20169804",
                "72.82654635"
            ],
            "address": "no14 Ekta Nagar Mhada Kandivali West- 400067"
        },
        {
            "location": [
                "19.20050556",
                "72.84860278"
            ],
            "address": "1 , Shubhashish Building nearby 2 buildings , Parekh lane, Near badshah Residency, s.v road, kandivali west - 400067"
        },
        {
            "location": [
                "19.20198333",
                "72.82565556"
            ],
            "address": "Room No 104, Bldg 31 Ekta nagar, MHADA Kandivali West - 400067"
        },
        {
            "location": [
                "19.12302909",
                "72.91637099"
            ],
            "address": "Divine CHS,Behind Tirandaz School, Powai- 400076"
        },
        {
            "location": [
                "19.12167399",
                "72.93912896"
            ],
            "address": "MHADA Building, Vikhroli East- 400083"
        },
        {
            "location": [
                "19.14474627",
                "72.93294868"
            ],
            "address": "Samruddhi Gardens Society, LBS Road,Bhandup West-400078"
        },
        {
            "location": [
                "19.14959293",
                "72.94582137"
            ],
            "address": "Arogyasadan Society, Juvekar Road, Bhandup East- 400042"
        },
        {
            "location": [
                "19.14829666",
                "72.9446587"
            ],
            "address": "Yashodhara CHS Udayshree RoadBhandup (E) Mumbai- 400042"
        },
        {
            "location": [
                "19.128406",
                "72.9252541"
            ],
            "address": "Parivartan Society LBS Road K-1, MMRDA Colony, Kanjurmarg Railway Station Mumbai-400079"
        },
        {
            "location": [
                "19.20827467",
                "72.83231697"
            ],
            "address": "PARK ROYAL CHS , OFF LBS ROAD, MULUND WEST- 400080"
        },
        {
            "location": [
                "19.16642353",
                "72.9274793"
            ],
            "address": "MCGM QUARTERS, BHANDUP COMPLEX, MULUND WEST- 400080"
        },
        {
            "location": [
                "19.17414334",
                "72.96243321"
            ],
            "address": "MANGAL SRUSHTI , NEELAM NAGAR, MULUND EAST- 400081"
        },
        {
            "location": [
                "19.16339407",
                "72.94483626"
            ],
            "address": "Vivekanad Society, J.N.ROAD, , SARVODAY NAGR, MULUND WEST- 400080"
        },
        {
            "location": [
                "19.16726667",
                "72.95730556"
            ],
            "address": "AMBEY ASHIRWAD BLG 1 ,CHAFEKAR BANDHU ROAD ,MULUND EAST - 400081"
        },
        {
            "location": [
                "19.0959197",
                "72.90551690000001"
            ],
            "address": "Not Mentioned Varsha Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
        },
        {
            "location": [
                "19.0996853",
                "72.9028937"
            ],
            "address": "Not Mentioned Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
        },
        {
            "location": [
                "19.16399211",
                "72.936152"
            ],
            "address": "Not Mentioned T Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400082, India"
        },
        {
            "location": [
                "18.92192165",
                "72.82526293"
            ],
            "address": "shivshaktinagar free pr÷ss journal road nariman point colaba Mumbai Coastal Road - Phase I, A Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400 021, India"
        },
        {
            "location": [
                "18.96426389",
                "72.82742778"
            ],
            "address": "Add- Room No- 9, 23/16 Shankarrao Pupala Marg, E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400004, India"
        },
        {
            "location": [
                "18.98755556",
                "72.83368611"
            ],
            "address": "Add- Arham tower Building E Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400027, India"
        },
        {
            "location": [
                "18.98360833",
                "72.83419167"
            ],
            "address": "Add- E wing room no. 20 10th floor Dr Babasaheb Ambedkar Marg, E Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400027, India"
        },
        {
            "location": [
                "19.01413056",
                "72.86201111"
            ],
            "address": "Add- 9/179 BPT Hospital, LM Nadkarni Road, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400011, India"
        },
        {
            "location": [
                "19.02626111",
                "72.87216111"
            ],
            "address": "Add- Rm no. 501, Bharatiya Kamala Nagar, F/N Ward, Zone 2, Bharathiya Kamala Nagar, Mumbai City, Maharashtra, 400037, India"
        },
        {
            "location": [
                "19.00627222",
                "72.84681944"
            ],
            "address": "Add- Flat No 205 G.D. Ambedkar Marg, Bhoiwada, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400031, India"
        },
        {
            "location": [
                "18.99669167",
                "72.84927778"
            ],
            "address": "Add- A Wing Dosti Flamingos, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400015, India"
        },
        {
            "location": [
                "19.00147222",
                "72.8528"
            ],
            "address": "Add- 901 Ashwamedh CHS Sadbhavana Nagar, F/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400033, India"
        },
        {
            "location": [
                "18.99362222",
                "72.83183333"
            ],
            "address": "Add- BDD 12, Panchaganga Apartments, N M Joshi Marg (Delisle Road), BDD Chawl, E Ward, Zone 2, Mumbai, Kulāba, Mumbai City, Maharashtra, 400027, India"
        },
        {
            "location": [
                "18.98544444",
                "72.82926389"
            ],
            "address": "Add- D committee Arthur Road Jail, Sane Guruji Marg (Arthur Road), E Ward, Zone 1, Mumbai, Mumbai City, Maharashtra, 400027, India"
        },
        {
            "location": [
                "19.06078611",
                "72.84973333"
            ],
            "address": "Add- Room No 302 Hazarimal Chetnas College, Ambedkar chowk, Gandhi Nagar, H/E Ward, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, India"
        },
        {
            "location": [
                "19.10005556",
                "72.86794722"
            ],
            "address": "Add- Room No. 2 Sahar Gaon, CPWD Colony, Zone 3, Mumbai, Mumbai Suburban, Maharashtra, 400099, India"
        },
        {
            "location": [
                "19.08880802",
                "72.89366247"
            ],
            "address": "yan Nagar,Gaibanshah Dargah, Ghatkopar (w) Narayan Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
        },
        {
            "location": [
                "19.0705657",
                "72.88114190000002"
            ],
            "address": "NOOR E JAHAN PIPE ROAD NEAR KURLA NURSING HOME KURLA WEST MUMBAI- 400070 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
        },
        {
            "location": [
                "19.07529444",
                "72.87358611"
            ],
            "address": "BLDG NO 12 Santa Cruz – Chembur Link Road, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
        },
        {
            "location": [
                "19.06934722",
                "72.88129444"
            ],
            "address": "602 Naware Baug Jagruti Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
        },
        {
            "location": [
                "19.07538889",
                "72.88315833"
            ],
            "address": "R3 building 8, Masrani Lane, Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
        },
        {
            "location": [
                "19.07794722",
                "72.8817"
            ],
            "address": "43 Hallow Pul, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400070, India"
        },
        {
            "location": [
                "19.06064444",
                "72.88725833"
            ],
            "address": "42/C L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400024, India"
        },
        {
            "location": [
                "19.08861389",
                "72.89437222"
            ],
            "address": "Narayan Nagar Narayan Nagar, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
        },
        {
            "location": [
                "19.09516389",
                "72.88785833"
            ],
            "address": "Add- A/102, Dosti Enclave, KPM High School, 90 Feet Road, Sunder Baug, L Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 072, India"
        },
        {
            "location": [
                "19.06685556",
                "72.89833889"
            ],
            "address": "Building No. 24 Tilak Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
        },
        {
            "location": [
                "19.09374722",
                "72.90226944"
            ],
            "address": "Add- Sai Ganesh Bldg Azad Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400086, India"
        },
        {
            "location": [
                "19.08457222",
                "72.91007778"
            ],
            "address": "Add- Room No.603 B Wing Babli Mahadev Kanekar Marg, Saibaba Nagar, N Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
        },
        {
            "location": [
                "19.17595",
                "72.87313611"
            ],
            "address": "Add- B 203 Tree House Play School, General A K Vaidya Marg, Yashodham, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra, 400063, India"
        },
        {
            "location": [
                "19.11861944",
                "72.93453056"
            ],
            "address": "Add- 9/295 S Ward, Zone 6, Mumbai, Mumbai Suburban, Maharashtra, 400083, India"
        },
        {
            "location": [
                "19.04679444",
                "72.89539167"
            ],
            "address": "Add- ROOM 196,R-C BARRACK NO.17,CHEMBUR400071"
        },
        {
            "location": [
                "19.04754722",
                "72.89535833"
            ],
            "address": "Add- RC BARRACK NO. 32 NEAR MUNICIPAL SCHOOL, CHEMBUR COLONY 400074"
        },
        {
            "location": [
                "19.04624444",
                "72.90425833"
            ],
            "address": "Add- Sanket Appt. Fountant Rd.Opp. HDFC Bank Chembur400074"
        },
        {
            "location": [
                "19.06183889",
                "72.90695278"
            ],
            "address": "Add- MAHAATMA PHULE NAGAR LOKHANDE MARG CHEMBUR400086"
        },
        {
            "location": [
                "19.02801667",
                "72.89643611"
            ],
            "address": "Add- Laxminagar CHSShankar Dewool Mahul Chembur 400074"
        },
        {
            "location": [
                "19.044975",
                "72.91608333"
            ],
            "address": "Add-  Sai sanskar CHS, Punjab wadiBehind HP Petrol Pump Deonar400088"
        },
        {
            "location": [
                "19.06808889",
                "72.89449722"
            ],
            "address": "Add- GANGOTRI TILAK NAGAR EAST NEXT TO SARASWAT BANK TILAKNAGAR,CHEMBUR400089"
        },
        {
            "location": [
                "19.050975",
                "72.90751667"
            ],
            "address": "Add- Gold crest, Chembur400089"
        },
        {
            "location": [
                "19.06108333",
                "72.90794722"
            ],
            "address": "Add- CHOWL 5,MAHATMA PHILE NAGAR-1, LOKHANDE MARG, CHEMBUR WEST , 400089"
        },
        {
            "location": [
                "19.06438889",
                "72.89376944"
            ],
            "address": "Add- Yashomati Housing SocietySahakar nagar 1Shell ColonyChembur 400 071"
        },
        {
            "location": [
                "19.06725833",
                "72.89330556"
            ],
            "address": "Add- SRV HOSPITAL- CHEMBUR, MPMWC, OPPOSITE LOKMAANYA TILAK TERMINUS, TILAKNAGAR,CHEMBUR400089"
        },
        {
            "location": [
                "19.05012778",
                "72.89141944"
            ],
            "address": "Add- TRISHUL BAUGHEIGHTS, SINDHI SOCIETY CHEMBUR400071"
        },
        {
            "location": [
                "19.03194444",
                "72.89709722"
            ],
            "address": "Add- NEW BHARAT NAGAR VASHI NAKA MAHUL ROAD CHEMBUR400074"
        },
        {
            "location": [
                "19.05868611",
                "72.90277222"
            ],
            "address": "Add-  Krishna Bldg., Nikansh Vihar Chembur (W), Mumbai :- 89 Road No 14, Subhash Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
        },
        {
            "location": [
                "19.07181111",
                "72.89715556"
            ],
            "address": "Add- NIKANT VIHAR, KURLA TERMINUS ROAD, CHEMBUR WEST N Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400077, India"
        },
        {
            "location": [
                "19.05248889",
                "72.90998611"
            ],
            "address": "Add- Bunglow No. D/5 Amogh Soc.Behind Amar CinemaChembur Ashirwad Hospital and Polyclinic, Road No. 5, Ghatla Village, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
        },
        {
            "location": [
                "19.06776667",
                "72.89420278"
            ],
            "address": "Add- Gangotri Building  NO 73 Tilak NagarKurla 400089"
        },
        {
            "location": [
                "19.06831389",
                "72.902525"
            ],
            "address": "Add- AMAR KUNJ PESTUM SAGAR ROAD NO-2CHEMBUR-W400089"
        },
        {
            "location": [
                "19.03119444",
                "72.89625833"
            ],
            "address": "Add- Islampura masjidVashi NakaSamaj kalyan societyChembur400074"
        },
        {
            "location": [
                "19.06126667",
                "72.90834444"
            ],
            "address": "Add- Chawl No 9Mahatra phulePL Lokhande MargChembur 400089"
        },
        {
            "location": [
                "19.06059167",
                "72.90869722"
            ],
            "address": "Add- Mahatra phulePL Lokhande MargChembur 400089"
        },
        {
            "location": [
                "19.06871944",
                "72.9099"
            ],
            "address": "Add- Safalta hotellakshmi nagarNear Railway Track, Vashi naka, Chembur 400074"
        },
        {
            "location": [
                "19.06906111",
                "72.90120556"
            ],
            "address": "Add- Amar KunjPeston Sagar Road No 2Chembur 400089"
        },
        {
            "location": [
                "19.04948889",
                "72.88794167"
            ],
            "address": "Add- LALDONGAR, NEAR BMC SCHOOL CHEMBUR40071"
        },
        {
            "location": [
                "19.05784444",
                "72.88666389"
            ],
            "address": "Add- CHAWL NO 5PADA NO. 2, THAKKAR BAPPA COLONYCHEMBUR400071"
        },
        {
            "location": [
                "19.051225",
                "72.88933889"
            ],
            "address": "Add- SHLOK Sindhi societ RoadCHEMBUR 400071"
        },
        {
            "location": [
                "19.06701944",
                "72.89818333"
            ],
            "address": "Add- BLDG NO.24OPP AYUSHI SUPER MARKETCHEMBUR400089"
        },
        {
            "location": [
                "19.05766389",
                "72.89753333"
            ],
            "address": "Add- NEAR GANESH MANDIR, SOLKAR NAGAR, CHEMBUR400071"
        },
        {
            "location": [
                "19.0238",
                "72.87923889"
            ],
            "address": "Add- MHADA BLDGOPP TILAK NAGARKRIPA SINDHUCHEMBUR400074"
        },
        {
            "location": [
                "19.06101944",
                "72.90851944"
            ],
            "address": "Add-  NEAR NARAYAN GURU HIGH SCHOOLMAHATMA PHULE NAGARPL LOKHANDE MARGCHEMBUR400043"
        },
        {
            "location": [
                "19.06155278",
                "72.90749722"
            ],
            "address": "Add- Chawl No. 8Mahatma Phule NagarLokhande MargChembur 400089"
        },
        {
            "location": [
                "19.05824444",
                "72.8865"
            ],
            "address": "Add- Vatsala Tai Naik NagarNear Kurla Signal ,Road No 39, CHEMBUR munciple school, Shell Colony Road, Thakkar Bappa Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400 071, India"
        },
        {
            "location": [
                "19.046075",
                "72.89723889"
            ],
            "address": "Add- Chembur CampChemburMumbai Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
        },
        {
            "location": [
                "19.03251389",
                "72.90303889"
            ],
            "address": "Add- NEW BHARAT NAGAR,VASHI NAKAHP COLONYMEHUL RD BP Colony, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
        },
        {
            "location": [
                "19.04490278",
                "72.89203611"
            ],
            "address": "Add- Collector ColonyR.C Marg Shiv Shakti NagarNear BMC school, Chembur Collector Colony, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400074, India"
        },
        {
            "location": [
                "19.06230278",
                "72.90235833"
            ],
            "address": "Add- SIDHARTH RESIDENCY CHEMBUR WEST Prakash Thorat Marg, Phule Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
        },
        {
            "location": [
                "19.06460278",
                "72.90416389"
            ],
            "address": "Add- Mukund Nagar Chembur Mumbai Rahul Nagar, M/W Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400089, India"
        },
        {
            "location": [
                "19.04474167",
                "72.91019722"
            ],
            "address": "Add-  SIDHANTA COLONYGANGUBAI PATOLE CHAWLCHEMBUR NAKA Shivneri Nagar, M/E Ward, Zone 5, Mumbai, Mumbai Suburban, Maharashtra, 400071, India"
        },
        {
            "location": [
                "18.9182068",
                "72.82466784"
            ],
            "address": "Shivshakti Nagar, Free Press Journal Road, Nariman Point, Colaba-400005"
        },
        {
            "location": [
                "18.90743333",
                "72.80934722"
            ],
            "address": "Geeta Nagar, Dr Homi Bhabha Road, Near Navy Nagar, Colaba-400021"
        },
        {
            "location": [
                "18.95140833",
                "72.83907778"
            ],
            "address": "Hutment, Sant Tukaram Road, -400003"
        },
        {
            "location": [
                "18.947675",
                "72.82577222"
            ],
            "address": "Keshav Nursing Building, Mahadev Shankar Seth Lane, Chira Bazar-400003"
        },
        {
            "location": [
                "18.95852969",
                "72.82439548"
            ],
            "address": "Bori Chawl, Kapreshwar Marg, Fanaswadi, Kalbadevi-400003"
        },
        {
            "location": [
                "18.97121786",
                "72.81615551"
            ],
            "address": "ratan tata colony, ac market, tardeo, mumbai 400 034"
        },
        {
            "location": [
                "18.96568903",
                "72.82384359"
            ],
            "address": "Soth Face Chawl, South Face Chawl, Rs Nimkar Marg, Faras Rd, Kamatipura-400008"
        },
        {
            "location": [
                "18.96336932",
                "72.82348913"
            ],
            "address": "C Wing, Amatullah Building, Amatullah Building, Pb Marg, Arab Lane, Grant Road-400008"
        },
        {
            "location": [
                "18.97535",
                "72.81226111"
            ],
            "address": "Dmd Jhopadpatti, Tardeo Rd, Tulsiwadi, Tardeo-400034"
        },
        {
            "location": [
                "18.97920903",
                "72.8274064"
            ],
            "address": "Chawl 1, Transit Camp, Tank Pakhadi Street, Kalapani, Mominpura-400031"
        },
        {
            "location": [
                "18.96552989",
                "72.82531287"
            ],
            "address": "Chawl No 21, 22, Kamathipura 7Th Lane Chawl No 21, Kamathipura 7Th Lane, Kamathipura-400012"
        },
        {
            "location": [
                "18.96971264",
                "72.84194449"
            ],
            "address": "Tulsiwadi, Tulsiwadi Chawl, Gunpowder Road, Mazgaon-400015"
        },
        {
            "location": [
                "18.96102938",
                "72.82614395"
            ],
            "address": "Chawl, Kasam Hathi Chawl, Kamathipura 1St Lane, Kamathipura-400012"
        },
        {
            "location": [
                "18.9628063",
                "72.8318085"
            ],
            "address": "Slum, Sanjay Gandhi Nagar, J J Marg, Railway Compound, Mazgaon-400015"
        },
        {
            "location": [
                "18.97393777",
                "72.82710467"
            ],
            "address": "Chawl No 1, Bit Chawl Agripada, Mejhraj Sethi Marg, Jhula Maidan, Byculla-400013"
        },
        {
            "location": [
                "18.97133056",
                "72.82773889"
            ],
            "address": "Chawl, Aksa Manzil, M A Road Madanpura, Ghosh Bazar, Byculla-400018"
        },
        {
            "location": [
                "18.97418333",
                "72.84828611"
            ],
            "address": "Slum, Lakdi Bandervmotor Line Daru Khana, Motor Line Daru Khana, Udipi Hotel, Mazgaon-400013"
        },
        {
            "location": [
                "19.02296329",
                "72.87073740000001"
            ],
            "address": "Sangam Nagar,S P Road,Antop Hill, Wadala East, S P Road, Wadala East-400013"
        },
        {
            "location": [
                "19.02804452",
                "72.87339361"
            ],
            "address": "Bharatiya Kamala Nagar, S P Road, Near Karbala Msjid, Antop Hill, Wadala East, S P Road, Wadala East-400013"
        },
        {
            "location": [
                "19.0276777",
                "72.87024559999999"
            ],
            "address": "Sai Baba Mandir, Vijay Nagar , Antop Hill, Wadala C/O Pandit(Rented House), Wadala East-400011"
        },
        {
            "location": [
                "19.02245524",
                "72.87035876"
            ],
            "address": "Himmat Nagar Sp Road Near Madina Masjid Wadala East Mumbai 37, Sp Road, Wadala East-400025"
        },
        {
            "location": [
                "19.01594202",
                "72.86459744"
            ],
            "address": "Siddharth Nagar Koraba Mithagar, Wadala-400025"
        },
        {
            "location": [
                "19.02640833",
                "72.861325"
            ],
            "address": "Lal Mati, Kismat Nagar, Wadala-400011"
        },
        {
            "location": [
                "19.00588496",
                "72.85492723"
            ],
            "address": "Transit Camp Kalewadi, Ratnasindhu CHS Transit Camp, G D Ambekar Road, Near Monorail Poll No 11, Kalewadi-400030"
        },
        {
            "location": [
                "19.00550336",
                "72.85497499"
            ],
            "address": "Maharashtra Housing Board, Dyaneshwar Nagar, R A Kidwai Road, Sewree-400030"
        },
        {
            "location": [
                "19.04169197",
                "72.85052482"
            ],
            "address": "Madina Nagar, 60Ft Road, Dharavi-400019"
        },
        {
            "location": [
                "19.04769038",
                "72.85787175"
            ],
            "address": "Social Nagar, Marrianma Mandir, Gausiya Masjid, Dharavi-400014"
        },
        {
            "location": [
                "19.0392674",
                "72.85491354"
            ],
            "address": "Muslim Nagar, Dharavi-400037"
        },
        {
            "location": [
                "19.04372482",
                "72.85004248"
            ],
            "address": "Janta Society, Dharavi Main Road, Abhudaya Bank, Dharavi-400022"
        },
        {
            "location": [
                "19.0414773",
                "72.84845370000001"
            ],
            "address": "Jasmin Mill Road, Gasita Ram Factory, Dharavi-400022"
        },
        {
            "location": [
                "19.01798718",
                "72.81980024"
            ],
            "address": "40 B D D, B D D, Gm Bhosle Marg, Worli-400037"
        },
        {
            "location": [
                "19.00519848",
                "72.82053659"
            ],
            "address": "Kombdi Galli, Siddharth Nagar, Dr A B Road, Poddar Hospital, Worli-400037"
        },
        {
            "location": [
                "19.00195741",
                "72.81694837"
            ],
            "address": "18 B D D, B D D, Nm Joshi Marg, N M Joshi Marg, Near Nm Joshi Marg, Lower Parel-400037"
        },
        {
            "location": [
                "19.01901216",
                "72.81788612"
            ],
            "address": "B D D 20, B D D, N M Joshi Marg, Lower Parel, Near Nm Joshi Marg Police Station-400037"
        },
        {
            "location": [
                "19.0097346",
                "72.8255543"
            ],
            "address": "Century Quartets, P B Marg, Mahindra Towers, Worli-400037"
        },
        {
            "location": [
                "19.02163552",
                "72.8181281"
            ],
            "address": "DEVICHA OOTA,BND BIG HANUMAN MANDIR,JANTA COLONY DEVICHA OOTA,JANTA COLONY,NR BIG HANUMAN MANDIR buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "19.0185886",
                "72.81882490000001"
            ],
            "address": "KATKAR HOUSE buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "19.01747046",
                "72.82026523"
            ],
            "address": "NAVNEET CHOWK,JANTA COLONY buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "19.01751015",
                "72.82032886"
            ],
            "address": "GURU DATTA LANE GURU DATTA BAND PATHAK,JANTA COLONY,BND 169 BUSSTOP buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "19.01728558",
                "72.82028874"
            ],
            "address": "GURU DATTA LANE GURU DATTA BAND PATHAK,JANTA COLONY,BND 169 BUSSTOP buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "19.01848537",
                "72.81933248"
            ],
            "address": "NAVTARUN RAHIVASHI SEVA SANGH buva bhaye marg worli village worli village 400030"
        },
        {
            "location": [
                "18.99259722",
                "72.81860269"
            ],
            "address": "Jijamata Nagr, Worli, E Moses Road, Jijamata Nagr, Worli, Worli-400058"
        },
        {
            "location": [
                "18.99275573",
                "72.81922314"
            ],
            "address": "Anand Nagar, Jijamata Nagr, Worli, E Moses Road, Jijamata Nagr, Worli, Worli-400049"
        },
        {
            "location": [
                "19.00170975",
                "72.81849399"
            ],
            "address": "bdd chawl, worli BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 40013, India"
        },
        {
            "location": [
                "19.018673800000002",
                "72.81916851"
            ],
            "address": "kranti lane, bua bhaye marg V B Worlikar Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
        },
        {
            "location": [
                "19.00100493",
                "72.81754334"
            ],
            "address": "bdd chawl,worli BDD Chawl, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 40013, India"
        },
        {
            "location": [
                "19.01835716",
                "72.81840243"
            ],
            "address": "dhrmaraj bhandu cottage, bua bhaye marg G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
        },
        {
            "location": [
                "19.01796199",
                "72.81869763"
            ],
            "address": "arun prakash sangh G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
        },
        {
            "location": [
                "19.01787524",
                "72.81815677"
            ],
            "address": "behind BPT quarters,worli, mumbai G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
        },
        {
            "location": [
                "19.01939522",
                "72.81872935"
            ],
            "address": "near fish market, worli V B Worlikar Marg, G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
        },
        {
            "location": [
                "19.01952039",
                "72.81786932"
            ],
            "address": "bholanath worlikar chawl G/S Ward, Zone 2, Mumbai, Mumbai City, Maharashtra, 400030, India"
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
    hotspots = []
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
    document.getElementById("hotspotnumber").innerHTML = hotspots["length"];

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
  alert('Covid-19 in Mumbai \n👉 Pls wait till 🛰️ Map Load , zoom to your Location to see Infected area near you  \n  click on the 🔴 corona img to see address of that area');
  localStorage.setItem('visited', true);
}  
}
// to close list
var closebtns = document.getElementsByClassName("close");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        this.parentElement.style.display = 'none';
    });
}