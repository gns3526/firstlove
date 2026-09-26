// Scene IDs remain stable across art revisions; each memory has independent PC/mobile art.
window.CG_CATALOG = [
  ['seoyoon','date','date_ice_rink_seoyoon','천천히, 나란히'],
  ['seoyoon','confession','confession_seoyoon','같은 출발선'],
  ['seoyoon','ending','epilogue_seoyoon','우리, 걷자'],
  ['daeun','date','date_park_daeun','스케치북 너머'],
  ['daeun','confession','confession_daeun','그림 밖으로 한 걸음'],
  ['daeun','ending','epilogue_daeun','다시 건네는 봄'],
  ['haneul','date','date_fountain_haneul','분수의 반짝임'],
  ['haneul','confession','confession_haneul','셋째 줄의 진심'],
  ['haneul','ending','epilogue_haneul','네 이름을 바로잡으며'],
  ['yuri','date','date_concert_hall_yuri','첫 공연의 맨 앞줄'],
  ['yuri','confession','confession_yuri','웃음과 눈물 사이'],
  ['yuri','ending','epilogue_yuri','새끼손가락의 약속'],
  ['seoha','date','as_seoha_3','못 간 도시의 엽서'],
  ['seoha','confession','confession_seoha','빈칸 없이'],
  ['seoha','ending','ending_seoha','약속은 약속이니까'],
  ['ina','date','as_ina_3','이륙은 바람을 마주 보고'],
  ['ina','confession','confession_ina','여기 있을게'],
  ['ina','ending','ending_ina','승객으로, 네 옆자리']
].map(function (r) { return {id:r[0]+'_'+r[1],heroine:r[0],kind:r[1],scene:r[2],title:r[3]}; });
