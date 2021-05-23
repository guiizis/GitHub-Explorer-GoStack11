import styled from 'styled-components'

export const Header = styled.header`
display: flex;
align-items: center;
justify-content:space-between ;

a{
  text-decoration: none;
  display: flex;
  align-items: center;
  color:#a8a8b3;
  transition: color 0.2s;

&:hover{
  color:#666;
}

  svg{
    margin-right: 4px;
  }

}
`

export const RepositoryInfos = styled.section`

margin-top: 80px;

header{
  display: flex;
  align-items: center;

  img{
    border-radius:50%;
    height: 128px;
    width: 128px;
  }

  div{
    margin-left:24px ;

    strong{
      font-size: 36px;
      color:#3d3d4d
    }
    p{
      font-size: 18px;
      color:#737380;
      margin-top: 4px;
    }
  }
}

ul{
  display: flex;
  list-style: none;
  margin-top: 40px;

li{

  strong{
    display: block;
    font-size: 36px;
    color:#3d3d4d
  }

  span{
    display: block;
    margin-top: 4px;
    color:#6c6c80
  }

  &+li{
    margin-left: 80px ;
  }
}

}

`

export const IssuesList = styled.div`
margin-top: 80px;


a{
background-color: #fff;
display: flex;
align-items: center;
width: 100%;
border-radius: 5px;
padding: 24px;
transition: transform 0.2s;
text-decoration: none;

& + a{
  margin-top: 16px;
}
&:hover{
  transform: translateX(10px);
}


div{
  margin:0 16px;
  flex:1;

  strong{
    display: block;
    font-size: 20px;
    color:#3d3d4d;
    margin-bottom:3px;
  }

  p{
    font-size: 18;
    color:#a8a8b3
  }
}

svg{
  margin-left: auto;
  color: #cbcbd6;
}

}
`
