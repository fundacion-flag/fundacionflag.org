<template>
  <Layout>
    <header
      class="bg-cool-gray-50 border-b-2 border-cool-gray-200 bg-repeat-x bg-center"
    >
      <div
        class="container pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 -mt-14 lg:-mt-16"
      >
        <transition name="fadeUp">
          <h1
            v-if="show"
            class="text-3xl md:text-4xl lg:text-5xl mt-8 text-cool-gray-700 leading-snug text-center font-serif font-bold"
            style="animation-duration: 0.3s;"
          >
            Aviso de Privacidad
          </h1>
        </transition>
      </div>
    </header>
    <div class="container mx-auto px-6">
      <div class="prose prose-xl mt-12 mx-auto">
        <p>
          El presente documento constituye el Aviso de Privacidad para efectos
          de lo dispuesto en la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares (la “LFPDP”) y las disposiciones que
          emanan de ella o se relacionan con la misma. Este Aviso de Privacidad
          (en lo sucesivo referido como “Aviso”) aplica a la información
          personal recopilada sobre el Postulante o candidato a Beca por la
          Fundación Lorena Alejandra Gallardo, I.A.P. (En lo sucesivo referido
          como FLAG) en su carácter de Responsable.
        </p>
        <ol>
          <li>
            <h3>IDENTIDAD Y DOMICILIO DEL RESPONSABLE.</h3>
            <p>
              El presente Aviso establece los términos y condiciones en virtud
              de los cuales la FLAG, con domicilio para oír y recibir
              notificaciones en Monte Cáucaso No. 915 despacho 304 Col. Lomas de
              Chapultepec C.P. 11000 en México, D.F.; en su carácter de
              Responsable tratará los datos personales del postulante a beca.
            </p>
          </li>
          <li>
            <h3>CONSENTIMIENTO DEL POSTULANTE A BECA.</h3>
            <p>
              Para efectos de lo dispuesto en la Ley Federal de Protección de
              Datos Personales en Posesión de los Particulares (la “LFPDP”) y
              demás legislación aplicable, el postulante a beca manifiesta que
              el presente Aviso le ha sido dado a conocer por el Responsable,
              haber leído, entendido y acordado los términos expuestos en este
              Aviso, por lo que otorga su consentimiento respecto del
              tratamiento de sus datos personales.
            </p>
          </li>
          <li>
            <h3>DATOS PERSONALES QUE RECABAMOS.</h3>
            <p>
              La FLAG es responsable de recolectar información a través de la
              solicitud de beca que llena el interesado a obtener una beca como
              primer paso para iniciar el proceso de selección de beneficiarios
              que puede identificarlo de manera razonable, a título enunciativo
              mas no limitativo como es: nombre y apellidos; fecha de
              nacimiento; edad; domicilio; dirección de correo electrónico;
              número de teléfono fijo y/o celular; Registro Federal de
              Contribuyentes (RFC); credencial de elector o cualquier documento
              vigente que acredite su identidad que contenga firma autógrafa;
              calificaciones; universidad en la que estudia; estado civil;
              cartas de referencia; pasatiempos, empresa donde trabaja o trabajó
              (si es el caso); información de cada integrante de su familia
              directa. Se incluyen datos patrimoniales o financieros como son:
              sueldos, ingresos familiares, bienes inmuebles y muebles
              (incluidos automóviles) de su propiedad y de la de su familia.
            </p>
            <p>
              La persona apoyada se compromete a avisar a la FLAG si existe
              algún cambio en su información personal como puede ser domicilio,
              número telefónico, estado civil, ingresos familiares, o en general
              cualquier cambio en la información que proporcionó.
            </p>
          </li>
          <li>
            <h3>FINALIDAD DE LOS DATOS PERSONALES.</h3>
            <ol type="A">
              <li>
                La FLAG tratará los datos personales del postulante a beca con
                la finalidad de llevar a cabo la sesión donde se toma la
                decisión de aprobar o rechazar la beca a dicho candidato.
              </li>
              <li>
                Una vez aprobada la beca, las personas apoyadas tienen la
                obligación de tener una entrevista mensual de seguimiento con un
                miembro designado por la FLAG, los datos importantes y muchas
                veces personales que resulten de la entrevista quedan
                documentados formando parte de su expediente.
              </li>
            </ol>
          </li>
          <li>
            <h3>
              RESGUARDO DE LOS DATOS PERSONALES AL CONCLUIR EL PERIODO DE BECA Y
              DE LOS POSTULANTES RECHAZADOS.
            </h3>
            <p>
              Al concluir el periodo de beca o al rechazar a un postulante, el
              expediente es archivado en un lugar seguro, sólo personal
              autorizado tiene acceso a éstos y quedan como parte del historial
              de la FLAG.
            </p>
            <p>
              Si una persona apoyada o un postulante rechazado llegara a
              solicitar la devolución de sus documentos, éstos se les
              proporcionarán de inmediato previa firma de recibido indicando los
              documentos que se le entregan.
            </p>
          </li>
          <li>
            <h3>
              COMPROMISO DE LA FUNDACIÓN LORENA ALEJANDRA GALLARDO, I.A.P.
            </h3>
            <p>
              Debido a que la documentación e información recibida por cada
              postulante a beca es estrictamente confidencial, la FLAG se
              compromete a resguardarla en un lugar seguro y a no dar
              información ni datos personales del beneficiario o del postulante
              rechazado a ninguna persona o empresa que lo solicite.
            </p>
          </li>
        </ol>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>