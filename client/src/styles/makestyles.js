import { makeStyles } from "@material-ui/core";

const globalUseStyles = makeStyles({
    loginPaperStyle : {
        padding: 20,
        height: '65%',
        maxWidth: 280,
        margin: '70px auto',
    },
    forgotPasswordPaper:{
        padding: 20,
        maxWidth: 300,
        margin: '120px auto',
    },
    membersPaper:{
        height:'90%',
        margin: '120px 30px',
        padding: '20px'
    },
    headingDiv:{
        padding:'20px',
    },
    pStyle:{
        marginBottom:'12px'
    },
    inputDiv:{
        width:'100%',
        marginBottom:'10px'
    },
    buttonStyle:{
        width:'100%',
        textTransform: 'none'
    },
    forgotPasswordStyles:{
       textDecoration: 'none',
       color:'#FA2609'
    },
    forgotPasswordTypography:{
        padding:'20px',
        paddingTop:'30px'
    },
    backToLoginStyles:{
        textDecoration: 'none',
        color:'rgba(0, 0, 0, 0.54)'
    },
    listStyle:{
        padding: '20px'
    },
    logoutButtonStyle:{
        width:'20%'
    }
})
export default globalUseStyles;