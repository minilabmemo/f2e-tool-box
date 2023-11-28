import { getDataByYear, } from "./data";




// cities

export const cities = [
  "臺北市",
  "新北市",
  "桃園市",
  "臺中市",
  "臺南市",
  "高雄市",
  "新竹縣",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義縣",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "臺東縣",
  "澎湖縣",
  "基隆市",
  "新竹市",
  "嘉義市",
  "金門縣",
  "連江縣",
]



//各縣市投票總覽
interface VoteResultByCity {
  area: string;// VotingResult.行政區別
  total: number;//  VotingResult.投票數：number;
  voteRate: number;// VotingResult.投票率：number;
  voteRateByCandidate: { [k: string]: { percentage: string, party: string | undefined, color: string } };
  winner: { number: number, name: string, vice: string, party: string | undefined, color: string, imageNode: React.ReactNode; };
}



export const calcVoteResultByCity = (year: string): VoteResultByCity[] => {
  const { voteResults, candidateInfos } = getDataByYear(year);

  const calculatedResults = voteResults.map(result => {
    const { 行政區別, 投票數, 投票率, 各組候選人得票情形 } = result;


    const totalVotes = Object.values(各組候選人得票情形).reduce((acc, curr) => acc + curr, 0);
    const voteRateByCandidate = Object.fromEntries(
      Object.entries(各組候選人得票情形).map(([key, votes]) => [
        key,
        {
          percentage: ((votes / totalVotes) * 100).toFixed(2) + '%',
          party: candidateInfos.find(person => person.number === Number(key))?.party,
          color: candidateInfos.find(person => person.number === Number(key))?.color ?? '',
        }
      ])
    );

    const winnerKey = Object.keys(各組候選人得票情形).reduce((a, b) =>
      各組候選人得票情形[a as string] > 各組候選人得票情形[b as string] ? a : b
    );

    return {
      area: 行政區別,
      total: 投票數,
      voteRate: 投票率,
      voteRateByCandidate,
      winner: {
        number: Number(winnerKey),
        name: candidateInfos.find(person => person.number === Number(winnerKey))?.name ?? '',
        vice: candidateInfos.find(person => person.number === Number(winnerKey))?.vice ?? '',
        party: candidateInfos.find(person => person.number === Number(winnerKey))?.party ?? '',
        color: candidateInfos.find(person => person.number === Number(winnerKey))?.color ?? '',
        imageNode: candidateInfos.find(person => person.number === Number(winnerKey))?.imageNode ?? ''
      },
    };
  });

  return calculatedResults;
};

interface winnerColor {
  winner: { color: string, };
}

//地圖勝出區域與顏色 key:行政區別 value:勝者顏色
export const calcKeyVoteWinCity = (year: string): Map<string, { value: winnerColor }> => {
  const { voteResults, candidateInfos } = getDataByYear(year);
  const keyVotingResultsArray: [string, { value: winnerColor }][] = voteResults.map(result => {
    const { 行政區別, 各組候選人得票情形 } = result;
    const winnerKey = Object.keys(各組候選人得票情形).reduce((a, b) =>
      各組候選人得票情形[a as string] > 各組候選人得票情形[b as string] ? a : b
    );
    const newVotingResult: winnerColor = {

      winner: {
        color: candidateInfos.find(person => person.number === Number(winnerKey))?.color ?? '',
      },
    };

    return [行政區別, { value: newVotingResult }] as [string, { value: winnerColor }];
  });

  return new Map(keyVotingResultsArray);
};

