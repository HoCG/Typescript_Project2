//값이 헝가리안 표기법으로 되어있어서 
enum reName {
  사용자그룹명 = 'usr_grp_nm',
  상위사용자그룹설정 = 'up_usr_grp_nm',
  회원정보수정설정 = 'acct_mod_psb_yn',
  그룹공유폴더이름 = 'shar_str_nm',
  그룹공유폴더설정 = 'shar_str_usg_yn',
}


const headerRename = (value: string) => {
  switch(value) {
    case '사용자그룹명': 
      return value = reName.사용자그룹명
    case '회원정보수정설정': 
      return value = reName.회원정보수정설정
    case '상위사용자그룹설정': 
      return value = reName.상위사용자그룹설정
    case '그룹공유폴더이름': 
      return value = reName.그룹공유폴더이름
    case '그룹공유폴더설정': 
      return value = reName.그룹공유폴더설정
  }
  return '정의되지 않은 값입니다.';
}

headerRename('그룹공유폴더설정');