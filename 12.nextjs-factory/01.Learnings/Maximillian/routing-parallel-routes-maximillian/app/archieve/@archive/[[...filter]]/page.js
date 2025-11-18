import NewsList from "@/commponents/news-list";
import { DUMMY_NEWS } from "@/dummy-data";
import { getAvailableNewsMonths, getNewsForYear, getNewsForYearAndMonth } from "@/app/lib/news";
import { getAvailableNewsYears } from "@/app/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear=filter?.[0]
  const selectedMonth = filter?.[1]
  let news;
  const links = getAvailableNewsYears();

  if(selectedYear&& !selectedMonth){
    news=getNewsForYear(selectedYear)
    links=getAvailableNewsMonths(selectedYear)
  }

  if(selectedYear && selectedMonth){
    news=getNewsForYearAndMonth(selectedYear,selectedMonth)
    links=[]
  }
  let newsContent = <p>No news found for the selecting year</p>
 
  if(news && news.length>0){
    newsContent = <NewsList news={news} />
  }

  if(selectedYear && !getAvailableNewsYears().include(selectedYear)){
    throw new Error('Could not find news for the selected year')
  }
  

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              
              const href =selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`


              return (
                <li key={link}>
                  <Link href={`/archive/${link}`}>{link}</Link>
                </li>
              );
            }
            
            )}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
  