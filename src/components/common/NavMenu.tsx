import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link, Typography } from '@mui/material';
import React, { useState } from 'react';

function NavMenu() {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className="white100">
            <div className="navMenu row d-flex white100">
                <div
                    className="MenuIcon col-md-3 co-lg-3 d-flex "
                    style={{ alignItems: 'center' }}
                >
                    <IconButton
                        onClick={() => setDropDown(!dropDown)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        style={{ color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                        style={{ color: 'white' }}
                    >
                        Product Category
                    </Typography>
                </div>
                <div className="co-md-7 col-lg-7 d-flex">
                    <Link className="menuLink">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            style={{ color: 'white' }}
                        >
                            HOME
                        </Typography>
                    </Link>
                    <Link className="menuLink">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            style={{ color: 'white' }}
                        >
                            SHOP
                        </Typography>
                    </Link>
                    <Link className="menuLink">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            style={{ color: 'white' }}
                        >
                            COLLECTION
                        </Typography>
                    </Link>
                    <Link className="menuLink menuLinkLast">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            style={{ color: 'white' }}
                        >
                            CONTACT
                        </Typography>
                    </Link>
                </div>
            </div>
            <div
                className="hoverMenu pt-2"
                style={{
                    display: `${dropDown ? 'block' : 'none'}`,
                }}
            >
                <div className="">
                    <Link className="hoverMenuLink ">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            style={{ color: 'white' }}
                        >
                            HOME
                        </Typography>
                    </Link>
                    <Link className="hoverMenuLink">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            SHOP
                        </Typography>
                    </Link>
                    <Link className="hoverMenuLink">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            COLLECTION
                        </Typography>
                    </Link>
                    <Link className="hoverMenuLink">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            CONTACT
                        </Typography>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;
