//var never_valid_characters = ['O', 'Q'];
/*var vindata_broad_regions = {   /[A-H]/i: "Africa",
								/[J-NPR]/i: "Asia",
								/[S-Z]/i: "Europe",
								/[1-5]/i: "North America",
								/[67]/i: "Oceania",
								/[89]/i: "South America" };
*/
function get_vindata_specific_regions(){
	return {
			//Africa
			"South Africa": /A[A-H]/i,
			"Ivory Coast": /A[J-N]/i,
			"Angola": /B[A-E]/i,
			"Kenya": /B[F-K]/i,
			"Tanzania": /B[L-R]/i,
			"Benin": /C[A-E]/i,
			"Madagascar": /C[F-K]/i,
			"Tunisia": /C[L-R]/i,
			"Egypt": /D[A-E]/i,
			"Morocco": /D[F-K]/i,
			"Zambia": /D[L-R]/i,
			"Ethiopia": /E[A-E]/i,
			"Mozambique": /E[F-K]/i,
			"Ghana": /F[A-E]/i,
			"Nigeria": /F[F-K]/i,
			//Asia
			"Japan": /J[A-Z0-9]/i,
			"Sri Lanka": /K[A-E]/i,
			"Israel": /K[F-K]/i,
			"South Korea": /K[L-R]/i,
			"Kazakhstan": /K[S-Z0-9]/i,
			"China": /L[A-Z0-9]/i,
			"India": /M[A-E]/i,
			"Indonesia": /M[F-K]/i,
			"Thailand": /M[L-R]/i,

			"Iran": /N[A-E]/i,
			"Pakistan": /N[F-K]/i,
			"Turkey": /N[L-R]/i,

			"Philippines": /P[A-E]/i,
			"Singapore": /P[F-K]/i,
			"Malaysia": /P[L-R]/i,

			"United Arab Emirates": /R[A-E]/i,
			"Taiwan": /R[F-K]/i,
			"Vietnam": /R[L-R]/i,
			"Saudi Arabia": /R[S-Z0-9]/i,
			//Europe
			"United Kingdom": /S[A-M]/i,
			"East Germany": /S[N-T]/i,
			"Poland": /S[U-Z]/i,
			"Latvia": /S[1-4]/i,

			"Switzerland": /T[A-H]/i,
			"Czech Republic": /T[J-P]/i,
			"Hungary": /T[R-V]/i,
			"Portugal": /T[W-Z1]/i,


			"Denmark": /U[H-M]/i,
			"Ireland": /U[N-T]/i,
			"Romania": /U[U-Z]/i,

			"Slovakia": /U[5-7]/i,

			"Austria": /V[A-E]/i,
			"France": /V[F-R]/i,
			"Spain": /V[S-W]/i,
			"Serbia": /V[XZ12]/i,
			"Croatia": /V[3-5]/i,
			"Estonia": /V[6-90]/i,
			"West Germany": /W[A-Z0-9]/i,
			"Bulgaria": /X[A-E]/i,
			"Greece": /X[F-K]/i,
			"Netherlands": /X[L-R]/i,
			"USSR": /X[S-W]/i,
			"Luxembourg": /X[XZ12]/i,
			"Russia": /X[3-90]/i,
			"Belgium": /Y[A-E]/i,
			"Finland": /Y[F-K]/i,
			"Malta": /Y[L-R]/i,
			"Sweden": /Y[S-W]/i,
			"Norway": /Y[XZ12]/i,
			"Belarus": /Y[3-5]/i,
			"Ukraine": /Y[6-90]/i,
			"Italy": /Z[A-R]/i,

			"Slovenia": /Z[XZ12]/i,
			"Lithuania": /Z[3-5]/i,

			//North America
			"United States": /[145][A-Z0-9]/i,
			"Canada": /2[A-Z0-9]/i,
			"Mexico": /3[A-Z0-7]/i,
			"Cayman Islands": /3[890]/i,
			//Oceania
			"Australia": /6[A-W]/i,

			"New Zealand": /7[A-E]/i,

			//South America
			"Argentina": /8[A-E]/i,
			"Chile": /8[F-K]/i,
			"Ecuador": /8[L-R]/i,
			"Peru": /8[S-W]/i,
			"Venezuela": /8[XZ12]/i,

			"Brazil": /9[A-E]/i,
			"Colombia": /9[F-K]/i,
			"Paraguay": /9[L-R]/i,
			"Uruguay": /9[S-W]/i,
			"Trinidad & Tobago": /9[XZ12]/i,
			"Brazil": /9[3-9]/i,

		}
}


/*
First + Second + Third Position Digits  - WMI 	Vehicle Manufacturer
10T	Oshkosh
11V	Ottawa
137	AM General, Hummer
15G	Gillig
17N	John Deere
18X	WRV
19U	Acura
1A4	Chrysler
1A8	Chrysler
1AC	AMC
1AM	AMC
1B3	Dodge
1B4	Dodge
1B6	Dodge
1B7	Dodge
1B7	Dodge
1BA	Blue Bird
1BB	Blue Bird
1BD	Blue Bird
1C3	Chrysler
1C4	Chrysler
1C8	Chrysler
1C9	Chance
1CY	Crane Carrier
1D3	Dodge
1D4	Dodge
1D5	Dodge
1D7	Dodge
1D8	Dodge
1EC	Fleetwood
1F1	Ford
1F6	Ford
1FA	Ford
1FB	Ford
1FC	Ford
1FD	Ford
1FE	Ford
1FM	Ford
1FT	Ford
1FU	Freightliner
1FV	Freightliner
1G1	Chevrolet
1G2	Pontiac
1G3	Oldsmobile
1G4	Buick
1G5	GMC, Pontiac
1G6	Cadillac
1G8	Chevrolet, Saturn
1GA	Chevrolet
1GB	Chevrolet
1GC	Chevrolet
1GD	GMC
1GE	Cadillac
1GF	Flexible
1GG	Isuzu
1GH	GMC, Oldsmobile
1GJ	GMC
1GK	GMC
1GM	Pontiac
1GN	Chevrolet
1GT	GMC
1GY	Cadillac
1HG	Honda
1HS	International
1HT	International
1HV	International
1J4	Jeep
1J7	Jeep
1J8	Jeep
1JC	AMC, Jeep
1JD	AMC
1JT	AMC, Jeep
1L1	Lincoln
1LN	Lincoln
1M1	Mack
1M2	Mack
1M3	Mack
1M8	MCI
1ME	Mercury
1MR	Lincoln
1N4	Nissan
1N6	Datsun, Nissan
1N9	Neoplan
1NK	Kenworth
1NP	Peterbilt
1NX	Toyota
1P3	Plymouth
1P4	Plymouth
1P7	Plymouth
1P9	Panoz
1RF	Roadmaster
1S9	Saleen
177	Thomas
1T8	Thomas
1TU	TMC
1V1	Volkswagen
1VW	Volkswagen
1WA	Autostar
1WB	Autostar
1WU	White Volvo
1WV	Winnebago
1XK	Kenworth
1XM	AMC
1XP	Peterbilt
1Y1	Chevrolet, Geo
1YV	Mazda
1Z3	Mitsubishi
1Z5	Mitsubishi
1Z7	Mitsubishi
1ZV	Ford
1ZW	Mercury
2A3	Chrysler
2A4	Chrysler
2A8	Chrysler
2B1	Orion
2B3	Dodge
2B4	Dodge
2B5	Dodge
2B6	Dodge
2B7	Dodge
2B8	Dodge
2BC	AMC, Jeep
2C1	Chevrolet, Geo
2C3	Chrysler
2C4	Chrysler
2C7	Pontiac
2C8	Chrysler
2CC	AMC, Eagle
2CK	Geo, Pontiac
2CM	AMC
2CN	Chevrolet, Geo
2D4	Dodge
2D6	Dodge
2D7	Dodge
2D8	Dodge
2E3	Eagle
2FA	Ford
2FD	Ford
2FM	Ford
2FT	Ford
2FU	Freightliner
2FV	Freightliner
2FW	Sterling
2FZ	Sterling
2G0	GMC
2G1	Chevrolet
2G2	Pontiac
2G3	Oldsmobile
2G4	BuickX
2G5	GMC
2G7	Pontiac
2G8	Chevrolet
2GA	Chevrolet
2GB	Chevrolet
2GD	GMC
2GJ	GMC
2GK	GMC
2GN	Chevrolet
2GT	GMC
2HG	Honda
2HH	Acura
2HJ	Honda
2HK	Honda
2HM	Hyundai
2HN	Acura
2HS	International
2HT	International
2J4	Jeep
2LM	Lincoln
2M2	Mack
2ME	Mercury
2MH	Mercury
2MR	Mercury
2NK	Kenworth
2NP	Peterbilt
2P3	Plymouth
2P4	Plymouth
2P5	Plymouth
2P9	Prevost
2PC	Prevost
2S2	Suzuki
2S3	Suzuki
2T1	Toyota
2T2	Lexus
2WK	Western Star Trucks
2WL	Western Star Trucks
2XK	Kenworth
2XM	Eagle
2XP	Peterbilt
3A4	Chrysler
3A8	Chrysler
3AB	Dina
3AL	Freightliner
3B3	Dodge
3B4	Dodge
3B6	Dodge
3B7	Dodge
3BK	Kenworth
3BP	Peterbilt
3C3	Chrysler
3C4	Chrysler
3C8	Chrysler
3CA	Chrysler
3D3	Dodge
3D5	Dodge
3D6	Dodge
3D7	Dodge
3FA	Ford
3FC	Ford
3FD	Ford
3FE	Ford, Freightliner
3FR	Ford
3FT	Ford
3G1	Chevrolet
3G2	Pontiac
3G4	Buick
3G5	Buick
3G7	Pontiac
3GB	Chevrolet
3GC	Chevrolet
3GD	GMC
3GE	Chevrolet
3GK	GMC
3GN	Chevrolet
3GT	GMC
3GY	Cadillac
3HA	International
3HG	Honda
3HM	Honda
3HS	International
3HT	International
3LN	Lincoln
3MA	Mercury
3ME	Mercury
3N1	Nissan
3NK	Kenworth
3NM	Peterbilt
3P3	Plymouth
3TM	Toyota
3VW	Volkswagen
3WK	Kenworth
45V	Utilimaster
46G	Gillig
49H	Sterling
4A3	Mitsubishi
4A4	Mitsubishi
4B3	Dodge
4C3	Chrysler
4CD	Oshkosh
4DR	Genesis, International
4E3	Eagle
4F2	Mazda
4F4	Mazda
4G1	Chevrolet
4G2	Pontiac
4GD	GMC
4GT	Isuzu, WhiteGMC
4JG	Mercedes-Benz
4KB	Chevrolet
4KD	GMC
4KL	Isuzu
4M2	Mercury
4N1	Nissan
4N2	Nissan
4NU	Isuzu
4P3	Plymouth
4S1	Isuzu
4S2	Isuzu
4S3	Subaru
4S4	Subaru
4S6	Honda
4S7	Spartan
4SL	Magnum
4T1	Toyota
4T3	Toyota
4TA	Toyota
4US	BMW
4UZ	Freightliner
4V1	Volvo, WhiteGMC
4V2	Volvo, WhiteGMC
4V4	Volvo, WhiteGMC
4V5	Volvo, WhiteGMC
4VA	Volvo
4VG	Volvo, WhiteGMC
4VH	Volvo
4VL	Volvo
4VM	Volvo
4VZ	Spartan
5AS	GEM
5B4	Workhorse
5CK	Western Star Trucks
5FN	Honda
5FY	New Flyer
5GA	Buick
5GR	Hummer
5GT	Hummer
5GZ	Saturn
5J6	Honda
5J8	Acura
5KJ	Western Star Trucks
5KK	Western Star Trucks
5LM	Lincoln
5LT	Lincoln
5N1	Nissan
5N3	Infiniti
5NM	Hyundai
5NP	Hyundai
5PV	Hino
5S3	Saab
5SX	Amercian LeFrance
5T4	Workhorse
5TB	Toyota
5TD	Toyota
5TE	Toyota
5TF	Toyota
5UM	BMW
5UX	BMW
5Y2	Pontiac
6G2	Pontiac
6MM	Mitsubishi
6MP	Mercury
9BF	Ford
9BW	Volkswagen
9DW	Volkswagen
J81	Chevrolet,Geo
J87	Isuzu
J8B	Chevrolet
J8D	GMC
J8Z	Chevrolet
JA3	Mitsubishi
JA4	Mitsubishi
JA7	Mitsubishi
JAA	Isuzu
JAB	Isuzu
JAC	Isuzu
JAE	Acura
JAL	Isuzu
JB3	Dodge
JB4	Dodge
JB7	Dodge
JC2	Ford
JD1	Daihatsu
JD2	Daihatsu
JE3	Eagle
JF1	Subaru
JF2	Subaru
JF3	Subaru
JF4	Saab
JG1	Chevrolet, Geo
JG7	Pontiac
JGC	Geo
JH4	Acura
JHB	Hino
JHL	Honda
JHM	Honda
JJ3	Chrysler
JL6	Mitsubishi
JLS	Sterling
JM1	Mazda
JM2	Mazda
JM3	Mazda
JN1	Datsun, Nissan
JN3	Nissan
JN4	Nissan
JN6	Datsun, Nissan
JN8	Nissan
JNA	Nissan
JNK	Infiniti
JNR	Infiniti
JNX	Infiniti
JP3	Plymouth
JP4	Plymouth
JP7	Plymouth
JR2X	Isuzu
JS2	Suzuki
JS3	Suzuki
JS4	Suzuki
JT2	Toyota
JT3	Toyota
JT4	Toyota
JT5	Toyota
JT6	Lexus
JT8	Lexus
JTD	Toyota
JTE	Toyota
JTH	Lexus
JTJ	Lexus
JTK	Scion
JTL	Scion
JTM	Toyota
JTN	Toyota
JW6	Mitsubishi
JW7	Mitsubishi
KL1	Chevrolet
KL2	Pontiac
KL5	Suzuki
KL7	Asuna
KLA	Daewoo
KM8	Hyundai
KMF	Hyundai
KMH	Hyundai
KNA	Kia
KND	Hyundai, Kia
KNJ	Ford
KPH	Mitsubishi
LES	Isuzu
LM5	Isuzu
ML3	Dodge
SA9	Morgan
SAJ	Jaguar
SAL	Land Rover
SAT	Triumph
SAX	Sterling
SCA	Rolls-Royce
SCB	Bentley
SCC	Lotus
SCF	Aston Martin
SDL	TVR Engineering
SHH	Honda
SHS	Honda
SJN	Nissan UK
TRU	Audi
VF1	Renault
VF7	Citroën
VF3	Peugeot
VG6	Mack
VSS	Seat
W06	Cadillac
WA1	Audi
WAU	Audi
WBA	BMW
WBS	BMW
WBX	BMW
WD0	Dodge
WD1	Dodge
WD2	Dodge
WD5	Dodge
WD8	Dodge
WDB	Maybach, Mercedes-Benz
WDC	Mercedes-Benz
WDD	Mercedes-Benz
WDP	Dodge
WDX	Dodge
WDY	Dodge
WF1	Merkur
WKK	Fahrzeugwerke
WME	Mercedes-Benz
WMW	Mini
WP0	Porsche
WP1	Porsche
WUA	Audi
WV2	Volkswagen
WV3	Volkswagen
WVG	Volkswagen
WVW	Volkswagen
XTA	Lada
YB3	Volvo
YS3	Saab
YV1	Volvo
YV2	Volvo
YV4	Volvo
YV5	Volvo
ZA9	Lamborghini
ZAM	Maserati
ZAR	Alfa Romeo
ZC2	Chrysler
ZFA	Fiat
ZFF	Ferrari
ZHWX	Lamborghini
*/