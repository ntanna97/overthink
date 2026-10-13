export const config={rounds:8,coherenceStart:10,coherenceMax:12,overrides:2,handSize:5,baseDrain:-1,leanBonus:1,trapPenalty:-2,consensusBonus:1,splitPenalty:-1,winInsight:3,voteInsight:1,readInsight:1,hijack:{Logic:-2,Memory:-2,Creativity:-2,Instinct:-3},botLeanChance:.5,botAssistChance:.25,botHijackChance:.1,draftSeconds:25,voteSeconds:15} as const;
export type Role='Logic'|'Memory'|'Creativity'|'Instinct';
export const roles:Role[]=['Logic','Memory','Creativity','Instinct'];
export const roleMeta:Record<Role,{icon:string,color:string,desc:string}>={Logic:{icon:'◈',color:'#83adff',desc:'Cold hard facts'},Memory:{icon:'▣',color:'#ffbf68',desc:'Never forgets'},Creativity:{icon:'✳',color:'#f58bdb',desc:'Unhinged ideas'},Instinct:{icon:'〽',color:'#84e2a2',desc:'Pure vibes'}};
