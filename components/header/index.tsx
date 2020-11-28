import React from "react"
import { HeaderInner, HeaderTitle, HeaderWrapper } from "../index.styled";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <HeaderTitle>
                    Wanted
                </HeaderTitle>
            </HeaderInner>
        </HeaderWrapper>
    )
}

export default Header;