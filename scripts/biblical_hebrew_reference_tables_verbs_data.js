
const amar_root = "alef:mem:resh";

const amar_translation_root = "to say";
const amar_translation_I = "I said, I say, I will say"; 
const amar_translation_you = "you said, you say, you will say";
const amar_translation_he = "he said, he says, he will say";
const amar_translation_imperative = "Say!";
const amar_translation_participle = "Saying";
const amar_translation_infinitiveConstruct = "Saying";

const amar_audioDir = "verbs/v01_amar";

const amar_imperative = "   :  : root1 alef+chatafSegol : root2 mem+cholam  : root3 resh :  |   :  : root1 alef+chirik : root2 mem+schwah : root3 resh : vav+dagesh |  infrequent :  : root1 alef+chirik : root2 mem+schwah : root3 resh+chirik : yod | noVerbPerson";
const amar_participle = "   :  : root1 alef+cholam  : root2 mem+tsere : root3 resh :  |   :  : root1 alef+cholam  : root2 mem+schwah : root3 resh+chirik : yod+finalMem |   :  : root1 alef+cholam  : root2 mem+segol : root3 resh+segol : tav | noVerbPerson";
const amar_infinitiveConstruct = "  frequent : lamed+tsere : root1 alef : root2 mem+cholam  : root3 resh :";
const amar_infinitiveAbsolute = "  infrequent :  : root1 alef+kamatz : root2 mem+cholam  : root3 resh :  * infrequent :  : root1 alef+kamatz : root2 mem : vav+cholamVav : root3 resh :";

const amar_audio_imperative = "  emor |  imru |  imri |";
const amar_audio_participle = "  omer |  omrim |  omeret |";
const amar_audio_infinitiveConstruct = "  lemor";
const amar_audio_infinitiveAbsolute = "  amor * amor";

const amar_I = "   :  : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : tav+dagesh+chirik+yod |   : vav+schwah : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : tav+dagesh+chirik+yod |   : alef+cholam  : root1  : root2 mem+patach : root3 resh :  |   : vav+kamatz+alef+cholam  : root1  : root2 mem+patach : root3 resh :";
const amar_youMs = "   :  : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : tav+dagesh+kamatz * infrequent : heh+segol : root1 alef+chatafSegol : root2 mem+patach : root3 resh+schwah : tav+dagesh+kamatz |   : vav+schwah : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : tav+dagesh+kamatz |   : tav+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh :  |   : vav+patach+tav+dagesh+cholam  : root1 alef : root2 mem+segol : root3 resh :";
const amar_youFs = "   :  : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : tav+dagesh+schwah |   : vav+schwah : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : tav+dagesh+schwah |  infrequent : tav+dagesh+cholam  : root1 alef : root2 mem+schwah : root3 resh+chirik : yod |   : vav+patach+tav+dagesh+cholam  : root1 alef : root2 mem+schwah : root3 resh+chirik : yod";
const amar_he = "  frequent :  : root1 alef+kamatz : root2 mem+patach : root3 resh :  |   : vav+schwah : root1 alef+kamatz : root2 mem+patach : root3 resh :  |   : yod+cholam  : root1 alef : root2 mem+patach : root3 resh :  *  : yod+tsere : root1 alef+kamatz : root2 mem+tsere : root3 resh :  |  frequent : vav+patach+yod+dagesh+cholam  : root1 alef : root2 mem+segol : root3 resh :  *  : vav+patach+yod+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh :";
const amar_she = "   :  : root1 alef+kamatz : root2 mem+schwah : root3 resh+kamatz : heh |   : vav+schwah : root1 alef+kamatz : root2 mem+schwah : root3 resh+kamatz : heh |  infrequent : tav+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh :  |  frequent : vav+patach+tav+dagesh+cholam  : root1 alef : root2 mem+segol : root3 resh :";
const amar_we = "  infrequent :  : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : nun+vav+dagesh |  infrequent : vav+schwah : root1 alef+kamatz : root2 mem+patach : root3 resh+schwah : nun+vav+dagesh |  infrequent : nun+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh :  |   : vav+patach+nun+dagesh+cholam  : root1 alef : root2 mem+segol : root3 resh :";
const amar_youMp = "   :  : root1 alef+chatafPatach : root2 mem+patach : root3 resh+schwah : tav+dagesh+segol+finalMem |   : vav+patach : root1 alef+chatafPatach : root2 mem+patach : root3 resh+schwah : tav+dagesh+segol+finalMem |   : tav+dagesh+cholam  : root1 alef : root2 mem+schwah : root3 resh : vav+dagesh |   : vav+patach+tav+dagesh+cholam  : root1 alef : root2 mem+schwah : root3 resh : vav+dagesh";
const amar_they = "   :  : root1 alef+kamatz : root2 mem+schwah : root3 resh : vav+dagesh |   : vav+schwah : root1 alef+kamatz : root2 mem+schwah : root3 resh : vav+dagesh |   : yod+cholam  : root1 alef : root2 mem+schwah : root3 resh : vav+dagesh * infrequent : yod+chirik+tav+schwah : root1 alef+patach : root2 mem+dagesh+schwah : root3 resh : vav+dagesh |  frequent : vav+patach+yod+dagesh+cholam  : root1 alef : root2 mem+schwah : root3 resh : vav+dagesh";
const amar_youFp = " noVerbPerson | noVerbPerson | noVerbPerson | noVerbPerson";
const amar_theyFp = "noVerbPart  |noVerbPart  |  infrequent : tav+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh+schwah : nun+kamatz+heh |  infrequent : vav+patach+tav+dagesh+cholam  : root1 alef : root2 mem+patach : root3 resh+schwah : nun+kamatz+heh";

const amar_audio_I = "  amarti |  vuhamarti |  omar |  vaomar";
const amar_audio_youMs = "  amarta * heemarta |  vuhamarta |  tomar |  vatomer";
const amar_audio_youFs = "  amart |  vuhamart |  tomri |  vatomri";
const amar_audio_he = "  amar |  vuhamar |  yomar * yeamer |  vayomer * vayomar";
const amar_audio_she = "  amra |  vuhamra |  tomar |  vatomer";
const amar_audio_we = "  amarnu |  vuhamarnu |  nomar |  vanomer";
const amar_audio_youMp = "  amartem |  vaamartem |  tomru |  vatomru";
const amar_audio_they = "  amru |  vuhamru |  yomru * yitamru |  vayomru";
const amar_audio_youFp = "  |  |  |";
const amar_audio_theyFp = "  |  |  tomarna |  vatomarna";



const haya_root = "heh:yod:heh" ;

const haya_translation_root  = "to be" ;
const haya_translation_I  = "I was, I will be" ;
const haya_translation_you  = "you were, you will be" ;
const haya_translation_he  = "he was, he will be" ;
const haya_translation_imperative  = "Be!" ;
const haya_translation_participle  = "being" ;
const haya_translation_infinitiveConstruct  = "to be, being" ;

const haya_audioDir = "verbs/v02_haya" ;

const haya_imperative  = "  :  : root1 heh+chatafSegol : root2 yod+tsere : root3 heh :  |  infrequent :  : root1 heh+chatafSegol : root2 yod : root3  : vav+dagesh |  infrequent :  : root1 heh+chatafPatach : root2 yod+chirik : root3  : yod | noVerbPerson" ;
const haya_participle  = "noVerbPerson | noVerbPerson |  infrequent :  : root1 heh : vav+cholamVav : root2 yod+kamatz : root3 heh :  * infrequent : nun+chirik : root1 heh+schwah : root2 yod+kamatz : root3 heh :  | noVerbPerson" ;
const haya_infinitiveConstruct  = "  : lamed+chirik : root1 heh+schwah : root2 yod : root3  : vav+cholamVav+tav *  : lamed+chirik : root1 heh+schwah : root2 yod+cholam  : root3  : tav *  :  : root1 heh+chatafSegol : root2 yod : root3  : vav+cholamVav+tav" ;
const haya_infinitiveAbsolute  = " infrequent :  : root1 heh+kamatz : root2 yod : vav+cholamVav : root3  :  * infrequent :  : root1 heh+kamatz : root2 yod+cholam  : root3 heh : " ;

const haya_audio_imperative  = " heye |  heyu |  heyi | noVerbPerson" ;
const haya_audio_participle  = "noVerbPerson | noVerbPerson |  hoya * niya | noVerbPerson" ;
const haya_audio_infinitiveConstruct  = " liyot * liyot * heyot" ;
const haya_audio_infinitiveAbsolute  = " hayo * hayo" ;
const haya_I  = "  :  : root1 heh+kamatz : root2 yod+chirik : root3 yod : tav+chirik+yod |   : vav+schwah : root1 heh+kamatz : root2 yod+chirik : root3 yod : tav+chirik+yod |   : alef+segol : root1 heh+schwah : root2 yod+segol : root3 heh :  |   : vav+kamatz+alef+segol : root1 heh+schwah : root2 yod+segol : root3 heh :  *  : vav+kamatz+alef+chatafSegol : root1 heh+chirik : root2 yod : root3  : " ;
const haya_youMs  = "  :  : root1 heh+kamatz : root2 yod+chirik : root3 yod : tav+kamatz * infrequent : nun+chirik : root1 heh+schwah : root2 yod+tsere : root3 yod : tav+kamatz |   : vav+schwah : root1 heh+kamatz : root2 yod+chirik : root3 yod : tav+kamatz * infrequent : vav+schwah : root1 heh+kamatz : root2 yod+chirik : root3 yod : heh |   : tav+dagesh+schwah : root1 heh+chirik : root2 yod : root3  :  *  : tav+dagesh+chirik : root1 heh+schwah : root2 yod+segol : root3 heh :  |  infrequent : vav+patach+tav+dagesh+schwah : root1 heh+chirik : root2 yod+XX : root3  : " ;
const haya_youFs  = " infrequent :  : root1 heh+kamatz : root2 yod+chirik : root3 yod : tav |   : vav+schwah : root1 heh+kamatz : root2 yod+chirik : root3 yod : tav+schwah | noVerbPerson | noVerbPerson" ;
const haya_he  = " frequent :  : root1 heh+kamatz : root2 yod+kamatz : root3 heh :  * infrequent : nun+chirik : root1 heh+schwah : root2 yod+kamatz : root3 heh :  |  frequent : vav+schwah : root1 heh+kamatz : root2 yod+kamatz : root3 heh :  |  frequent : yod+chirik : root1 heh+schwah : root2 yod+segol : root3 heh :  *  : yod+schwah : root1 heh+chirik : root2 yod : root3  :  |  frequent : vav+patach+yod+schwah : root1 heh+chirik : root2 yod : root3  : " ;
const haya_she  = "  :  : root1 heh+kamatz : root2 yod+schwah : root3 tav+kamatz : heh * infrequent : nun+chirik : root1 heh+schwah : root2 yod+kamatz : root3 tav+kamatz : heh |   : vav+schwah : root1 heh+kamatz : root2 yod+schwah : root3 tav+kamatz : heh * infrequent : vav+schwah+nun+chirik : root1 heh+schwah : root2 yod+kamatz : root3 tav+kamatz : heh |   : tav+dagesh+chirik : root1 heh+schwah : root2 yod+segol : root3 heh :  *  : tav+schwah : root1 heh+chirik : root2 yod : root3  :  * infrequent :  : root1 heh+kamatz : root2 yod+schwah : root3 tav+kamatz : heh |   : vav+patach+tav+dagesh+schwah : root1 heh+chirik : root2 yod : root3  : " ;
const haya_we  = "  :  : root1 heh+kamatz : root2 yod+chirik : root3 yod : nun+vav+dagesh |   : vav+schwah : root1 heh+kamatz : root2 yod+chirik : root3 yod : nun+vav+dagesh |  infrequent : nun+chirik : root1 heh+schwah : root2 yod+segol : root3 heh :  |  infrequent : vav+patach+nun+dagesh+schwah : root1 heh+chirik : root2 yod : root3  : " ;
const haya_youMp  = "  :  : root1 heh+chatafSegol : root2 yod+chirik : root3 yod : tav+segol+finalMem * infrequent :  : root1 heh+chatafSegol : root2 yod+chirik : root3  : tav+segol+finalMem |   : vav+chirik : root1 heh+schwah : root2 yod+chirik : root3 yod : tav+segol+finalMem * infrequent : vav+chirik : root1 heh+schwah : root2 yod+chirik : root3  : tav+segol+finalMem |   : tav+dagesh+chirik : root1 heh+schwah : root2 yod : root3  : vav+dagesh * infrequent : tav+dagesh+chirik : root1 heh+schwah : root2 yod : root3  : vav+dagesh+finalNun | noVerbPerson" ;
const haya_they  = "  :  : root1 heh+kamatz : root2 yod : root3  : vav+dagesh |   : vav+schwah : root1 heh+kamatz : root2 yod : root3  : vav+dagesh |   : yod+chirik : root1 heh+schwah : root2 yod : root3  : vav+dagesh |   : vav+patach+yod+dagesh+chirik : root1 heh+schwah : root2 yod : root3  : vav+dagesh" ;
const haya_youFp  = "noVerbPerson | noVerbPerson | noVerbPerson | noVerbPerson" ;
const haya_theyFp  = "noVerbPart | noVerbPart |   : tav+dagesh+chirik : root1 heh+schwah : root2 yod+segol : root3 yod : nun+kamatz+heh *  : tav+dagesh+chirik : root1 heh+schwah : root2 yod+segol : root3 yod : finalNun+kamatz |  infrequent : vav+patach+tav+dagesh+chirik : root1 heh+schwah : root2 yod+segol : root3 yod : nun+kamatz+heh * infrequent : vav+patach+tav+dagesh+chirik : root1 heh+schwah : root2 yod+segol : root3 yod : finalNun+kamatz" ;

const haya_audio_I  = " hayiti |  vuhhayiti |  eyeh |  vaeye * vaehi" ;
const haya_audio_youMs  = " hayita * niyeta |  vuhhayita * vuhhayita |  tuhhi * tiye |  vathi" ;
const haya_audio_youFs  = " hayit |  vuhhayit |  | " ;
const haya_audio_he  = " haya * niya |  vuhhaya |  yiye * yuhhi |  vathi" ;
const haya_audio_she  = " hayta * niyata |  vuhhayta * vuhniyata |  tiye * tuhhi * hayta |  vathi" ;
const haya_audio_we  = " hayinu |  vuhhayinu |  niye |  vanhi" ;
const haya_audio_youMp  = " heyitem * heyitem |  viyitem * viyitem |  tiyu * tiyun | " ;
const haya_audio_they  = " hayu |  vuhhayu |  tiyu |  vayiyu" ;
const haya_audio_youFp  = " |  |  | " ;
const haya_audio_theyFp  = " |  |  tiyena * tiyena |  vatiyena * vatiyena" ;




const diber_root = "dalet:bet+dagesh:resh" ;

const diber_translation_root  = "to say" ;
const diber_translation_I  = "I said, I say, I will say" ;
const diber_translation_you  = "you said, you say, you will say" ;
const diber_translation_he  = "he said, he says, he will say" ;
const diber_translation_imperative  = "Say!" ;
const diber_translation_participle  = "Saying" ;
const diber_translation_infinitiveConstruct  = "Saying" ;

const diber_audioDir = "verbs/v09_diber" ;

const diber_imperative  = "  :  : root1 dalet+dagesh+patach : root2 bet+dagesh+tsere : root3 resh :  |   :  : root1 dalet+dagesh+patach : root2 bet+dagesh+schwah : root3 resh : vav+dagesh |  infrequent :  : root1 dalet+dagesh+patach : root2 bet+dagesh+schwah : root3 resh+chirik : yod+XX | noVerbPerson" ;
const diber_participle  = "  : mem+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh :  *  :  : root1 dalet+dagesh+cholam  : root2 bet+tsere : root3 resh :  * infrequent : mem+schwah : root1 dalet+shureq : root2 bet+dagesh+kamatz : root3 resh :  |  infrequent :  : root1 dalet+dagesh+cholam  : root2 bet+schwah : root3  : yod * infrequent :  : root1 dalet+dagesh+cholam  : root2 bet+schwah : root3 resh+chirik : yod+finalMem |  infrequent : mem+schwah : root1 dalet+patach : root2 bet+dagesh+segol : root3 resh+segol : tav |  infrequent :  : root1 dalet+dagesh+cholam  : root2 bet+schwah : root3 resh+cholam  : tav" ;
const diber_infinitiveConstruct  = "  : lamed+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh :  *  :  : root1 dalet+dagesh+patach : root2 bet+dagesh+tsere : root3 resh : " ;
const diber_infinitiveAbsolute  = "noVerbPerson" ;

const diber_audio_imperative  = " daber |  dabru |  dabri | noVerbPerson" ;
const diber_audio_participle  = " mdaber * dover * mduber |  dovrei * dovrim |  mdaberet |  dovrot" ;
const diber_audio_infinitiveConstruct  = " ldaber * daber" ;
const diber_audio_infinitiveAbsolute  = "noVerbPerson" ;
const diber_I  = "  :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+patach : root3 resh+schwah : tav+dagesh+chirik+yod |   : vav+schwah : root1 dalet+chirik : root2 bet+dagesh+patach : root3 resh+schwah : tav+dagesh+chirik+yod |   : alef+chatafPatach : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh :  |  infrequent : vav+kamatz+alef+chatafPatach : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh : " ;
const diber_youMs  = "  :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+patach : root3 resh+schwah : tav+dagesh+kamatz |   : vav+schwah : root1 dalet+chirik : root2 bet+dagesh+patach : root3 resh+schwah : tav+dagesh+kamatz |   : tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh :  |  infrequent : vav+patach+tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh : " ;
const diber_youFs  = "noVerbPerson | noVerbPerson |  infrequent : tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh+chirik : yod | noVerbPerson" ;
const diber_he  = " frequent :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+segol : root3 resh :  *  :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+tsere : root3 resh :  |   : vav+schwah : root1 dalet+chirik : root2 bet+dagesh+segol : root3 resh :  |   : yod+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh :  |  frequent : vav+patach+yod+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh : " ;
const diber_she  = " infrequent :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+schwah : root3 resh+kamatz : heh | noVerbPerson |  infrequent : tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh :  |  infrequent : vav+patach+tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh : " ;
const diber_we  = " infrequent :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+patach : root3 resh+schwah : nun+vav+dagesh | noVerbPerson |  infrequent : nun+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh :  | noVerbPerson" ;
const diber_youMp  = " infrequent :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+patach : root3 resh+schwah : tav+dagesh+segol+finalMem |  infrequent : vav+schwah : root1 dalet+chirik : root2 bet+dagesh+patach : root3 resh+schwah : tav+dagesh+segol+finalMem |   : tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+schwah : root3 resh : vav+dagesh *  : tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh : vav+dagesh+finalNun | noVerbPerson" ;
const diber_they  = "  :  : root1 dalet+dagesh+chirik : root2 bet+dagesh+schwah : root3 resh : vav+dagesh |  infrequent : vav+schwah : root1 dalet+chirik : root2 bet+dagesh+schwah : root3 resh : vav+dagesh |   : yod+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh : vav+dagesh |   : vav+patach+yod+schwah : root1 dalet+patach : root2 bet+dagesh+schwah : root3 resh : vav+dagesh * infrequent : vav+patach+yod+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh : vav+dagesh" ;
const diber_youFp  = "noVerbPerson | noVerbPerson | noVerbPerson | noVerbPerson" ;
const diber_theyFp  = "noVerbPart | noVerbPart |  infrequent : tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh+schwah : nun+kamatz+heh |  infrequent : vav+patach+tav+dagesh+schwah : root1 dalet+patach : root2 bet+dagesh+tsere : root3 resh+schwah : nun+kamatz+heh" ;

const diber_audio_I  = " dibarti |  vuhdibarti |  adaber |  vaadaber" ;
const diber_audio_youMs  = " dibarta |  vuhdibarta |  tdaber |  vatdaber" ;
const diber_audio_youFs  = " |  |  tdaberi | " ;
const diber_audio_he  = " diber * diber |  vuhdiber |  ydaber |  vaydaber" ;
const diber_audio_she  = " dibra |  |  tdaber |  vatdaber" ;
const diber_audio_we  = " dibarnu |  |  ndaber | " ;
const diber_audio_youMp  = " dibartem |  vuhdibartem |  tdabru * tdabrun | " ;
const diber_audio_they  = " dibru |  vuhdibru |  ydaberu |  vaydabru * vaydaberu" ;
const diber_audio_youFp  = " |  |  | " ;
const diber_audio_theyFp  = " |  |  tdaberna |  vatdaberna" ;


const asah_root = "ayin:sin:heh" ;

const asah_translation_root  = "to make, to do" ;
const asah_translation_I  = "I made, I make, I will make | I did, I do, I will do" ;
const asah_translation_you  = "you made, you make, you will make | you did, you do, you will do" ;
const asah_translation_he  = "he made, he makes, he will make|he did, he does, he will do" ;
const asah_translation_imperative  = "Make! |Do!" ;
const asah_translation_participle  = "making, doing" ;
const asah_translation_infinitiveConstruct  = "making, doing" ;

const asah_audioDir = "verbs/v03_asah" ;

const asah_imperative  = "  :  : root1 ayin+chatafPatach : root2 sin+tsere : root3 heh :  |   :  : root1 ayin+chatafPatach : root2 sin : root3  : vav+dagesh |  infrequent :  : root1 ayin+chatafPatach : root2 sin+chirik : root3  : yod | noVerbPerson" ;
const asah_participle  = "  :  : root1 ayin+cholam  : root2 sin+segol : root3 heh :  *  :  : root1 ayin+cholam  : root2 sin+tsere : root3 heh :  |   :  : root1 ayin+cholam  : root2 sin+chirik : root3  : yod+finalMem *  :  : root1 ayin+cholam  : root2 sin+tsere : root3  : yod |   :  : root1 ayin+cholam  : root2 sin+kamatz : root3 heh :  | noVerbPerson" ;
const asah_infinitiveConstruct  = " frequent : lamed+patach : root1 ayin+chatafPatach : root2 sin : root3  : vav+cholamVav+tav *  :  : root1 ayin+chatafPatach : root2 sin : root3  : vav+cholamVav+tav *  : lamed+patach : root1 ayin+chatafPatach : root2 sin+cholam  : root3  : tav * infrequent : lamed+schwah+heh+tsere : root1 ayin+kamatz : root2 sin : root3  : vav+cholamVav+tav" ;
const asah_infinitiveAbsolute  = "noVerbPerson" ;

const asah_audio_imperative  = " blank |  blank |  blank | noVerbPerson" ;
const asah_audio_participle  = " blank * blank |  blank * blank |  blank | noVerbPerson" ;
const asah_audio_infinitiveConstruct  = " blank * blank * blank * blank" ;
const asah_audio_infinitiveAbsolute  = "noVerbPerson" ;

const asah_I  = "  :  : root1 ayin+kamatz : root2 sin+chirik : root3 yod : tav+chirik+yod |   : vav+schwah : root1 ayin+kamatz : root2 sin+chirik : root3 yod : tav+chirik+yod |   : alef+segol : root1 ayin+chatafSegol : root2 sin+segol : root3 heh :  |  infrequent : vav+kamatz+alef+patach : root1 ayin+patach : root2 sin : root3  : " ;
const asah_youMs  = "  :  : root1 ayin+kamatz : root2 sin+chirik : root3 yod : tav+kamatz |   : vav+schwah : root1 ayin+kamatz : root2 sin+chirik : root3 yod : tav+kamatz |   : tav+dagesh+patach : root1 ayin+chatafPatach : root2 sin+segol : root3 heh :  |  infrequent : vav+patach+tav+dagesh+patach : root1 ayin+patach : root2 sin : root3  : " ;
const asah_youFs  = "  :  : root1 ayin+kamatz : root2 sin+chirik : root3 yod : tav | noVerbPerson |  infrequent : tav+dagesh+patach : root1 ayin+chatafPatach : root2 sin+chirik : root3 yod :  | noVerbPerson" ;
const asah_he  = " frequent :  : root1 ayin+kamatz : root2 sin+kamatz : root3 heh :  *  : nun+patach : root1 ayin+chatafPatach : root2 sin+kamatz : root3 heh :  |   : vav+schwah : root1 ayin+kamatz : root2 sin+kamatz : root3 heh :  |   : yod+patach : root1 ayin+chatafPatach : root2 sin+segol : root3 heh :  *  : yod+tsere : root1 ayin+kamatz : root2 sin+segol : root3 heh :  |  frequent : vav+patach+yod+dagesh+patach : root1 ayin+patach : root2 sin : root3  : " ;
const asah_she  = "  :  : root1 ayin+kamatz : root2 sin+schwah : root3 tav+kamatz : heh * infrequent : nun+segol : root1 ayin+segol : root2 sin+schwah : root3 tav+kamatz : heh |  infrequent : vav+schwah : root1 ayin+kamatz : root2 sin+schwah : root3 tav+kamatz : heh |   : tav+dagesh+tsere : root1 ayin+kamatz : root2 sin+segol : root3 heh :  |  infrequent : vav+patach+tav+dagesh+patach : root1 ayin+patach : root2 sin : root3  : " ;
const asah_we  = " infrequent :  : root1 ayin+kamatz : root2 sin+chirik : root3 yod : nun+vav+dagesh |  infrequent : vav+schwah : root1 ayin+kamatz : root2 sin+chirik : root3 yod : nun+vav+dagesh |   : nun+patach : root1 ayin+chatafPatach : root2 sin+segol : root3 heh :  | noVerbPerson" ;
const asah_youMp  = "  :  : root1 ayin+chatafPatach : root2 sin+chirik : root3 yod : tav+segol+finalMem |   : vav+patach : root1 ayin+chatafPatach : root2 sin+chirik : root3 yod : tav+segol+finalMem |   : tav+patach : root1 ayin+chatafPatach : root2 sin : root3  : vav+dagesh |  infrequent : vav+patach+tav+dagesh+patach : root1 ayin+chatafPatach : root2 sin : root3  : vav+dagesh" ;
const asah_they  = "  :  : root1 ayin+kamatz : root2 sin : root3  : vav+dagesh * infrequent : nun+patach : root1 ayin+chatafPatach : root2 sin : root3  : vav+dagesh |   : vav+schwah : root1 ayin+kamatz : root2 sin : root3  : vav+dagesh |   : yod+patach : root1 ayin+chatafPatach : root2 sin : root3  : vav+dagesh |   : vav+patach+yod+dagesh+patach : root1 ayin+chatafPatach : root2 sin : root3  : vav+dagesh" ;
const asah_youFp  = " infrequent :  : root1 ayin+chatafPatach : root2 sin+chirik : root3 yod : tav+segol+finalNun | noVerbPerson | noVerbPerson | noVerbPerson" ;
const asah_theyFp  = "noVerbPart | noVerbPart |   : tav+tsere : root1 ayin+kamatz : root2 sin+segol : root3 yod : nun+kamatz+heh | noVerbPerson" ;

const asah_audio_I  = " blank |  blank |  blank |  blank" ;
const asah_audio_youMs  = " blank |  blank |  blank |  blank" ;
const asah_audio_youFs  = " blank |  |  blank | " ;
const asah_audio_he  = " blank * blank |  blank |  blank * blank |  blank" ;
const asah_audio_she  = " blank * blank |  blank |  blank |  blank" ;
const asah_audio_we  = " blank |  blank |  blank | " ;
const asah_audio_youMp  = " blank |  blank |  blank |  blank" ;
const asah_audio_they  = " blank * blank |  blank |  blank |  blank" ;
const asah_audio_youFp  = " blank |  |  | " ;
const asah_audio_theyFp  = " |  |  blank | " ;


const bo_root = "bet+dagesh:vav:alef" ;

const bo_translation_root  = "to go in, to enter, to bring in" ;
const bo_translation_I  = "I went in, I go in, I will go in | I brought in, I bring in, I will bring in" ;
const bo_translation_you  = "you went in, you go in, you will go in | you brought in, you bring in, you will bring in" ;
const bo_translation_he  = "he went in, he goes in, he will go in | he brought in, he brings in, he will bring in" ;
const bo_translation_imperative  = "Go in! | Bring in!" ;
const bo_translation_participle  = "entering, bringing in" ;
const bo_translation_infinitiveConstruct  = "entering | bringing in" ;

const bo_audioDir = "verbs/v04_bo" ;

const bo_imperative  = "  :  : root1 bet+dagesh+cholam  : root2  : root3 alef :  * infrequent :  : root1 bet+dagesh : root2 vav+cholamVav : root3 alef :  * infrequent : heh+kamatz : root1 bet+tsere : root2 yod : root3 alef :  |   :  : root1 bet+dagesh+cholam  : root2  : root3 alef : vav+dagesh *  : heh+kamatz : root1 bet+chirik : root2 yod : root3 alef : vav+dagesh |  infrequent :  : root1 bet+dagesh+cholam  : root2  : root3 alef+chirik : yod * infrequent : heh+kamatz : root1 bet+chirik : root2 yod : root3 alef+chirik : yod | noVerbPerson" ;
const bo_participle  = "  :  : root1 bet+dagesh+kamatz : root2  : root3 alef :  *  : mem+tsere : root1 bet+chirik : root2 yod : root3 alef :  * infrequent : heh+patach+mem+dagesh+vav+dagesh : root1 bet+kamatz : root2  : root3 alef :  |   :  : root1 bet+dagesh+kamatz : root2  : root3 alef+chirik : yod+finalMem * infrequent :  : root1 bet+dagesh+kamatz : root2  : root3 alef+tsere : yod |   :  : root1 bet+dagesh+kamatz : root2  : root3 alef+kamatz : heh |  infrequent :  : root1 bet+dagesh+kamatz : root2  : root3 alef : vav+cholamVav+tav" ;
const bo_infinitiveConstruct  = "  : lamed+kamatz : root1 bet : root2 vav+cholamVav : root3 alef :  *  :  : root1 bet+dagesh : root2 vav+cholamVav : root3 alef :  *  :  : root1 bet+dagesh+cholam  : root2  : root3 alef :  *  : lamed+schwah+heh+kamatz : root1 bet+chirik : root2 yod : root3 alef :  *  : heh+kamatz : root1 bet+chirik : root2 yod : root3 alef : " ;
const bo_infinitiveAbsolute  = "noVerbPerson" ;

const bo_audio_imperative  = " blank * blank * blank |  blank * blank |  blank * blank | noVerbPerson" ;
const bo_audio_participle  = " blank * blank * blank |  blank * blank |  blank |  blank" ;
const bo_audio_infinitiveConstruct  = " blank * blank * blank * blank * blank" ;
const bo_audio_infinitiveAbsolute  = "noVerbPerson" ;
const bo_I  = "  :  : root1 bet+dagesh+kamatz : root2  : root3 alef : tav+chirik+yod *  : heh+tsere : root1 bet+tsere : root2  : root3 alef : tav+chirik+yod |   : vav+schwah+heh+tsere : root1 bet+tsere : root2  : root3 alef : tav+chirik+yod * infrequent : vav+dagesh : root1 bet+kamatz : root2  : root3 alef : tav+chirik+yod |   : alef+kamatz : root1 bet : root2 vav+cholamVav : root3 alef :  * infrequent : alef+kamatz : root1 bet+cholam  : root2  : root3 alef :  *  : alef+kamatz : root1 bet+chirik : root2 yod : root3 alef :  |  infrequent : vav+kamatz+alef+kamatz : root1 bet+chirik : root2 yod : root3 alef :  * infrequent : vav+kamatz+alef+kamatz : root1 bet+chirik : root2  : root3 alef :  * infrequent : vav+kamatz+alef+kamatz : root1 bet+cholam  : root2  : root3 alef : " ;
const bo_youMs  = "  : heh+tsere : root1 bet+tsere : root2  : root3 alef : tav+kamatz * infrequent : heh+tsere : root1 bet+tsere : root2 yod : root3 alef : tav+kamatz |   : vav+schwah+heh+tsere : root1 bet+tsere : root2  : root3 alef : tav+kamatz *  : vav+dagesh : root1 bet+kamatz : root2  : root3 alef : tav+kamatz |   : tav+dagesh+kamatz : root1 bet : root2 vav+cholamVav : root3 alef :  *  : tav+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef :  *  : tav+dagesh+kamatz : root1 bet+chirik : root2 yod : root3 alef :  | noVerbPerson" ;
const bo_youFs  = " infrequent :  : root1 bet+dagesh+kamatz : root2  : root3 alef : tav |  infrequent : vav+dagesh : root1 bet+kamatz : root2  : root3 alef : tav |  infrequent : tav+dagesh+kamatz : root1 bet : root2 vav+cholamVav : root3 alef+chirik : yod |  infrequent : vav+patach+tav+dagesh+kamatz : root1 bet : root2 vav+cholamVav : root3 alef : " ;
const bo_he  = "  :  : root1 bet+dagesh+kamatz : root2  : root3 alef :  *  : heh+tsere : root1 bet+chirik : root2 yod : root3 alef :  * infrequent : heh+vav+dagesh : root1 bet+kamatz : root2  : root3 alef :  |   : vav+schwah+heh+tsere : root1 bet+chirik : root2 yod : root3 alef :  *  : vav+dagesh : root1 bet+kamatz : root2  : root3 alef :  *  : vav+schwah+heh+vav+dagesh : root1 bet+kamatz : root2  : root3 alef :  |   : yod+kamatz : root1 bet+cholam  : root2  : root3 alef :  *  : yod+kamatz : root1 bet : root2 vav+cholamVav : root3 alef :  *  : yod+kamatz : root1 bet+chirik : root2  : root3 alef :  * infrequent : yod+vav+dagesh : root1 bet+kamatz : root2  : root3 alef :  |   : vav+patach+yod+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef :  *  : vav+patach+yod+dagesh+kamatz : root1 bet : root2 vav+cholamVav : root3 alef :  *  : vav+patach+yod+dagesh+kamatz : root1 bet+tsere : root2  : root3 alef : " ;
const bo_she  = "  :  : root1 bet+dagesh+kamatz : root2  : root3 alef+kamatz : heh * infrequent : heh+tsere : root1 bet+chirik : root2 yod : root3 alef+kamatz : heh * infrequent : heh+shureq : root1 bet+kamatz : root2  : root3 alef : tav |  infrequent : vav+schwah+heh+tsere : root1 bet+chirik : root2 yod : root3 alef+kamatz : heh |   : tav+dagesh+kamatz : root1 bet : root2 vav+cholamVav : root3 alef :  *  : tav+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef :  * infrequent : tav+dagesh+kamatz : root1 bet+chirik : root2 yod : root3 alef :  |   : vav+patach+tav+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef :  *  : vav+patach+tav+dagesh+kamatz : root1 bet : root2 vav+cholamVav : root3 alef : " ;
const bo_we  = "  :  : root1 bet+dagesh+kamatz : root2  : root3 alef : nun+vav+dagesh | noVerbPerson |   : nun+kamatz : root1 bet : root2 vav+cholamVav : root3 alef :  * infrequent : nun+kamatz : root1 bet+cholam  : root2  : root3 alef :  * infrequent : nun+kamatz : root1 bet+chirik : root2 yod : root3 alef :  |  infrequent : vav+patach+nun+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef : " ;
const bo_youMp  = "  :  : root1 bet+dagesh+kamatz : root2  : root3 alef : tav+segol+finalMem * infrequent : heh+chatafPatach : root1 bet+tsere : root2  : root3 alef : tav+segol+finalMem |   : vav+dagesh : root1 bet+kamatz : root2  : root3 alef : tav+segol+finalMem *  : vav+patach+heh+chatafPatach : root1 bet+tsere : root2  : root3 alef : tav+segol+finalMem |   : tav+kamatz : root1 bet+cholam  : root2  : root3 alef : vav+dagesh * infrequent : tav+kamatz : root1 bet+chirik : root2 yod : root3 alef : vav+dagesh |  infrequent : vav+patach+tav+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef : vav+dagesh" ;
const bo_they  = "  :  : root1 bet+dagesh+kamatz : root2  : root3 alef : vav+dagesh *  : heh+tsere : root1 bet+chirik : root2 yod : root3 alef : vav+dagesh * infrequent : heh+vav+dagesh : root1 bet+schwah : root2  : root3 alef : vav+dagesh |   : vav+dagesh : root1 bet+kamatz : root2  : root3 alef : vav+dagesh *  : vav+schwah+heh+tsere : root1 bet+chirik : root2 yod : root3 alef : vav+dagesh |   : yod+kamatz : root1 bet+cholam  : root2  : root3 alef : vav+dagesh * infrequent : yod+kamatz : root1 bet : root2 vav+cholamVav : root3 alef : vav+dagesh *  : yod+kamatz : root1 bet+chirik : root2 yod : root3 alef : vav+dagesh |   : vav+patach+yod+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef : vav+dagesh *  : vav+patach+yod+dagesh+kamatz : root1 bet+chirik : root2 yod : root3 alef : vav+dagesh *  : vav+patach+yod+dagesh+kamatz : root1 bet+chirik : root2  : root3 alef : vav+dagesh" ;
const bo_youFp  = "noVerbPerson | noVerbPerson | noVerbPerson | noVerbPerson" ;
const bo_theyFp  = "noVerbPart | noVerbPart |  infrequent : tav+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef : nun+kamatz+heh * infrequent : tav+dagesh+schwah : root1 bet+chirik : root2 yod : root3 alef+segol : yod+nun+kamatz+heh |  infrequent : vav+patach+tav+dagesh+kamatz : root1 bet+cholam  : root2  : root3 alef : nun+kamatz+heh" ;

const bo_audio_I  = " blank * blank |  blank * blank |  blank * blank * blank |  blank * blank * blank" ;
const bo_audio_youMs  = " blank * blank |  blank * blank |  blank * blank * blank | " ;
const bo_audio_youFs  = " blank |  blank |  blank |  blank" ;
const bo_audio_he  = " ba * blank * blank |  blank * blank * blank |  blank * blank * blank * blank |  blank * blank * blank" ;
const bo_audio_she  = " blank * blank * blank |  blank |  blank * blank * blank |  blank * blank" ;
const bo_audio_we  = " blank |  |  blank * blank * blank |  blank" ;
const bo_audio_youMp  = " blank * blank |  blank * blank |  blank * blank |  blank" ;
const bo_audio_they  = " blank * blank * blank |  blank * blank |  blank * blank * blank |  blank * blank * blank" ;
const bo_audio_youFp  = " |  |  | " ;
const bo_audio_theyFp  = " |  |  blank * blank |  blank" ;



const verbs = {
   amar_root,

   amar_translation_root,
   amar_translation_I,
   amar_translation_you,
   amar_translation_he,
   amar_translation_imperative,
   amar_translation_participle,
   amar_translation_infinitiveConstruct,

   amar_audioDir,

   amar_imperative,
   amar_participle,
   amar_infinitiveConstruct,
   amar_infinitiveAbsolute,
   amar_audio_imperative,
   amar_audio_participle,
   amar_audio_infinitiveConstruct,
   amar_audio_infinitiveAbsolute,

   amar_I,
   amar_youMs,
   amar_youFs ,
   amar_he ,
   amar_she,
   amar_we,
   amar_youMp,
   amar_they,
   amar_youFp,
   amar_theyFp,
   amar_audio_I,
   amar_audio_youMs,
   amar_audio_youFs ,
   amar_audio_he ,
   amar_audio_she,
   amar_audio_we,
   amar_audio_youMp ,
   amar_audio_they ,
   amar_audio_youFp ,
   amar_audio_theyFp,
   
   
   haya_root,

   haya_translation_root,
   haya_translation_I,
   haya_translation_you,
   haya_translation_he,
   haya_translation_imperative,
   haya_translation_participle,
   haya_translation_infinitiveConstruct,

   haya_audioDir,

   haya_imperative,
   haya_participle,
   haya_infinitiveConstruct,
   haya_infinitiveAbsolute,

   haya_audio_imperative,
   haya_audio_participle,
   haya_audio_infinitiveConstruct,
   haya_audio_infinitiveAbsolute,
   haya_I,
   haya_youMs,
   haya_youFs,
   haya_he,
   haya_she,
   haya_we,
   haya_youMp,
   haya_they,
   haya_youFp,
   haya_theyFp,

   haya_audio_I,
   haya_audio_youMs,
   haya_audio_youFs,
   haya_audio_he,
   haya_audio_she,
   haya_audio_we,
   haya_audio_youMp,
   haya_audio_they,
   haya_audio_youFp,
   haya_audio_theyFp,

   
   diber_root,

   diber_translation_root,
   diber_translation_I,
   diber_translation_you,
   diber_translation_he,
   diber_translation_imperative,
   diber_translation_participle,
   diber_translation_infinitiveConstruct,

   diber_audioDir,

   diber_imperative,
   diber_participle,
   diber_infinitiveConstruct,
   diber_infinitiveAbsolute,

   diber_audio_imperative,
   diber_audio_participle,
   diber_audio_infinitiveConstruct,
   diber_audio_infinitiveAbsolute,
   diber_I,
   diber_youMs,
   diber_youFs,
   diber_he,
   diber_she,
   diber_we,
   diber_youMp,
   diber_they,
   diber_youFp,
   diber_theyFp,

   diber_audio_I,
   diber_audio_youMs,
   diber_audio_youFs,
   diber_audio_he,
   diber_audio_she,
   diber_audio_we,
   diber_audio_youMp,
   diber_audio_they,
   diber_audio_youFp,
   diber_audio_theyFp,
   
   asah_root,

   asah_translation_root,
   asah_translation_I,
   asah_translation_you,
   asah_translation_he,
   asah_translation_imperative,
   asah_translation_participle,
   asah_translation_infinitiveConstruct,

   asah_audioDir,

   asah_imperative,
   asah_participle,
   asah_infinitiveConstruct,
   asah_infinitiveAbsolute,

   asah_audio_imperative,
   asah_audio_participle,
   asah_audio_infinitiveConstruct,
   asah_audio_infinitiveAbsolute,
   asah_I,
   asah_youMs,
   asah_youFs,
   asah_he,
   asah_she,
   asah_we,
   asah_youMp,
   asah_they,
   asah_youFp,
   asah_theyFp,

   asah_audio_I,
   asah_audio_youMs,
   asah_audio_youFs,
   asah_audio_he,
   asah_audio_she,
   asah_audio_we,
   asah_audio_youMp,
   asah_audio_they,
   asah_audio_youFp,
   asah_audio_theyFp,
   
   bo_root,

   bo_translation_root,
   bo_translation_I,
   bo_translation_you,
   bo_translation_he,
   bo_translation_imperative,
   bo_translation_participle,
   bo_translation_infinitiveConstruct,

   bo_audioDir,

   bo_imperative,
   bo_participle,
   bo_infinitiveConstruct,
   bo_infinitiveAbsolute,

   bo_audio_imperative,
   bo_audio_participle,
   bo_audio_infinitiveConstruct,
   bo_audio_infinitiveAbsolute,
   bo_I,
   bo_youMs,
   bo_youFs,
   bo_he,
   bo_she,
   bo_we,
   bo_youMp,
   bo_they,
   bo_youFp,
   bo_theyFp,

   bo_audio_I,
   bo_audio_youMs,
   bo_audio_youFs,
   bo_audio_he,
   bo_audio_she,
   bo_audio_we,
   bo_audio_youMp,
   bo_audio_they,
   bo_audio_youFp,
   bo_audio_theyFp


   
}