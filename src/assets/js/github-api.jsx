import {useEffect, useState} from "react";

export function FetchLatestCommit() {

  const [latestCommit, setLatestCommit] = useState("version");

  useEffect(() => {
    const fetchLatestCommit = async () => {

      await fetch('https://api.github.com/repos/knighthat/knighthat-me/commits?per_page=1')
          .then(async response => {

            const data = await response.json();

            if (data.length > 0) {

              const hash = data[0].sha.slice(0, 7)
              const date = data[0].commit.author.date.split("T")[0].replace('-', '.')

              setLatestCommit({
                hash: hash,
                date: date
              });
            }
          }).catch(error => console.error(error));
    };

    fetchLatestCommit();
  }, []);

  return (
      <p>
        <ion-icon name="git-branch"></ion-icon>
        {
          latestCommit ? (
              <span>
                {latestCommit.date + '-' + latestCommit.hash}
              </span>
          ) : (<span>Loading...</span>)
        }
      </p>
  )
}