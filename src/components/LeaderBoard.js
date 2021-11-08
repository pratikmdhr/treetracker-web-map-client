import { Avatar, Box, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
    rectangle69: {
        position: 'relative',
        height: '168px',
        width: '208px',
        borderRadius: '16px',
    },
    rectangle81: {
        position: 'relative',
        top: '-48px',
        left: '-9367',
        height: '164px',
        width: '160px',
        borderRadius: '16px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 20px rgba(255, 165, 0, 0.3)',
        backdropFilter: 'blur(30px)',
    },
    profileImage: {
        position: 'relative',
        height: '110px',
        width: '110px',
    },
    text1: {
        color: '#FFFFFF',
    },
    planter: {
        fontFamily: 'Montserrat',
        fontSize: '22px',
        lineHeight: '28px',
        fontWeight: 700,
        color: '#FFFFFF',
    },
    content: {
        fontFamily: 'Montserrat',
        fontSize: '26px',
        lineHeight: '28px',
        fontWeight: 700,
        color: '#FFFFFF',
    },
    eclipse: {
        top: '-60px',
        position: 'relative',
        height: '120px',
        width: '120px',
        background: '#FFFFFF',
    },
    rating: {
        fontFamily: 'Montserrat',
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 700,
    },
    colorPalette1: {
        background: 'linear-gradient(139.31deg, rgba(71, 75, 79, 0.2) 0%, rgba(255, 165, 0, 0.9) 85.71%)',
        "& .inner1": {
            background: 'linear-gradient(111.63deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.0075) 100%)',
        }
    },
    colorPalette2: {
        background: 'linear-gradient(139.31deg, rgba(71, 75, 79, 0.2) 0%, rgba(97, 137, 47, 0.9) 77.54%)',
        '& .inner2': {
            background: 'linear-gradient(111.63deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.0075) 100%)'
        }
    },
    colorPalette3: {
        background: 'linear-gradient(139.31deg, rgba(71, 75, 79, 0.2) 0%, #FF7A00 82.18%)',
        '& .inner3': {
            background: 'linear-gradient(111.63deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.0075) 100%)',
        }
    },
    rectangle72: {
        height: '130px',
        width: '688px',
        left: '0pxl',
        top: '-140px',
        borderRadius: '16px',
        background: '#F8F0E3',
        position: 'relative'

    },
    rank: {
        fontSize: '40px',
        fontWeight: 700,
        paddingLeft: '30px',
        padding: '10px',
        fontFamily: 'Montserrat',


    },
    sliderRail: {
        height: '45px',
        width: '650px',
        align: 'center',
        position: 'relative',
        left: '17px',
        borderRadius: '16px',
        top: "-59px",
        background: 'rgba(71, 75, 79, 1)'
    },
    sliderMarker: {
        position: 'relative',
        height: '85px',
        width: '120px',
        borderRadius: '16px',
        left: '500px',
        top: '-20px',
        backdropFilter: 'blur(10px)',
        background: '#FF000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flagContainer: {
        left: '70px',
        top: '-64px',
        position: 'relative',
        height: '65px',
        width: '65px',
        background: '#FFFFFF',
    },
    flag: {
        top: '-px',
        position: 'relative',
        height: '60px',
        width: '60px',
    },
    countryText: {
        fontSize: '40px',
        fontWeight: 700,
        paddingLeft: '130px',
        padding: '10px',
        fontFamily: 'Montserrat',
    }

}));

function LeaderBoard({ planterName, cardImageSrc, rating, country , countryFlag}) {

    const classes = useStyles();

    return (
        <Grid>
            <Box>
                <Box className={`${classes.rectangle69} ${classes.colorPalette1}`} align="center" top="100px">
                    <Avatar className={classes.eclipse}>
                        <Avatar
                            className={classes.profileImage}
                            alt="alt name"
                            src={cardImageSrc}
                        />
                    </Avatar>
                    <Box id='inner1' className={classes.rectangle81}>
                        <Box className={classes.planter}>Planter</Box>
                        <Box className={classes.content}>{planterName}</Box>
                        <Box className={classes.rating}>
                            Rating
                            <br></br>
                            {rating}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box className={`${classes.rectangle69} ${classes.colorPalette2}`}
                    align="center"
                    left='220px'
                    top='-100px'
                >
                    <Avatar className={classes.eclipse}>
                        <Avatar
                            className={classes.profileImage}
                            alt="alt name"
                            src={cardImageSrc}
                        />
                    </Avatar>
                    <Box id='inner2' className={classes.rectangle81} >
                        <Box className={classes.planter}>Planter</Box>
                        <Box className={classes.content}>{planterName}</Box>
                        <Box className={classes.rating}>
                            Rating
                            <br></br>
                            {rating}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box className={`${classes.rectangle69} ${classes.colorPalette3}`}
                    align="center"
                    left="440px"
                    top="-230px"
                    background="linear-gradient(139.31deg, rgba(71, 75, 79, 0.2) 0%, rgba(97, 137, 47, 0.9) 77.54%);"
                >
                    <Avatar className={classes.eclipse}>
                        <Avatar
                            className={classes.profileImage}
                            alt="alt name"
                            src={cardImageSrc}
                        />
                    </Avatar>
                    <Box id="inner3" className={classes.rectangle81}  >
                        <Box className={classes.planter}>Planter</Box>
                        <Box className={classes.content}>{planterName}</Box>
                        <Box className={classes.rating}>
                            Rating
                            <br></br>
                            {rating}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.rectangle72} >
                <Box className={classes.rank}>
                    4
                </Box>
                <Avatar className={classes.flagContainer} >
                    <Avatar
                        className={classes.flag}
                        alt="alt name"
                        src={countryFlag}
                    />

                </Avatar>
                <Box className={classes.sliderRail}   >
                    <Box className={`${classes.sliderMarker} ${classes.content}`} fontSize='15px !important' textAlign="center">
                        Trees Planted 9.5 Million
                    </Box>
                </Box>
                <Box classes={classes.countryText}
                    fontSize="20px"
                    fontWeight="200"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    Country
                </Box>
                <Box classes={classes.countryText}
                    fontSize="30px"
                    fontWeight="700"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    {country}
                </Box>
            </Box>
            <br></br>
            <Box className={classes.rectangle72} >
                <Box className={classes.rank}>
                    5
                </Box>
                <Avatar className={classes.flagContainer} >
                    <Avatar
                        className={classes.flag}
                        alt="alt name"
                        src={countryFlag}
                    />

                </Avatar>
                <Box className={classes.sliderRail}   >
                    <Box className={`${classes.sliderMarker} ${classes.content}`} fontSize='15px !important' textAlign="center">
                        Trees Planted 9.5 Million
                    </Box>
                </Box>
                <Box classes={classes.countryText}
                    fontSize="20px"
                    fontWeight="200"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    Country
                </Box>
                <Box classes={classes.countryText}
                    fontSize="30px"
                    fontWeight="700"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    {country}
                </Box>
            </Box>
            <br></br>
            <Box className={classes.rectangle72} >
                <Box className={classes.rank}>
                    6
                </Box>
                <Avatar className={classes.flagContainer} >
                    <Avatar
                        className={classes.flag}
                        alt="alt name"
                        src={countryFlag}
                    />

                </Avatar>
                <Box className={classes.sliderRail}   >
                    <Box className={`${classes.sliderMarker} ${classes.content}`} fontSize='15px !important' textAlign="center">
                        Trees Planted 9.5 Million
                    </Box>
                </Box>
                <Box classes={classes.countryText}
                    fontSize="20px"
                    fontWeight="200"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    Country
                </Box>
                <Box classes={classes.countryText}
                    fontSize="30px"
                    fontWeight="700"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    {country}
                </Box>
            </Box>
            <br></br>
            <Box className={classes.rectangle72} >
                <Box className={classes.rank}>
                    7
                </Box>
                <Avatar className={classes.flagContainer} >
                    <Avatar
                        className={classes.flag}
                        alt="alt name"
                        src={countryFlag}
                    />

                </Avatar>
                <Box className={classes.sliderRail}   >
                    <Box className={`${classes.sliderMarker} ${classes.content}`} fontSize='15px !important' textAlign="center">
                        Trees Planted 9.5 Million
                    </Box>
                </Box>
                <Box classes={classes.countryText}
                    fontSize="20px"
                    fontWeight="200"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    Country
                </Box>
                <Box classes={classes.countryText}
                    fontSize="30px"
                    fontWeight="700"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    {country}
                </Box>
            </Box>
            <br></br>
            <Box className={classes.rectangle72} >
                <Box className={classes.rank}>
                    8
                </Box>
                <Avatar className={classes.flagContainer} >
                    <Avatar
                        className={classes.flag}
                        alt="alt name"
                        src={countryFlag}
                    />

                </Avatar>
                <Box className={classes.sliderRail}   >
                    <Box className={`${classes.sliderMarker} ${classes.content}`} fontSize='15px !important' textAlign="center">
                        Trees Planted 9.5 Million
                    </Box>
                </Box>
                <Box classes={classes.countryText}
                    fontSize="20px"
                    fontWeight="200"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    Country
                </Box>
                <Box classes={classes.countryText}
                    fontSize="30px"
                    fontWeight="700"
                    textAlign="center"
                    bottom="170px"
                    position="relative"
                    left="20px"
                    paddingRight="313px"
                    fontFamily='Montserrat'
                >
                    {country}
                </Box>
            </Box>
        </Grid >
    );
}

export default LeaderBoard;
