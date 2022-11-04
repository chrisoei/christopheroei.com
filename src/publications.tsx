
import { blobURL } from "./common"

export const publications = () => {
    return (<div className="publications content-section">
        <h2>Publications</h2>
        <ul>
            <li>
                <a href={blobURL({
                    sha2_256: "84dc05ce223b99e6b23aa1a91c2b0216f16353dfcf19f71f9eefdc2c3863654b",
                    ext: "pdf"
                })}>Walsh Function Analysis of Genetic Algorithms of Non-binary Strings</a>
            </li>
            <li>
                <a href={blobURL({
                    sha2_256: "d5892c6edc64b7963c3a97e4ab0d785b0b4a040ed47fb9816943610ce825a631",
                    ext: "pdf"
                })}>Tournament Selection, Niching, and the Preservation of Diversity</a>
            </li>
            <li>
                <a href={blobURL({
                    sha2_256: "bbfae219246fa05f2e4df0181ca892157e39752ca80ecf6c1992d18c2c42e899",
                    ext: "pdf"
                })}>Turing Undecidability and the Efficient Market Hypothesis</a>
            </li>
        </ul>
    </div>
    )
}
