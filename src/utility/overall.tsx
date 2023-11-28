import { getDataByYear } from "./data";

//總統得票數
export interface OverallResult {
  candidates: candidateResult[]; //各組得票計算
  voteNumber: number;//投票數：number;
  ValidVoteNumber: number;//有效票數：number;
  InvalidVoteNumber: number;//無效票數：number;
  voteRate: number;//投票率：number;
}


interface candidateResult {
  name: string;
  vice: string;
  number: number;
  party: string;
  color: string;
  imageNode: React.ReactNode;
  total: number;
  percentage?: string;
}
export function allVotes(year: string) {
  const { voteResults, candidateInfos } = getDataByYear(year);

  var result: OverallResult = { candidates: [], voteNumber: 0, ValidVoteNumber: 0, InvalidVoteNumber: 0, voteRate: 0 };

  var totalVote = voteResults.find((item, index) => {
    return item.行政區別 === "總 計";
  });
  if (totalVote) {
    var candidateResults: candidateResult[] = [];
    var { 投票數, 有效票數, 無效票數, 投票率 } = totalVote;
    for (const number in totalVote?.各組候選人得票情形) {
      const voteNumber = totalVote.各組候選人得票情形[number];
      const candidate = candidateInfos.find(candidate => candidate.number === parseInt(number, 10));
      if (candidate) {
        const transformedResult: candidateResult = {
          name: candidate.name,
          vice: candidate.vice,
          number: candidate.number,
          party: candidate.party,
          color: candidate.color,
          imageNode: candidate.imageNode,
          total: voteNumber
        };
        candidateResults.push(transformedResult);
      }
    }
    const totalVotes = candidateResults.reduce((acc, item) => acc + item.total, 0);
    candidateResults.forEach(item => {
      const percentage = ((item.total / totalVotes) * 100).toFixed(2) + '%';
      item.percentage = percentage;
    });
    result = { candidates: candidateResults, voteNumber: 投票數, ValidVoteNumber: 有效票數, InvalidVoteNumber: 無效票數, voteRate: 投票率 };

  }
  return result;
}


