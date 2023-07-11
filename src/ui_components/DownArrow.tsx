import { Scrollchor } from "react-scrollchor";

type TDownArrow = {
    sectionId: string;
}

export default function DownArrow(props: TDownArrow) {
    return (
        // added auto scroll effect if user tries to click on arrow for reaching out to next section
        <Scrollchor to={props.sectionId}>
            <div className="arrowContainer cursor-pointer">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
        </div>
        </Scrollchor>
    )
}
