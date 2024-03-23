/*
 * Copyright (c) 2024 KnightHat. All right reserves
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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