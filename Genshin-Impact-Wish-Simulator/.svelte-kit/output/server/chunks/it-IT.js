const title = "Genshin Impact Wish Simulator";
const character = "Personaggio";
const weapon = "Arma";
const vision = "Vision";
const anemo = "Anemo";
const cryo = "Cryo";
const dendro = "Dendro";
const electro = "Electro";
const hydro = "Hydro";
const geo = "Geo";
const pyro = "Pyro";
const bow = "Bow";
const catalyst = "Catalyst";
const claymore = "Claymore";
const sword = "Sword";
const polearm = "Polearm";
const extra = "Extra";
const obtained = "Ottenuto";
const waiting = "Attendere";
const connectionFailed = "Connection Failed!";
const confirmButton = "Conferma";
const cancelButton = "Annulla";
const disclaimer = "Tutte le risorse usate in questo sito sono di propriet\xE0 di Mihoyo.";
const fanmade = "Questa \xE8 un'applicazione fatta unicamente dai fan, divertiti !";
const pressToContinue = "Premi in un punto qualsiasi dell'area vuota per continuare";
const installInstruction = "Instructions to Install to Home Screen/Desktop";
const share = "Condividi";
const screenshot = "Scatta una Foto";
const capturing = "Catturare";
const rewardFirstShare = "Premio per la prima condivisione : {qty}";
const version = "Versione";
const donate = "Dona";
const banner = {
  beginner: "Wish per Principianti",
  wanderlust: "Wanderlust Invocation",
  "epitome-invocation": "Incarnazione divina",
  "adrift-in-the-harbor": "Alla deriva nel porto",
  "auric-blaze": "Fiamma dorata",
  "azure-excursion": "Azure Excursion",
  "ballad-in-goblets": "Ballad in Goblets",
  "born-of-ocean-swell": "Born of Ocean Swell",
  "caution-in-confidence": "Monito implacabile",
  "chanson-of-many-waters": "Ode alle Mille Acque",
  "conjuring-chiaroscuro": "Conjuring Chiaroscuro",
  "dance-of-lantern": "Dance of Lantern",
  "decree-of-the-deeps": "Decree of the Deeps",
  "discerner-of-enigmas": "L'Enigmista",
  "drifting-luminescence": "Drifting Luminescence",
  "everbloom-violet": "Everbloom Violet",
  "farewell-of-snezhnaya": "Farewell of Snezhnaya",
  "from-ashes-reborn": "Rinato dalle ceneri",
  "gentry-of-hermitage": "Gentry of Hermitage",
  "immaculate-pulse": "Battito immacolato",
  "in-the-name-of-the-rosula": "Nel nome della Rosula",
  "invitation-to-mundane-life": "Invito alla Vita mondana",
  "leaves-in-the-wind": "Leaves in The Wind",
  "moment-of-bloom": "Tempo di fioritura",
  "oni_s-royale": "Contesa di Oni",
  "reign-of-serenity": "Reign of Serenity",
  "secretum-secretorum": "Secretum Secretorum",
  "sparkling-steps": "Sparkling Steps",
  "tapestry-of-golden-flames": "Tapestry of Golden Flames",
  "tempestuous-destiny": "Destino tempestoso",
  "the-heron_s-court": "La corte dell'airone",
  "the-moongrass-enlightenment": "L'illuminazione dell'Erba lunare",
  "the-transcendent-one-returns": "Evento trascendentale",
  "twilight-arbiter": "Giudice del crepuscolo",
  "twirling-lotus": "Loto volteggiante",
  "viridescent-vigil": "Viridescent Vigil"
};
const editor = {
  bannerConfig: "{banner} Configuration",
  baseRate: "{rarity}-Star Base Rate:",
  maxPity: "{rarity}-Star Max Pity:",
  hardPity: "Boost {rarity}-Star rate starts from pity:",
  currentPity: "{rarity}-Star Current Pity",
  winRate: "Chance to get Featured Item:",
  charRate: "Chance to get Character instead of Weapon",
  nonRateup: "(When losing 4-Star Item)",
  selectedRate: "Selected Weapon Rate:",
  guaranteedSystem: "Guaranteed System",
  backToDefault: "Back to Default",
  resetPrompt: 'Are you sure to Reset <b>"{banner}"</b> probabilities back to default?',
  "default": "Default",
  never: "Never",
  always: "Always"
};
const customBanner = {
  title: "Customize Banner",
  deletePrompt: "Are You Sure to delete this banner ?",
  ownerDeleteNote: "If you've shared this banner publicly, The Travelers who have made wishes on your banner will no longer be able to access it.",
  userDeleteNote: "The Wishing History on this banner will not be deleted, but you will not be able to pull on this banner again.",
  retry: "Retry",
  findBanner: "Looking for a Banner..",
  networkError: "Network Error, Please check your Connection!",
  bannerNotFound: "Banner not found, wrong <u>Banner ID</u> or maybe the author has removed it.",
  invalidBanner: "Invalid Banner ID",
  identifying: "Identifying Banner",
  loadOwnedBanner: `You're the owner of "{ownedBanner}" banner, your local data will be used instead of the data you've shared online.`,
  loadReady: '"{banner}" is ready to Wish',
  uploading: "Uploading {item}",
  uploadFailed: "Image Upload Failed, please try again later!",
  close: "Close",
  almostDone: "Almost Done",
  shareText: "Come and Try Your Luck on my {character} Banner Simulator",
  setPosition: "Set Position",
  next: "Next",
  move: "Move",
  changeSplashArt: "Change Splash Art",
  adjustSplashArt: "Adjust Splash Art",
  dropHere: "Drop Here!",
  preview: "Banner Preview",
  generateImage: "Generate Image",
  notAnImage: "Not an Image",
  imageTooLarge: "Image is too Large, max size: {maxSize}",
  faceIcon: "Face Icon",
  addBanner: "Add Banner",
  "delete": "Delete",
  deleteFailed: "Failed to Remove",
  bannerRemoved: "Banner Removed",
  edit: "Edit",
  editInfo: "Edit Info",
  editBanner: "Edit Banner Information",
  bannerName: "Banner Name",
  charName: "Character Name",
  charTitle: "Character Title",
  watermark: "Watermark",
  completeAllField: "Please Complete All Required Field!",
  finishAndWish: "Finish and Wish",
  publish: "Publish Banner",
  updateAndShare: "Update & Share",
  rateupChar: "Rate Up Characters",
  yourBanners: "Your Banners",
  createBanner: "Create a Custom Banner",
  limitation: "You are not a member, please delete some banners to activate the editor",
  memberToUnlock: "Become a Member to Add More Banner",
  incomplete: "Incomplete",
  inappropriate: "Inappropriate Content!"
};
const backupRestore = {
  cloudSync: "Cloud Sync",
  localSync: "Local Backup/Restore",
  "import": "Import Data",
  "export": "Export Data",
  importAction: "{fileInfo} will be added to the App, please choose what action you want to perform!",
  mergeAction: "Merge Data <small>Automatically remove duplicate item(s) and insert new item(s)</small>",
  replaceAction: "Replace Data <small> Erase the current App Data and replace it with the imported one. </small>",
  dropFiles: "Drop Your File Here",
  autoExport: "Auto Export",
  destination: "Destination",
  lastExport: "Last Export",
  desNotFound: "Cannot find backup file location, please try to Export again"
};
const wish = {
  wishTitle: "Wish",
  rollButton: "Wish {count}",
  stellaFortuna: "Stella Fortuna",
  loadFailed: "Impossibile caricare il banner! <br /> Passa ad un altro banner o riconnettiti a Internet per evitare errori!",
  loadMeteor: "Load Animation",
  skipMeteor: "Skip Animation",
  loadMeteorMsg: "Loading <span>{star} Star Meteor Animation </span>",
  meteorNotLoaded: "Cannot find Meteor Animation in your storage, please <span> Load the Meteor Animation</span> first before pulling, or <span> Turn ON </span> the option to skip Animation!",
  preloadFilesMsg: "* The loaded files will be stored in the Browser Storage, so you don't need to load them again until the site is updated.",
  banner: {
    text: "Banner",
    allBanner: "Tutti i Banner",
    previous: "Banner Precedente",
    findBanner: "Trova un Banner",
    group: "Gruppo",
    beginner: "Wish\u2008per Principianti",
    "character-event": "Wish dell'Evento del Personaggio",
    "weapon-event": "Wish per Armi",
    standard: "Wish Standard",
    wishDescription: "Ogni 10 wish se ne ha almeno uno a 4 o pi\xF9 stelle",
    novice: "Wish per Principianti",
    up: "UP!",
    beginnerSet: "10 set hanno il 20% di sconto. Per i primi 10 set potrai ricevere {character}.",
    beginnerNote: '"Come farebbe una cameriera rispettosa."',
    beginnerChance: "Chance Rimaste: {chances}",
    standardNote: "I wish standard non hanno una scadenza.",
    allWeaponTypes: "Tutti i Tipi di Armi",
    etc: "ecc.",
    probIncreased: "Probabilit\xE0 aumentata !",
    eventNote: "I personaggi a 5 stelle esclusivi dell'evento possono essere ottenuti solo nel wish specifico durante il periodo/i determinato.",
    viewDetails: "Visualizza i Dettagli per maggiori informazioni."
  },
  epitomizedPath: {
    text: "Epitomized Path",
    fatePoint: "Punti Fato",
    cancelPrompt: "Desideri cancellare il tuo Percorso attuale ?",
    cancelDesc: "La cancellazione azzerer\xE0 i Punti Fato accumulati",
    selectWeapon: "Seleziona l'Arma",
    chartCourseOf: "Grafico del Percorso per {target}",
    cancelCourse: "Annulla Percorso",
    chartCourse: "Grafico del Percorso",
    courseSetFor: "Percorso deciso per: {selectedCourse}",
    description: [
      `"Epitomized Path" \xE8 una meccanica dei desideri per "Epitome Invication". I viaggiatori possono tracciare un percorso verso un'arma a 5 stelle che sperano di ottenere.`,
      "Una volta che avrai tracciato un percorso verso l'arma scelta, otterrai un Punto Fato se <span> riceverai un'arma a 5 stelle che non \xE8 quella che hai scelto</span>. Puoi ottenere un massimo di 2 Punti Fato.",
      'Una volta che avrai raggiunto la quantit\xE0 massima di Punti Fato, la prossima arma a 5 stelle che sceglierai sar\xE0 quella scelta con "Epitomized Path".',
      "Quando otterrai l'arma scelta in Epitome Invocation con Epitomized Path, <span> i Punti Fato accumulati verranno cancellati</span>.",
      "Se non usi Epitomized Path per ottenere un'arma, non accumulerai Punti Fato.",
      "Il percorso tracciato verso un'arma pu\xF2 essere modificato o annullato. Tuttavia, dopo averlo fatto, tutti i Punti Fato correnti verranno cancellati.",
      "Al termine del periodo di Epitome Invocation, tutti i Punti Fato correnti verranno cancellati."
    ]
  },
  result: {
    skip: "Salta",
    meteorFailed: "Errore nel caricamento dell'animazione della Meteora",
    "new": "Nuovo",
    convertion: "Conversione",
    title: "Risultato del Wish per {item} e altri"
  }
};
const outfit = {
  heading: "Outfit dei personaggi",
  "default": "Default",
  setOutfit: "Seleziona l'Outfit",
  owned: "Gi\xE0 in possesso",
  purchasePrompt: "Non hai ancora un personaggio per questo outfit, sei sicuro di volerlo acquistare?",
  promptInfo: "Potrai ancora usare questo outfit dopo aver ottenuto il personaggio giusto",
  obtained: "New Outfit Obtained",
  unlocked: "{character}: Outfit Unlocked",
  item: {
    "5-star-outrider": {
      name: "5-Star Outrider"
    },
    "favonian-fevotion": {
      name: "Favonian Devotion"
    },
    "flowing-fate": {
      name: "Flowing Fate"
    },
    "executor_s-thorns": {
      name: "Executor's Thorns"
    },
    "sea-breeze-dandelion": {
      name: "Sea Breeze Dandelion",
      description: "L'outfit estivo di Jean. Leggero e alla moda, ma non per questo poco elegante. La scelta perfetta per una gita al mare."
    },
    "summertime-sparkle": {
      name: "Summertime Sparkle",
      description: "L'outfit da spiaggia di Barbara. Questa graziosa gonna trabocca di vitalit\xE0 estiva e porta con s\xE9 una fresca brezza oceanica."
    },
    "opulent-splendor": {
      name: "Opulent Splendor",
      description: "L'outfit formale di Keqing. Nella splendida alba di Lantern Rite, i fili intrecciati in giorni di duro lavoro si uniscono in un aspetto leggero ma magnifico."
    },
    "orchid_s-evening-gown": {
      name: "Orchid's Evening Gown",
      description: "L'outfit formale di Ningguang. La lunga gonna ciano mette in evidenza le sue eleganti curve, e le ali di farfalla alle caviglie conferiscono un leggero tocco di grazia."
    },
    "ein-immernachtstraum": {
      name: "Ein Immernachtstraum",
      description: "L'outfit da cerimonia di Prinzessin. Possa, lei che \xE8 nobile, conservare per sempre il suo coraggio, la sua sincerit\xE0 e la sua gentilezza, in modo tale che nessun male possa mai sopraffarla."
    },
    "red-dead-of-night": {
      name: "Red Dead of Night",
      description: "Uno degli abiti che indossa Diluc durante le azioni segrete, ricorda una fiamma che danza nell'ombra. Le tracce rosso cremisi che lascia ai marigni della visuale del nemico sfregiano per sempre i loro incubi."
    },
    "a-sobriquet-under-shade": {
      name: "Un nomignolo all\u2019ombra",
      description: "Un completo commissionato da Lisa quando \xE8 tornata in visita a Sumeru. Un equilibrio perfetto tra praticit\xE0 ed eleganza, il completo assomiglia alla vecchia uniforme di Lisa ai tempi dell\u2019Akademiya."
    },
    "springbloom-missive": {
      name: "Missiva primaverile",
      description: "Il completo di viaggio di Ayaka. Il suo design si basa sugli abiti di Fontaine raffigurati nelle illustrazioni delle light novel, e sembra rispecchiare lo stile di vita delle gentildonne di quella nazione."
    },
    "blossoming-starlight": {
      name: "Luce stellare fiorente",
      description: "Un delizioso completo che Klee indossa solo per le esibizioni pi\xF9 importanti. Dai colori brillanti, sembra una torta decorata con fiori di panna e coronata da candele scarlatte. Indossandolo, la felicit\xE0 e i sorrisi riempiranno le vostre avventure."
    },
    "sailwind-shadow": {
      name: "Ombra Navigavento",
      description: 'Il completo che Kaeya indossa quando interpreta il "Bandito della Daga". Sebbene sia alquanto appariscente, non \xE8 difficile da indossare, anche se ci vuole del tempo per sistemare tutti quegli accessori e tutte quelle daghe.'
    }
  }
};
const details = {
  text: "Dettagli",
  promotional: "Promotional Items",
  itemlist: "List of Items",
  increasedRate: "Aumento del Tasso di Caduta",
  percentageDrop: "Percentuale di caduta di oggetti a {rarity} stelle: {percentage}",
  wishDetails: "Dettagli dei Wish",
  probInfo: "Probabilit\xE0 base di caduta di oggetti a {rarity} stelle: {singlePercentage} (Incl. guarantee: {avgPercentage})",
  itemWishFor: "Oggetto desiderato :",
  itemType: "Tipo dell'Oggetto",
  itemName: "Nome dell'Oggetto",
  beginnerInfo: "Nessun limite di tempo (si chiude dopo 20 wish)",
  limited: "Evento a Tempo Limitato",
  permanent: "Permanente",
  alert: "\u203B Questo \xE8 un {wishName}. La garanzia dei desideri viene accumulata solo all'interno di questo evento ed \xE8 indipendente dalle garanzie di altri desideri.",
  beginner: [
    "Il <span> Wish </span> per principianti non ha limiti di tempo ed \xE8 rivolto ai viaggiatori che sono atterrati di recente a Teyvat. Sono disponibili personaggi e armi non promozionali. <br /> Nel Wish per principianti, i set da 10 wish costano il <span> 20%</span> in meno di Acquaint Fate, e il tuo primo set da 10 wish includer\xE0 sicuramente {character} , mentre il tuo secondo set da 10 wish includer\xE0 sicuramente un <span> altro </span> personaggio min. a 4 stelle! Il Wish per Principianti sparisce dopo <span> 20 </span> tentativi. Dopo essere sparito, la pagina scomparir\xE0.",
    "\u203B Nella maggior parte dei casi, la probabilit\xE0 di base di tutti i personaggi e le armi \xE8 distribuita uniformemente. Se \xE8 in vigore un boost o una garanzia, fare riferimento alle regole corrispondenti.",
    "\u3013Regole\u3013",
    "Probabilit\xE0 base di vincere un personaggio a 5 stelle = <span> 0.600%</span> <br /> Probabilit\xE0 base di vincere un personaggio a 4 stelle = <span> 5.100%</span>; probabilit\xE0 consolidata (incl. garanzia) = <span> 13.000%</span>;"
  ],
  standard: [
    '"{bannerName}" \xE8 un wish standard senza limiti di tempo. Sono disponibili personaggi e armi non esclusivi per gli eventi.<br/> In questo wish, vincerai <span>sicuramente</span> un oggetto a 4 o pi\xF9 stelle almeno una volta ogni 10 tentativi.',
    "\u203BNella maggior parte dei casi, la probabilit\xE0 base di vincere qualsiasi personaggio o arma \xE8 distribuita uniformemente. Se \xE8 attivo un potenziamento o una garanzia fare riferimento alle rispettive regole.",
    "\u3013Regole\u3013",
    "Probabilit\xE0 base di vincere un oggetto a 5 stelle = <span>0.600%</span>; probabilit\xE0 base di vincere un personaggio a 5 stelle = <span>0.300%</span>, e probabilit\xE0 base di vincere un'arma a 5 stelle = <span>0.300%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 5 stelle = <span>1.600%</span>; \xE8 assicurata la vittoria di un oggetto a 5 stelle almeno una volta ogni <span>90</span> tentativi. <br> Probabilit\xE0 base di vincere un oggetto a 4 stelle = <span>5.100%</span>; probabilit\xE0 base di vincere un personaggio a 4 stelle = <span>2.550%</span>, e probabilit\xE0 base di vincere un'arma a 4 stelle = <span>2.550%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 4 stelle = <span>13.000%</span>; \xE8 assicurata la vittoria di un oggetto a 4 o pi\xF9 stelle almeno una volta ogni <span>10</span> tentativi; probabilit\xE0 di vincere un oggetto a 4 stelle grazie alla garanzia = <span>99.400%</span>, e probabilit\xE0 di vincere un oggetto a 5 stelle grazie alla garanzia = <span>0.600%</span>. "
  ],
  events: [
    `L'Event Wish "{bannerName}" \xE8 disponibile ora. Durante questo evento, il personaggio a 5 stelle <span>esclusivo dell'evento</span> {featuredCharacter} come i personaggi a 4 stelle {rateupCharacters} riceveranno un <span>enorme aumento della percentuale di ottenimento</span>! <br/> <span> \u203B Tra questi personaggi, il personaggio esclusivo dell'evento non sar\xE0 disponibile nel wish "Wanderlust Invocation" standard.</span>`,
    "\u203B Nella maggior parte dei casi, la probabilit\xE0 base di vincere qualsiasi personaggio o arma \xE8 distribuita uniformemente. Se \xE8 attivo un potenziamento o una garanzia fare riferimento alle rispettive regole.",
    "\u3013Regole\u3013",
    "Oggetti a 5 stelle",
    `Per l'Event Wish "{bannerName}": Probabilit\xE0 base di vincere un personaggio a 5 stelle = <span>0.600%</span>; probabilit\xE0 consolidata (incl. garanzia) = <span>1.600%</span>; \xE8 assicurata la vittoria di un personaggio a 5 stelle almeno una volta ogni <span>90</span> tentativi.<br/> C'\xE8 un <span>50.000%</span> di possibilit\xE0 che il primo oggetto a 5 stelle vinto sia il personaggio promozionale {featuredCharacter}. Se il primo personaggio a 5 stelle vinto in questo evento non \xE8 il personaggio promozionale, allora il prossimo personaggio a 5 stelle che vincerai sar\xE0 <span>sicuramente</span> il personaggio promozionale.`,
    "Oggetti a 4 stelle",
    `Per l'Event Wish  "{bannerName}": Probabilit\xE0 base di vincere un oggetto a 4 stelle = <span>5.100%</span>; probabilit\xE0 base di vincere un personaggio a 4 stelle = <span>2.550%</span>, e probabilit\xE0 base di vincere un'arma a 4 stelle = <span>2.550%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 4 stelle = <span>13.000%</span>; \xE8 assicurata la vittoria di un oggetto a 4 o pi\xF9 stelle almeno una volta ogni 10 tentativi; probabilit\xE0 di vincere un oggetto a 4 stelle grazie alla garanzia = <span>99.400%</span>, e probabilit\xE0 di vincere un oggetto a 5 stelle grazie alla garanzia = <span>0.600%</span>. <br/> C'\xE8 un <span>50.000%</span> di possibilit\xE0 che il primo oggetto a 4 stelle vinto sia uno dei personaggi in primo piano tra {rateupCharacters}. Se il primo oggetto a 4 stelle vinto in questo evento non \xE8 uno dei personaggi in primo piano, allora il prossimo oggetto a 4 stelle che vincerai sar\xE0 <span>sicuramente</span> un personaggio in primo piano. Quando vinci un oggetto a 4 stelle in primo piano, la probabilit\xE0 di ottenere un qualsiasi personaggio a 4 stelle in primo piano \xE8 uguale per ciascuno di loro.`
  ],
  weapons: [
    `L'Event Wish "{bannerName}" \xE8 disponibile ora. Durante questo evento, l'arma a 5 stelle esclusive dell'evento {featuredWeapon1}, l'arma a 5 stelle {featuredWeapon2} e l'arma a 4 stelle esclusiva dell'evento {rateupWeapons} riceveranno un <span>enorme aumento della percentuale di ottenimento</span>! <br/> <span> \u203B Tra queste armi, le armi esclusive dell'evento non saranno disponibili nel wish "Wanderlust Invocation" standard.</span>`,
    "\u203B Nella maggior parte dei casi, la probabilit\xE0 base di vincere qualsiasi personaggio o arma \xE8 distribuita uniformemente. Se \xE8 attivo un potenziamento o una garanzia fare riferimento alle rispettive regole.",
    "\u3013Regole\u3013",
    "Oggetti a 5 stelle",
    `Per l'Event Wish "{bannerName}": probabilit\xE0 base di vincere un'arma a 5 stelle = <span>0.700%</span>; probabilit\xE0 consolidata (incl. garanzia) = <span>1.850%</span>; \xE8 assicurata la vittoria di un'arma a 5 stelle almeno una volta ogni <span>80</span> tentativi.<br/> C'\xE8 un <span>75.000%</span> di possibilit\xE0 che la prima arma a 5 stelle vinta sia una delle armi promozionali tra {featuredWeapon1} e {featuredWeapon2}. Se la prima arma a 5 stelle vinta in questo evento non \xE8 una delle armi promozionali, allora la prossima arma a 5 stelle che vincerai sar\xE0 <span>sicuramente</span> un'arma promozionale. Nel caso in cui si ottenga un oggetto promozionale a 5 stelle con un wish senza avere il massimo dei Punti Fato, la probabilit\xE0 di ottenere una qualsiasi arma a 5 stelle \xE8 uguale per ciascuna di loro. <br/> Per l'Event Wish "{bannerName}", puoi tracciare un percorso verso l'arma promozionale a 5 stelle scelta con "Epitomized Path." La scelta dell'arma sar\xE0 valida solo per il periodo dell'Event Wish "{bannerName}". <br/> Per l'Event Wish "{bannerName}", dopo aver tracciato un percorso verso un'arma scelta con "Epitomized Path," se ottieni un'arma a 5 stelle che non \xE8 l'arma scelta, riceverai 1 Punto Fato. Una volta raggiunta la <span>quantit\xE0 massima</span> di Punti Fato, l'arma a 5 stelle successiva sar\xE0 <span>sicuramente</span> l'arma scelta. Una volta ottenuta l'arma scelta, i Punti Fato si resetteranno a <span>0</span>, indipendentemente dal fatto che tu abbia raggiunto o meno il massimo dei punti, e dovrai accumularli nuovamente. Se non usi "Epitomized Path" per tracciare un percorso verso un'arma scelta, <span>not</span> riceverai Punti Fato. <br/> Dopo aver tracciato un percorso verso un'arma scelta, puoi cambiare la tua scelta o annullarla del tutto, ma cos\xEC facendo resetterai i Punti Fato a <span>0</span> e dovrai accumularli nuovamente. <br/> \u203B I Punti Fato per questo Wish in "Epitome Invocation" sono validi solo per il periodo dell'Event Wish. Al termine dell'Event Wish, i Punti Fato si resetteranno a <span>0</span>, e dovrai accumularli nuovamente.`,
    "Oggetti a 4 stelle",
    `Per l'Event Wish "{bannerName}": probabilit\xE0 base di vincere un oggetto a 4 stelle = <span>6.000%</span>; probabilit\xE0 base di vincere un personaggio a 4 stelle = <span>3.000%</span>, e probabilit\xE0 base di vincere un'arma a 4 stelle = <span>3.000%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 4 stelle = <span>14.500%</span>; \xE8 assicurata la vittoria di un oggetto a 4 o pi\xF9 stelle almeno una volta ogni <span>10</span> tentativi; probabilit\xE0 di vincere un oggetto a 4 stelle grazie alla garanzia = <span>99.300%</span>, e probabilit\xE0 di vincere un oggetto a 5 stelle grazie alla garanzia = <span>0.700%</span>. <br/> C'\xE8 un <span>75.000%</span> di possibilit\xE0 che il primo oggetto a 4 stelle vinto sia una delle armi in primo piano tra {rateupWeapons}. Se il primo oggetto a 4 stelle vinto in questo evento non \xE8 una delle armi in primo piano, allora il prossimo oggetto a 4 stelle che vincerai sar\xE0 <span>sicuramente</span> un'arma in primo piano. Quando vinci un oggetto a 4 stelle in primo piano, la probabilit\xE0 di ottenere una qualsiasi arma a 4 stelle in primo piano \xE8 uguale per ciascuna di loro.`
  ],
  convertion: {
    fiveStar: "Le armi a 5 stelle vinte con questo desiderio vengono fornite con {starglitter} \xD710;",
    fourStar: "Le armi a 4 stelle vinte con questo desiderio vengono fornite con {starglitter} \xD72;",
    threeStar: "Le armi a 3 stelle vinte con questo desiderio vengono fornite con {stardust} \xD715."
  },
  duplicate: {
    heading: "\u3013Personaggi Duplicati\u3013",
    text: "Se si ottiene un personaggio che si possiede gi\xE0 (ottenuto in un wish, riscattato dal negozio, o assegnato dal gioco): tra la seconda e la settima volta che si ottiene il personaggio, verr\xE0 convertito in {stellaFortuna} \xD71 del personaggio e {starglitter} {constBonus}; dall'ottava volta in poi verr\xE0 convertito in {starglitter} {fullConstBonus}."
  }
};
const history = {
  title: "Wish History",
  text: "Cronologia",
  resetButton: "Ripristino",
  resetPromptTitle: "Ripristino della Cronologia ?",
  resetPrompt: `Quest'operazione rimuover\xE0 anche tutti i personaggi e tutte le armi relativi al banner "{bannerName}" dal tuo inventario. <br /> Sei sicuro di volere ripristinare?`,
  resetSuccess: "Ripristino effettuato con successo !",
  keepPity: "Don't reset Pity and Guaranteed Status",
  selectWish: "Seleziona il tipo di wish:",
  disclaimer: "Non salviamo mai i tuoi data su archivi cloud. Tutti i dati sono archiviati in IndexedDB, questo significa che sono salvati nella memoria del browser. Non verranno mai eliminati finch\xE8 non li elimini manualmente con il pulsante di eliminazione/ripristino, oppure cancellando i dati del browser.",
  currentPity: "Pity Corrente :",
  totalPull: "Totale Tiri :",
  totalSpend: "Totale Spesa :",
  filterTxt: "Filtro",
  filter: "{rarity} Stella/e",
  filterAll: "Tutto",
  pity: "Pity",
  timeReceived: "Tempo Guadagnato",
  waiting: "Attendere",
  noData: "Nessun dato disponibile .",
  untracked: "Non Rintracciato",
  item: "Oggetto",
  win: "Vittoria 50/50",
  lose: "Perdita 50/50",
  guaranteed: "Assicurato",
  selected: "Oggetto Selezionato",
  olderLayout: "Older Layout",
  switchv2: "Switch to V2"
};
const shop = {
  text: "Negozio",
  paimonBargains: "Paimon Bargains",
  fateNeeded: "\xC8 necessario un {rollQty} {currency} aggiuntivo.",
  primoNeeded: "Acquista con {primoPrice} Primogem ?",
  purchaseUpto: "Acquista fino a 1",
  purchaseConfirm: "Conferma d'Acquisto",
  exchangeHeading: "Oggetto da Scambiare",
  purchaseHeading: "Oggetto da acquistare",
  purchaseButton: "Acquista",
  pay: "Paga",
  product: "Prodotto",
  consume: "Consumo",
  selectPayment: "Seleziona il Tipo di Pagamento",
  unrealWallet: "UnReal Wallet",
  convertPrimo: "Convertire automaticamente in primogem ?",
  proceedPayment: "Procedi al Pagamento",
  qty: "Qty",
  insufficient: "Fondi Insufficienti",
  crystalTopup: "Crystal Top-Up",
  initialBonus: "Bonus prima ricarica",
  bonus: "Bonus",
  buyGenesisHeading: "Compra Genesis Crystal",
  recomendedHeading: "Oggetti Consigliati",
  paimonHeading: "Paimon's Bargains",
  welkinNote: "Pu\xF2 essere acquistato pi\xF9 volte",
  limitedOffer: "Offerta a tempo limitato",
  noLimitTime: "Nessun oggetto a tempo limitato disponibile",
  paymentChilde: "Childe",
  paymentTears: "Tears",
  paymentWakaranai: "Wakaranai",
  recomended: {
    welkin: "Blessing of the Welkin Moon",
    newOutfit: "Nuovi outfit per i personaggi",
    dayRemaining: "Giorni rimanenti: {days}",
    alreadyClaimed: "Gi\xE0 Riscattato oggi",
    instantlyGet: "Ottieni immediatamente",
    dailyGift: "Regalo giornaliero",
    obtainTotal: "Ottieni un totale di {totalGenesis} Genesis Crystal e {totalPrimo} Primogems in 30 giorni",
    claimingBlessing: "Fai click per riscattare le tue ricompense giornaliere di Blessing of the Welkin Moon",
    issuedPurchase: "Rilasciato all'acquisto",
    collect: "Raccogli le ricompense di accesso giornaliere per 30 giorni"
  },
  exchange: {
    starglitter: "Scambio Starglitter",
    stardust: "Scambio Stardust",
    primogem: "Scambia con Primogem"
  },
  item: {
    genesis: "Genesis Crystal",
    primogem: "Primogem",
    intertwined: "Intertwined Fate",
    acquaint: "Acquaint Fate",
    starglitter: "Masterless Starglitter",
    stardust: "Masterless Stardust"
  },
  description: {
    intertwined: "Una pietra fatidica che unisce i sogni. Il suo bagliore pu\xF2 intrecciare destini e unire sogni, proprio come il suo bagliore unisce le stelle alle forme dei desideri di un cuore.",
    acquaint: "Un seme che illumina la notte. Non importa la distanza, guidato dal bagliore della pietra, si incontrer\xE0 il fato sotto le stelle."
  }
};
const inventory = {
  text: "Inventario",
  unsetOutfit: "Outfit Non Selezionato",
  setOutfit: "Seleziona l'Outfit sul Personaggio",
  refinement: "Refinement {count}",
  constellation: "Costellazione {count}",
  extra: "Extra {count}",
  firstSummon: "Evocato per la prima volta alle : {date}",
  notOwned: "Non in Possesso",
  sort: "Ordina",
  rarity: "Rarit\xE0",
  name: "Nome",
  quantity: "Quantit\xE0",
  element: "Elemento",
  release: "Pubblicazione",
  type: "Tipo",
  owned: "In Possesso",
  showAllOption: "Mostra Tutti {item}"
};
const menu = {
  no: "No",
  yes: "S\xEC",
  text: "Menu",
  feedback: "Feedback",
  options: "Opzioni",
  updates: "Aggiorna la Cronologia",
  customBanner: "Custom Banner",
  backupRestore: "Backup & Restore",
  language: "Lingua",
  currency: "Moneta",
  fates: "Numero di desideri",
  unlimited: "Illimitata",
  manual: "Manuale",
  mute: "Muta Audio ed Effetti Sonori",
  switchBanner: "Cambia Banner",
  showAllitems: "Mostra tutti gli oggetti nell'inventario",
  autoskip: "Auto Skip Splash Art",
  animatedbg: "Sfondo Animato",
  multiRoll: "Number per multi-roll",
  factoryReset: "Cancella i Dati e Ripristina",
  resetTitle: "Factory Reset",
  rotate: "Gira per un'esperienza migliore",
  keepSetting: "Keep Settings? <small> Current Pity, Balance and the Settings will not be deleted </small>",
  clearCache: "Clear Caches ( {size} ) ? <small>You will re-load the assets after this action!</small>",
  resetButton: "Ripristina ora",
  resetPrompt: "Sei sicuro di voler cancellare <strong>Tutti i Dati</strong> e ripristinare le impostazioni predefinite ?",
  resetSuccess: "Ripristino effettuato con successo",
  proAccess: "Pro Access",
  getpro: "Get Pro Access",
  removeKey: "Remove Key",
  removeKeyConfirm: "Are you sure to delete the current Key? You will lose all of these benefits until you re-enter the new key!",
  getNewKey: "Get a new one Here!",
  noKey: "Don't have a key?",
  verifyFail: "Failed to verifying AdKey, Check your Connection",
  invalidKey: "Your key is invalid",
  keyExpired1: "Expired Key!",
  keyExpired2: 'Your key: "{key}" has expired since {date}!',
  adFreeUser: "You already have access to the pro features!",
  inputKeyPlaceholder: "Enter Key",
  inputKeyTxt: "Input a Key to get more Benefits !",
  checkingKey: "Verifying Stored Access Key",
  authorNotes: "* I need to say sorry about the ads. Actually I don't want to ruin your wishing experience, but I don't have any Team or Sponsor to keep this app alive. If you don't want to spend anythings, You can still turn on the Ad Blocker or just use custom DNS, I will not forbid you."
};
const itIT = {
  title,
  character,
  weapon,
  vision,
  anemo,
  cryo,
  dendro,
  electro,
  hydro,
  geo,
  pyro,
  bow,
  catalyst,
  claymore,
  sword,
  polearm,
  extra,
  obtained,
  waiting,
  connectionFailed,
  confirmButton,
  cancelButton,
  disclaimer,
  fanmade,
  pressToContinue,
  installInstruction,
  share,
  screenshot,
  capturing,
  rewardFirstShare,
  version,
  donate,
  banner,
  editor,
  customBanner,
  backupRestore,
  wish,
  outfit,
  details,
  history,
  shop,
  inventory,
  menu
};
export {
  anemo,
  backupRestore,
  banner,
  bow,
  cancelButton,
  capturing,
  catalyst,
  character,
  claymore,
  confirmButton,
  connectionFailed,
  cryo,
  customBanner,
  itIT as default,
  dendro,
  details,
  disclaimer,
  donate,
  editor,
  electro,
  extra,
  fanmade,
  geo,
  history,
  hydro,
  installInstruction,
  inventory,
  menu,
  obtained,
  outfit,
  polearm,
  pressToContinue,
  pyro,
  rewardFirstShare,
  screenshot,
  share,
  shop,
  sword,
  title,
  version,
  vision,
  waiting,
  weapon,
  wish
};
