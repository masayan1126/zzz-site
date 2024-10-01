"use client";

import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type Article = {
  _title: string;
  content: string;
};

export default function EnemyStrategyDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    (async () => {
      const myHeaders = new Headers();
      myHeaders.append(
        "X-NILTO-API-KEY",
        process.env.NEXT_PUBLIC_X_NILTO_API_KEY ?? ""
      );

      const response = await fetch(
        `https://cms-api.nilto.com/v1/contents/${id}`,
        {
          headers: myHeaders,
        }
      );
      const data = await response.json();
      setArticle(data);
    })();
  }, [id]);

  return (
    <div
      style={{
        padding: "40px 30px",
      }}
    >
      {article && (
        <div>
          <h1>{article._title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      )}
    </div>
  );
}
// "<div><h3>本記事で対象となるプロキシ様</h3><ul><li>タナトスがとにかく苦手で、行動パターンと立ち回りを知りたい</li></ul><p class='test'>動画での解説もありますので、こちらもよければご覧ください。</p><iframe allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen='' frameborder='0' height='315' src='https://www.youtube.com/embed/0fDRPQrJ3CE' title='YouTube video player' width='560'></iframe><h2>主な攻撃パターンと立ち回り</h2><h3>弓矢</h3><img src='https://cms-assets.nilto.com/spaces/593691702/media/200880106/_/361092137-5efff6ba-8153-4fe1-87c1-d0f765334bce.png'/><h4>特徴</h4><ul><li>距離が遠いときに多い</li><li>控えに回避支援（スローモーションになるやつ）のメンバーがいればパリイ可能</li></ul><h4>おすすめの立ち回り</h4><p class='test'>前方に回避することをお勧めします。後方に回避すると、弓矢が飛んでくる方向と同じになりタイミング次第では、避けきれずに当たってしまいます。</p><h3>引っ掻き</h3><img src='https://cms-assets.nilto.com/spaces/593691702/media/1399143848/_/361092801-66f79be4-c007-4130-ac5e-717ce3d0458f.png'/><h4>特徴</h4><ul><li>距離が近いときに多い</li><li>2回連続の時もあれば3回連続の時もある</li></ul><h4>おすすめの立ち回り</h4><p class='test'><strong>前方または後方</strong>に回避する。また、パリイ可能なので、距離が近いときは積極的にパリイを狙っていく</p><h3>溜め突撃</h3><img src='https://cms-assets.nilto.com/spaces/593691702/media/1049062617/_/361092857-1a5f684d-5e39-4072-8356-b0b2fc7a8bc0.png'/><h4>特徴</h4><ul><li>パリイ不可</li></ul><h4>おすすめの立ち回り</h4><ul><li>前方回避すると距離が遠くなるので、基本的には<strong>後方</strong>（タナトスの移動方向）へ回避して距離を詰める</li></ul><h3>3連引っ掻き</h3><video src='https://cms-assets.nilto.com/spaces/593691702/media/523438379/_/361092987-c88c7e7d-af07-4de8-bb7a-024f49c4db7d.mov'></video><h3>特徴</h3><ul><li>最後のみパリイ可能</li><li>3連の後に続けて溜め攻撃の場合もある</li></ul><h4>おすすめの立ち回り</h4><ul><li>1,2連目は後ろに回避、3連目はパリイする</li></ul></div>"
