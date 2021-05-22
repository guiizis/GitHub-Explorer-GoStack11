import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface IHasError {
  hasError: boolean
}

export const Title = styled.h1`
font-size:41px;
color: #3a3a3a;
max-width: 450px;
line-height: 56px;

margin-top: 80px;

`

export const Form = styled.form <IHasError>`
margin-top: 20px;

display: flex;

input{
  flex: 1;
  height:70px;
  padding: 0 20px;
  border:0;
  border-radius: 5px 0 0 5px;
  color:#3a3a3a;
  border: 2px solid #fff;
  border-right: 0;

${(props) => props.hasError && css`
border-color: #c53030;
`}

  &::placeholder{
      color:#a8a8b3
  }
}

button{
  width: 240px;
  border: 0;
  border-radius: 0px 5px 5px 0px;
  background-color: #04d361;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover{
    background-color: ${shade(0.2, '#04d361')};
  }
}
`

export const Repositories = styled.div`
margin-top: 80px;
max-width: 700px;

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

img{
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

div{
  margin:0 16px;
  flex:1;

  strong{
    font-size: 20px;
    color:#3d3d4d
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

export const InputError = styled.span`
color: #c53030;
display: block;
margin-top: 10px  ;
`
