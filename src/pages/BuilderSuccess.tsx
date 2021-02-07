import React, { useContext, useEffect, useCallback, useRef, useState } from 'react'
import emailjs from "emailjs-com"
import { ChosenDataContext } from "./../components/ChosenData"
import lottie from "lottie-web";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { jsPDF } from "jspdf";


export default function BuilderSuccess() {
  
  const { t } = useTranslation()
  const History = useHistory()
  const [Data] = useContext(ChosenDataContext)
  const [homeButtonVisibility,setHomeButtonVisibility] = useState(false)
  const container = useRef <HTMLDivElement> (null)

  let today = new Date()
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();


  const ContractP1 = `
CONTRATO DE DISEÑO Y ADMINISTRACIÓN DE PÁGINA WEB

Entre los suscritos Ismael Muñoz Contreras con domicilio en Topacio 208 Punta Azul, de la ciudad de Pachuca con pleno uso de sus facultades mentales y legalmente autorizado para contratar, en condición de representante legal del negocio con nombre comercial SMORT S.A. DE C.V., quien en el presente contrato se llamará EL CONTRATISTA, y por parte de ${Data.Name} , con domicilio en ${Data.Adress}, con pleno uso de sus facultades mentales y legalmente autorizado para contratar quien en el presente contrato se llamará EL CONTRATANTE.

Reconociéndose las partes capacidad suficiente para contratar y obligarse, se conviene entre ambas partes el presente CONTRATO DE DISEÑO DE PÁGINA WEB que en el presente contrato se llamará EL SITIO WEB, que libre y espontáneamente se sujetan a las siguientes CLÁUSULAS que a continuación se mencionan:

CLÁUSULAS

PRIMERA. OBJETO DEL CONTRATO

LA CONTRATANTE contrata al CONTRATISTA para que realice la labor de DISEÑO DE PÁGINA WEB del sitio web cuyas especificaciones se encuentran relacionadas en los módulos descritos en el ANEXO I.
Prestar con autonomía técnica los servicios de soporte técnico del SITIO WEB objeto del contrato durante el término establecido en este contrato, bajo las condiciones que más adelante se establecen.
PÁRRAFO PRIMERO: Para todos los efectos legales se entenderá que las obligaciones derivadas del presente contrato son el resultado, por tanto habrá incumplimiento en caso tal que la página web no se entregue con las características estipuladas en el ANEXO 1 en el SITIO WEB.
PÁRRAFO SEGUNDO: El CONTRATISTA ejecutará los trabajos y demás condiciones especificadas en el siguiente contrato. Si una actividad o módulo del SITIO WEB no se encuentra específicamente descrita en el ANEXO 1 del presente contrato no será parte integral de los productos o servicios contratados, por tanto se entenderá como un desarrollo o módulo adicional. En este caso EL CONTRATANTE solicitará una cotización por escrito a El CONTRATISTA de tales desarrollos adicionales y no serán parte del presente contrato.
  `; 

  const ContractP2 = `

SEGUNDA. Alcance del Contrato: 
EL CONTRATISTA se obliga, en desarrollo del objeto del presente contrato, a proporcionar la información necesaria para elaborar el trabajo de diseño, bajo los módulos definido en la ANEXO 1 al presente contrato.

TERCERA. Ubicación:
Las actividades descritas podrán desarrollarse en el local que EL CONTRATISTA utilizara para su actividad profesional. En ningún caso, EL CONTRATISTA desplazara a un técnico de su organización al domicilio del CONTRATANTE, para realizar dicha tarea.

CUARTA. Relación:
La relación entre las partes tiene exclusivamente carácter mercantil, no existiendo vínculo laboral alguno entre EL CONTRATANTE y el personal de EL CONTRATISTA. A tal efecto EL CONTRATISTA declara que dicho personal está contratado de conformidad con la Ley.

QUINTA. VALOR DEL CONTRATO Y FORMA DE PAGO:
EL CONTRATANTE pagará a EL CONTRATISTA por la ejecución del presente contrato la suma de: $${Data.SiteChosenPrice}.00 Pesos Mexicanos.
Dicha cifrá será 100% cubierta con un pago inicial total, a la hora de que EL CONTRATANTE haya comprado EL SITIO WEB.

SEXTA. SITIO WEB:
Una vez finalizado el trabajo de Diseño y Programación que será de 7 días, el CONTRATISTA entregara al cliente el link al SITIO WEB instalado previo en un servidor comerical, según se especifica en la cláusula octava.

SEPTIMA. DESCRIPCIÓN DE LA INFRAESTRUCTURA TECNOLOGICA:
El diseño de página web será instalado en un servidor que almacenará la página durante 1 año contado a partir de la compra del dominio de la página web.

OCTAVA. INSTALACIÓN:
EL CONTRATANTE y EL CONTRATISTA pactan como prestación de servicio la instalación del SITIO WEB resultante, teniendo en cuenta las siguientes consideraciones:  
  `;

  const ContractP3 = `

1) La responsabilidad directa por la consecución de la infraestructura tecnológica, la configuración de la misma y el espacio libre en disco duro que se requiera para la página web será exclusiva de EL CONTRATISTA.
2) El SITIO WEB será instalado en el la infraestructura tecnológica que se utiliza en las demás páginas donde se alojan las páginas web de smort.tech, lo que indica que todo costo relacionado con la instalación llevada a cabo por los empleados de EL CONTRATISTA, será cubierto por éste, librando de responsabilidad a EL CONTRATANTE.
3) El proceso de instalación de la página web en el servidor es de 24 horas a partir de la compra del dominio.
4) El proceso de instalación sólo se refiere al montaje, de la herramienta final del SITIO WEB, que obtenga EL CONTRATISTA.

NOVENA. CAPACITACIÓN:
El servicio de capacitación que se presta dentro del presente contrato, se prestara a un grupo de dos personas que el CONTRATISTA DETERMINE PARA ESTE FIN.
1) Este grupo estará conformado por los usuarios comunes de la herramienta.
2) La capacitación será realizada a dos usuarios comunes que defina EL CONTRATANTE. Bajo las siguiente condición:
EL CONTRATISTA brindará un total de dos horas, tomando un día laboral hábil, verificando la disponibilidad de horario entre ambas partes.
3) En ningún caso EL CONTRATANTE dará capacitaciones a usuarios externos de la aplicación, es decir a clientes o personal externo del CONTRATISTA.
d) Se da por hecho que los usuarios al ser capacitados conocen y manejan un navegador de internet, ya que la capacitación no incluye manejo de Software o Hardware adicional, bajo el cual pueda correr la página web construida por EL CONTRATISTA.
e  La capacitación será brindada en las instalaciones de EL CONTRATANTE, en los equipos desde donde es accedida la herramienta, lo que significa que EL CONTRATANTE debe garantizar la disponibilidad de los recursos. Cualquier inconveniente que se presente para dicha disposición, deberá ser informado con un día de anticipación, sin pena de que EL CONTRATISTA quede excepto de asistir a la jornada de capacitación en dicho día.
  
  `;

  const ContractP4 = `

f). El proceso de capacitación comienza, una vez pasados 5 días calendario de la creación de la instalación del SITIO WEB, es decir de la puesta en marcha del sistema. Si pasado este término de tiempo EL CONTRATANTE no ha determinado la fecha de la realización de la capacitación EL CONTRATISTA queda libre de dicha responsabilidad.
g). Ante la eventualidad de diferencias por el cubrimiento de algunos costos que involucra la capacitación, por situaciones no contempladas en el presente contrato, se realizará una evaluación conjunta donde:
1. Si dicho costo no sobrepasa el uno (1) por ciento (%) del valor total del contrato, será cubierto por EL CONTRATISTA.
2. Si dicho costo sobrepasa al valor anteriormente establecido del valor total del contrato, será cubierto en su totalidad por EL CONTRATANTE.
h). En ninguno de los dos casos de capacitación, EL CONTRATISTA realizará entrenamiento sobre los procedimientos de EL CONTRATISTA, cambios de políticas al interior del CONTRATANTE y los cambios culturales que traiga consigo la herramienta, esta labor será exclusiva de EL CONTRATANTE.

DECIMA. PUESTA EN MARCHA:
Como prestación del servicio de puesta en marcha, se define el proceso mediante el cual el producto resultante entrará en operación comercial, significando que los usuarios utilicen la herramienta basados en datos reales. Para ejecutar el proceso de puesta en marcha, se establecen como responsabilidades:
a) EL CONTRATANTE se compromete a solicitar por escrito si desea realizar algún cambio en la página web a EL CONTRATISTA.
b). EL CONTRATISTA no será responsable por información errónea, o incompleta que se encuentre registrada en la plataforma tecnológica actual del CONTRATISTA ni por los efectos que se puedan causar con dicha situación.
c). El proceso de puesta en marcha se define con las siguientes actividades:
1. Una vez terminada la instalación de la página web y firmada el acta de INSTALACION DEL SITIO WEB por parte de EL CONTRATANTE, en comunicación escrita, se entenderá que el trabajo está terminado.
2. En el término de quince días calendario contados desde la emisión de la comunicación de comienzo de la actividad, EL CONTRATANTE elaborará un documento asignando las prioridades sobre el tipo de información que tiene mayor importancia.
 
  `;

  const ContractP5 = `

3. EL CONTRATANTE se encargará de solicitar por escrito todo cambio que se requiera en la página web.
4. Una revisión del correcto ingreso de datos, garantizando la consistencia entre los valores registrados la plataforma tecnológica actual y la información ingresada al SITIO WEB objeto de este contrato, es realizada conjuntamente entre el equipo asignado por EL CONTRATANTE y EL CONTRATISTA.
5. Se realizarán las pruebas con el sistema encontrando los errores, ayudados con el seguimiento de pruebas. EL CONTRATISTA hará las recomendaciones escritas para el correcto ingreso y complementación de datos al SITIO WEB objeto de este contrato.
6. Una vez corregidos los errores de ingreso de información, el SITIO WEB objeto de este contrato pasará a las pruebas de aceptación y a la firma del acta de aceptación del servicio prestado, por parte de quien designe EL CONTRATANTE.

UNDECIMA. PROPIEDAD COMERCIAL:
EL CONTRATISTA reconoce los derechos de propiedad comercial de EL CONTRATANTE sobre el resultado del sistema instalado. Dichos derechos protegen tanto el SITIO WEB, como los datos, listados, diagramas y esquemas elaborados en la fase de análisis, los restantes datos y materiales de apoyo, los símbolos de identificación, las contraseñas, los números de usuario y los símbolo de seguridad. EL CONTRATANTE reconoce que el producto de la labor de programación de EL CONTRATISTA le es cedido al CONTRATISTA para su uso y su reproducción, cesión, venta, alquiler o préstamo y EL CONTRATISTA se compromete a ceder su uso parcial o total y a transmitir los derechos que tenga sobre el en virtud de este contrato. EL CONTRATANTE será también responsable del incumplimiento de estas obligaciones por parte de sus empleados o de terceros que accedieran a el por negligencia del usuario.

DUODECIMA. EXTINCIÓN DEL CONTRATO:
Este contrato se extinguirá por las causas generales establecidas en el Código Civil y en el Código de Comercio y en especial, por incumplimiento de las obligaciones especificadas en este escrito.

  `;

  const ContractP6 = `

DECIMA TERCERA. ACTUALIZACIÓN:
En el caso de que alguna o algunas de las cláusulas del contrato pasen a ser inválidas, ilegales o inejecutables en virtud de alguna norma jurídica, se consideraran ineficaces en la medida que corresponda, pero en los demás, este contrato conservara su validez. Las partes contratantes acuerdan sustituir la cláusula o cláusulas afectadas por otra u otras que tengan los efectos económicos más semejantes a los de las sustituidas.

DECIMO CUARTA. ARBITRAJE:
a). Como primera medida de solución a los conflictos, si los trabajos y obligaciones adquiridos por las partes, no pudieren realizarse normalmente, debido a fuerza mayor o caso fortuito; deberán ser informados (Por escrito) a la parte afectada, dentro de la vigencia del contrato. Una vez estudiados y aprobados se modificará el contrato mediante un acta que formará parte del mismo.
b). Cualquier reclamo o controversia relacionado o surgido del presente contrato, será resuelto de manera directa por las partes, de acuerdo con el procedimiento que se expone a continuación, y cualquiera de las dos partes podrá iniciar dicho procedimiento mediante la entrega a la otra parte de un aviso por escrito conteniendo una descripción del conflicto y el monto involucrado: Tras recibir una demanda, los representantes autorizados de las partes contratantes se reunirán en un lugar y hora acordada para intentar resolver el conflicto mediante negociación. Si el conflicto sigue sin resolución después de esta reunión, cualquiera de las partes podrá iniciar una conciliación obligatoria, siguiendo las reglas necesarias mediante un árbitro autorizado en la ciudad de Pachuca. Salvo cuando las partes contratantes hubiesen acordado renunciar a la mediación, esta se deberá iniciar antes de empezar cualquier otro proceso para la resolución de conflictos.
c). El árbitro tendrá su sede en la ciudad de Pachuca.
d). La prioridad sobre los elementos que forman parte integral del contrato se establece de la siguiente manera:
1.- Documento de especificaciones
2.- Alcance del contrato
3.- Criterios de aceptación, propuesta presentada por el Proveedor, y las demás cláusulas que componen el contrato; todas definidas en cuanto no contradigan el objeto mismo del presente contrato.

  `;

  const ContractP7 = `

DECIMO QUINTA. ALCANCE DEL SOPORTE
Como parte de la responsabilidad de EL CONTRATISTA se establece los siguientes términos de soporte sobre sobre el producto a entregarse:
a) Soporte por trescientos sesenta y cindo días del calendario, contados a partir de la firma del acta de INSTALACION DEL SITIO WEB. Dicho soporte no responde por especificaciones no incluidas dentro del ANEXO 1 sino por errores de funcionalidad que afecten la operatividad de la página web.
b) Corrección remota de los errores detectados por los usuarios sin costo adicional para EL CONTRATANTE. En ninguna instancia la corrección de errores incluidos en este soporte se hará de manera presencial por parte de los técnicos de EL CONTRATISTA en el domicilio de EL CONTRATANTE o en el lugar en donde se encuentre la plataforma informática de EL CONTRATANTE. El presente soporte no cobija aquellas modificaciones que lleven a cambios de la funcionalidad.
c) No se cuenta como error del sistema: Los errores de uso y operación por partes de usuarios finales y/o administradores del sistema, modificaciones al código realizado por personas ajenas a EL CONTRATISTA, cambios o ajustes por adaptación de la plataforma bajo la cual funciona el sistema (Nuevas versiones del sistema operativo, actualización de Hardware, actualización en la red, nuevos equipos que accedan la información al tiempo), efectos secundarios o colaterales causados por el mal funcionamiento del Sistema operativo del servidor, cambios o ajustes de mejora funcional (Nueva legislación, nuevas consultas, cambio de políticas gerenciales de EL CONTRATANTE). Si EL CONTRATANTE no ha notificado la existencia de defectos al CONTRATISTA durante el referido plazo, se considerara que está conforme en todos los aspectos con el funcionamiento de la página, renunciando, a partir de entonces, a cualquier reclamación.

DUODECIMA. RESPONSABILIDADES:
1) EL CONTRATISTA no será responsable de los retrasos en la ejecución de las obligaciones derivadas de este contrato o interrupción del servicio, cuando estos sucedan por causas ajenas a su voluntad y no le sean imputables.
2) EL CONTRATISTA no se hace responsable de las pérdidas o daños sufridos por EL CONTRATANTE, sus empleados o clientes, directamente o indirectamente originados por errores en la operación de los programas, su documentación, el uso de un hardware o sistema operativo no autorizado por EL CONTRATISTA o por la modificación o eliminación del código fuente del programa o del contenido de la información ingresada en la base de datos.

  `;

  const ContractP8 = `
3) EL CONTRATANTE se compromete a nombrar un responsable quien se encargará de:
a) la programación de reuniones, b) Asignar recursos al proyecto, c) Firmar las actas de aceptación de los productos entregados, Las pruebas, mantenimiento, instalación y capacitación.
4) EL CONTRATANTE se compromete salvo excepciones extraordinarias a solicitar todo cambio en la página web por escrito.

6) EL CONTRATISTA se compromete a garantizar la seguridad y disponibilidad de sus sistemas informáticos tales como: Servidor, acceso a Internet, firewall, sistema de copias de seguridad y seguridad de la base de datos, y en ningún caso EL CONTRATISTA será responsable de los retrasos o pérdida de información causados por la falta de las condiciones idóneas de seguridad de la información. EL CONTRATISTA declara y garantiza que su infraestructura tecnológica se encuentra libre de Virus, que su infraestructura tecnológica proporciona las garantías para evitar: ataques e intrusiones de hackers, ataques de negación de servicio, eliminación o desinstalación parcial o total del SITIO WEB objeto de este contrato, eliminación parcial o total de la información almacenada en el motor de base datos asociado al SITIO WEB objeto de este contrato y fallas del sistema operativo del servidor. En ningún caso EL CONTRATANTE será responsable de reinstalar el SITIO WEB objeto de este contrato por las razones anteriormente enumeradas.
7) EL CONTRATANTE entiende que LOS SISTEMAS informáticos pueden llegar a fallar al ser artículos electrónicos y que en caso de haber un error en el servidor el CONTRATISTA se obliga a reparar el servidor de manera inmediata.
8) Para la entrega final pactada por las partes, EL CONTRATANTE elaborará la respectiva acta de entrega y aceptación del INSTALACIÓN DEL SITIO WEB debidamente firmada, como constancia de satisfacción de los productos entregados.
9) EL CONTRATANTE es responsable por los sobretiempos que causen los cambios que sean solicitados y aprobados, los cuales serán notificados para hacer un estimado de sobrecostos.
10) En caso de demoras en las revisiones del SITIO WEB, se dará un plazo de diez días calendario para subsanar la situación, si pasado dicho tiempo no se ha sido cumplido el requisito, por parte del EL CONTRATANTE, EL CONTRATISTA dará por aceptada la revisión y podrá continuar con las tareas subsiguientes.
  
  `;

  const ContractP9 = `

11) EL CONTRATANTE en caso de querer resindir el presente contrato, ya sea por causa voluntaria, judicial o fortuita, acepta que todo pago que haya realizado al CONTRATISTA no le sera devuelto, porque el trabajo de diseño web es un trabajo de arte, proceso que requiere diseñadores graficos que cobran por hora, programadores que cobran su servicio por hora y pago de servidor y dominio, por lo cual el CONTRATISTA cubrira todo gasto mientras que el contratante cubre el pago total de su obligacion.
12) EL CONTRATISTA se hará responsable de brindar el acompañamiento para la implantación del programa objeto de este contrato en los siguientes puntos: Resolver dudas sobre el funcionamiento vía telefónica, haciendo ejemplos y pruebas con el personal que el CONTRATISTA destine para tal fin dentro del periodo de duración del contrato.
13) EL CONTRATANTE es el único responsable de determinar si los servicios que constituyen el objeto de este Contrato se ajustan a sus necesidades por medio del ANEXO 1, por lo que el CONTRATISTA no garantiza que el servicio de desarrollo de la página web prestado se ajuste a las necesidades específicas del CLIENTE mas allá de los especificacado en el ANEXO 1.
14) EL CONTRATANTE se obliga a hacer constar de forma clara, visible y accesible desde sus contenidos, sus datos identificativos y como único responsable de los contenidos, poniendo un aviso en sus contenidos de la Política de uso.

DECIMO TERCERA. CONFIDENCIALIDAD:
EL CONTRATISTA garantiza que su servidor, donde están guardados todos los datos, Información Confidencial, código de programación, esquema de base de datos cumple con todas las medidas de seguridad que garantizan la confidencialidad y seguridad del tratamiento de sus datos, y garantiza la más absoluta seguridad de la información. La información sumistrada por EL CONTRATANTE a EL CONTRATISTA será manejada por EL CONTRATISTA bajo los principios de confidencialidad y seguridad vigentes. EL CONTRATANTE puede confiar en que la información personal suministrada de manera verbal o por escrito sólo será utilizada por EL CONTRATISTA para desarrollar la página en razón de ser del presente contrato y en ningún caso será divulgada o revelada a persona u organización alguna. Al facilitar sus datos, EL CONTRATANTE declara a EL CONTRATISTA que son veraces, en la medida de su conocimiento.
  
  `;

  const ContractP10 = `
DECIMO CUARTA. DURACIÓN:
De acuerdo con la propuesta brindada por el CONTRATISTA, este contrato tendrá una duración de 12 meses calendario contados a partir de la expedición del pago, fecha en la cual EL CONTRATISTA ya debe haber entregado todas las obligaciones adquiridas y EL CONTRATANTE debe estar al día en las obligaciones de pago con EL CONTRATISTA.

DECIMA QUINTA. LEY APLICABLE:
Este contrato se celebra y las obligaciones derivadas de su suscripción serán ejecutadas en territorio Mexicano. Por lo anterior, son las leyes de la República Mexicana las que rigen en todas sus partes el presente contrato y conforme a ellas deberá interpretarse así como solucionarse cualquier diferencia que eventualmente tenga lugar entre las partes. Leído el presente contrato y para que así conste, y en prueba de conformidad y aceptación al contenido de este contrato, EL CONTRATANTE Y EL CONTRATISTA firman por duplicado en la fecha y lugar indicados en cada una de las páginas que constan en el presente contrato a los ${dd} días del mes ${mm} del año ${yyyy}.


ANEXO I

Especificaciones del Sitio

Tipo de Sitio: ${Data.SiteType}
Estilo de la Página: ${Data.PageStyle}
Estilo de los Botones: ${Data.ButtonStyle}
Estilo del Cargador: ${Data.LoaderStyle}
Color #1: ${Data.Color1}
Color #2: ${Data.Color2}
Extensión del dominio ${Data.DomainExtension}

Detalles:
${Data.Details}


  `;

    const sendEmail = useCallback(() => {

      if (Data.MongoDBOrderId !== 0){
              
        emailjs
        .send(
            "service_h86ldsp",
            "template_6p0vh3t",
            {
                Name: Data.Name,
                Email: Data.Email,
                Phone: Data.Phone 

            },
            "user_TpS9YP6Fwr4okNaN6XOOH"
        )
        .then(
            (response) => {
            console.log("SUCCESS!", response.status, response.text);
            },
            (err) => {
              console.log("FAILED...", err);
            }
            );
        
          const DownloadContract = () => {
      
            var doc = new jsPDF({
              format: [250,300]
            })
      
            doc.text(ContractP1, 20,20, {
              align: "left",
              maxWidth: 200
            })
            doc.addPage()
            doc.text(ContractP2, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP3, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP4, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP5, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP6, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP7, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP8, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP9, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
            doc.addPage()
            doc.text(ContractP10, 20, 20, {
              align: "left",
              maxWidth: 200,
            });
      
      
      
            doc.save("CreatedContract.pdf")
            
      
            var element = document.createElement("a");
      
            element.setAttribute(
              "href", "./CreatedContract.pdf")
            element.setAttribute("download", "Contract.pdf");
            element.style.display = "none";
            element.click();
            setHomeButtonVisibility(true);
          };
        
          setTimeout(() => {
          DownloadContract();
        }, 4000);
      }


      const DownloadContract = () => {
        var doc = new jsPDF({
          format: [250, 300],
        });

        doc.text(ContractP1, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP2, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP3, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP4, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP5, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP6, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP7, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP8, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP9, 20, 20, {
          align: "left",
          maxWidth: 200,
        });
        doc.addPage();
        doc.text(ContractP10, 20, 20, {
          align: "left",
          maxWidth: 200,
        });

        doc.save(`${Data.Name}'s Contract.pdf`);
        setHomeButtonVisibility(true);

        // var element = document.createElement("a");

        // element.setAttribute("download", "Contract.pdf");
        // element.setAttribute("href", "./CreatedContract.pdf");
        // element.style.display = "none";
        // element.click();
      };

      DownloadContract()

    }, [Data.MongoDBOrderId])
    
    useEffect(() => {
        sendEmail()
    },[sendEmail])

    useEffect(() => {

        if (container && container.current){
            lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: require("./../resources/Working.json"),
            })
        }

    },[])


    return (
      <motion.div
        className="BuilderSuccessPage"
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
      >
        <div className="TextSuccessBox">
          <h1>{t("BuilderSuccess.Title")}</h1>
          <p>
            {t("BuilderSuccess.Paragraph")}
            <br />
            <br />
            {t("BuilderSuccess.Footer")}
          </p>
        </div>
        <div className="lottieContainer" ref={container}></div>
        <button
          className="HomeButton"
          onClick={() => History.push("/")}
          style={
            homeButtonVisibility
              ? { opacity: 1, transition: "opacity 500ms" }
              : { opacity: 0, transition: "opacity 500ms" }
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z" />
          </svg>
        </button>
      </motion.div>
    );
}
