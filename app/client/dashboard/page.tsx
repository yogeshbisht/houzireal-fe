import ExpansionPanel from "@/components/shared/expansion-panel";
import { Accordion } from "@/components/ui/accordion";
import { COLORS_ARRAY } from "@/constants/colors";
import SavedFavorites from "./components/saved-favorites";
import SearchBar from "@/components/common/search-bar";

const ClientDashboardPage = () => {
  return (
    <>
      <SearchBar />
      <div className="max-w-4xl p-8">
        <Accordion type="single" collapsible>
          <SavedFavorites />
          {Array.from([1, 2, 3]).map((item) => (
            <ExpansionPanel
              key={item}
              title={`Expansion Panel ${item}`}
              numberOfRows={item}
              backgroundColor={COLORS_ARRAY[item - 1]}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              nam a perspiciatis! Eius quia architecto autem ducimus doloribus
              non accusamus porro earum culpa repudiandae quis reiciendis
              nesciunt aut, dignissimos voluptatibus ipsam consectetur officia
              soluta in fuga minus deserunt omnis esse! Modi ullam eligendi
              officia labore, iste minima? Facere distinctio consequatur dolorem
              nostrum tempora aspernatur! Autem quibusdam, voluptatum aut amet,
              rem sunt sint nam vitae hic ducimus facilis placeat minima nemo
              maxime iusto ullam officiis ut soluta aliquid magni reprehenderit.
              Assumenda corrupti exercitationem nobis quis voluptate, voluptatum
              tempora facilis molestiae repellat velit quia sit laborum qui
              cumque libero quisquam. Repudiandae cupiditate, culpa eius
              distinctio voluptates molestias eos voluptatem amet tempore
              voluptatum cumque enim ab ratione veritatis laborum quam fugiat
              pariatur quia harum accusamus! Maiores id assumenda delectus
              voluptatem, itaque eaque ipsam nostrum. Qui, laudantium. Obcaecati
              voluptas alias, nisi fuga porro ipsum ea mollitia, praesentium
              harum tenetur eaque repellendus, exercitationem qui dolorem
              accusantium. Cumque fuga mollitia doloremque hic odit ea dolorum
              beatae ab qui deleniti sint, nulla at placeat iste optio
              veritatis, nemo ut libero quae. Doloremque dolorum, iure explicabo
              aliquid voluptate culpa aspernatur suscipit incidunt nobis
              voluptates quis tempora atque adipisci voluptatibus, eaque rerum,
              tenetur rem perferendis eligendi mollitia. Architecto, tempora!
            </ExpansionPanel>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default ClientDashboardPage;
