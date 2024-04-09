import { layout } from "./styles/layout";
// import Badge from "./ui/Badge";
// import Button from "./ui/Button";
// import Form from "./ui/Form";
import Header from "./ui/Header";
import * as stylex from "@stylexjs/stylex";

const side = stylex.create({
  default: {
    backgroundColor: "red",
    borderRadius: "16px",
  },
  aesthetic: {
    maxHeight: "calc(100vh - 4.8rem)",
  },
});

function App() {
  return (
    <div {...stylex.props(layout.default, layout.homePage)}>
      <Header></Header>
      <div {...stylex.props(side.default, side.aesthetic)}></div>
      <div {...stylex.props(side.default)}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
        eligendi tenetur accusamus, aut magni dolor unde asperiores dolorum
        numquam similique saepe? Deleniti, quis ex sequi veritatis eaque beatae
        aut exercitationem! Cum, omnis ducimus? Accusantium minus doloribus
        veritatis labore ad quaerat at error incidunt neque amet quos, et
        recusandae. Aperiam voluptatem quo nobis dignissimos, ipsam animi
        temporibus harum aut laborum repellendus maiores recusandae, nemo quae
        officia perspiciatis sed. Magni, temporibus iure minus, qui animi quasi
        optio fugit nam inventore, fuga rem. Quod sunt non corrupti eaque
        recusandae fugiat ut perferendis quo! Rerum, odit ab mollitia incidunt
        facere nobis magni ad tempore non neque placeat eaque voluptatum
        perferendis explicabo quos corporis, maxime voluptates, excepturi beatae
        nihil. A delectus repellendus libero dolore quos! Quam esse ipsa
        quisquam assumenda tenetur illo ea ad, enim veritatis beatae ullam
        officiis dolores hic et dolorum optio cum? Dolores, cumque inventore sed
        molestias accusamus dolore mollitia tenetur non repudiandae sapiente
        distinctio similique provident doloribus assumenda quibusdam
        perferendis. Doloribus illo in vel minus iusto inventore impedit culpa
        eum doloremque optio dicta eos velit, iste natus, nemo, esse repudiandae
        ipsa ex! Tempora optio beatae vel similique perspiciatis distinctio nam
        sapiente possimus nemo dolorem iste tenetur, ipsa cumque, odit
        reiciendis maxime quod tempore pariatur quia quaerat? Totam, quae
        voluptas architecto suscipit blanditiis quidem animi qui voluptatem
        nobis consequuntur. Neque ipsam reiciendis ipsa officiis ab nesciunt
        consequuntur cumque dolores eligendi, ad tempora cupiditate delectus
        vitae quam doloremque! Dolorem, quae debitis architecto at, eum illo
        soluta ipsa obcaecati deserunt sapiente nam maxime totam dolore veniam
        aliquam cum odit numquam! Delectus, aperiam officiis illo natus
        similique facilis sint fuga provident consequatur reiciendis, libero
        sed! Accusantium voluptas porro nam aliquid labore fugiat alias quas ut
        consequuntur? Rem earum officiis eveniet error! Ut eveniet, tempora
        neque accusamus facere, incidunt, laboriosam expedita doloremque
        delectus in nulla explicabo saepe pariatur corporis? Quaerat, delectus
        ipsum nulla praesentium consequatur eos doloribus, maiores voluptatum
        temporibus distinctio dolore quia nihil quis quos libero hic cupiditate,
        eligendi aspernatur atque. Consequatur ab necessitatibus officiis,
        tenetur maiores quia nihil accusantium, ad quasi labore ut sed provident
        dicta corrupti! Iusto atque vitae fugit provident cumque repellendus
        voluptas expedita? Molestiae perspiciatis omnis odit quae optio eum
        iusto, a unde doloribus ab eius voluptas debitis laborum repellendus
        excepturi voluptatibus ea, rerum quam perferendis praesentium facere
        sed! A assumenda possimus optio aliquam distinctio dignissimos debitis
        unde saepe excepturi recusandae accusamus mollitia doloribus, maiores,
        facere dolore nulla velit tempora dicta. Ratione officia vel asperiores,
        sit nam reprehenderit, necessitatibus aut magni consequuntur laboriosam
        accusantium? Blanditiis dolore facilis in, est, similique iste ab
        laudantium nihil, modi vitae voluptas maxime perspiciatis eum. Nesciunt
        in accusantium aliquam, hic officiis voluptatem quas, quidem provident
        blanditiis quisquam nemo asperiores debitis modi recusandae. Asperiores
        excepturi ab aliquam veritatis inventore deleniti quia voluptas corrupti
        et provident nemo quibusdam, eveniet esse aperiam distinctio quasi
        voluptate doloribus atque eligendi perferendis? Possimus accusantium
        odio eveniet qui sit delectus eligendi amet nisi neque veritatis. In
        harum labore placeat. Quas quae fugiat animi perspiciatis corrupti
        architecto molestias nobis voluptatibus qui. Consectetur laboriosam
        ratione optio sed repudiandae doloremque obcaecati commodi error vitae
        expedita, fugiat nemo odit sint rem dignissimos? Adipisci est pariatur,
        nulla facere quaerat facilis esse sint praesentium tempore, porro quod
        eveniet, ipsam maxime odio dolores fugit similique. Quos non ipsa quia,
        dolorem voluptatum, minus voluptas nulla blanditiis cum quam ipsum
        laboriosam officia assumenda provident nemo a officiis et possimus.
        Labore facere unde reiciendis, suscipit ipsa ex rem quas quibusdam
        nesciunt minus, atque enim commodi neque nulla magnam cumque aspernatur
        rerum tenetur culpa! Voluptatum distinctio blanditiis neque iusto.
        Blanditiis sint similique minus ullam enim inventore explicabo
        veritatis. Molestias animi tempora dolore veniam temporibus unde,
        aspernatur, recusandae nisi hic laboriosam fugit id voluptatem itaque
        nulla qui dolorem beatae autem. Aut, modi. Eum voluptates alias dolorem
        ipsum, tempora ullam quae pariatur nisi velit fugit id sint dolorum at
        voluptatibus voluptate. Perspiciatis, ullam tempora autem magnam
        delectus at praesentium. At aperiam rerum recusandae consequatur harum
        temporibus deserunt in iure qui id labore, consectetur, officia placeat
        unde suscipit quod corrupti quisquam, sit architecto asperiores dicta
        deleniti. Tenetur autem at ab? Quam recusandae impedit harum incidunt
        doloribus, eaque porro, sit iste labore voluptate nesciunt accusantium
        eligendi maiores facere? Non, totam laboriosam facilis placeat
        praesentium quaerat. Fugit, quaerat nemo, alias numquam sint similique
        eos explicabo iusto aperiam quo sunt facilis qui officia quisquam at,
        provident nulla nihil non? Magni rem, optio nihil iste suscipit
        repellendus. Facere ipsam dolor possimus a assumenda, qui aspernatur
        doloribus, odio ullam, reiciendis blanditiis quaerat et dolorem pariatur
        enim iusto aperiam obcaecati odit beatae quas. Et odit eius nam aut
        soluta cum nulla, amet cumque beatae voluptates magni accusamus,
        provident natus dolor eaque aliquid minus nobis, illum vero architecto
        dolorem ab esse modi temporibus? Tempora sit nam facilis dignissimos
        odio ipsa, eveniet ut magni pariatur rerum voluptatum rem debitis.
        Perspiciatis repudiandae quae atque laborum ullam deserunt consequuntur
        ipsum? Officiis natus molestiae ullam perspiciatis ipsam? Eveniet amet,
        ipsa voluptatum reprehenderit rerum quia dicta veritatis non suscipit
        nulla dolor inventore molestiae corporis, laudantium pariatur ut harum
        omnis a. Illo illum omnis quis vero excepturi! Maiores, perspiciatis
        nesciunt, iusto doloribus fugiat itaque nostrum totam laborum corrupti
        incidunt, sed iure. Atque cumque molestiae, consequuntur, dolorem ex
        tempora accusamus fuga vitae, saepe impedit obcaecati asperiores
        voluptas maiores soluta corrupti culpa dicta qui. Perferendis incidunt
        et dolorem delectus molestias assumenda mollitia distinctio reiciendis
        nesciunt adipisci expedita dignissimos tenetur non ipsa, doloremque enim
        magnam quam architecto ab eaque? Ullam ipsum maiores unde reiciendis
        quae totam, nobis doloremque consequatur officiis porro neque facilis
        quibusdam repellat ipsa excepturi quisquam nam sequi praesentium tempore
        ea voluptate? Recusandae consequatur perferendis ab magni soluta. Hic
        deserunt ex impedit harum saepe quod quae ad vel, at labore dignissimos
        aliquid soluta expedita eos minus itaque eaque nobis perferendis sit,
        quis mollitia! Blanditiis ullam quos optio, est placeat consequatur,
        recusandae quod expedita voluptatum quisquam molestias nulla excepturi
        doloremque. Deserunt, quod. Perspiciatis consequuntur esse voluptatum
        corrupti. Facilis fugit corrupti quae praesentium illum velit error. Ut
        nulla quas ad quae adipisci iure eaque porro dignissimos architecto?
        Excepturi cum mollitia voluptatum nostrum quasi?
      </div>
    </div>
  );
}

export default App;
