import React from "react";
import '../scss/header.scss'
import '../scss/index.scss'

const Header = () => {
    return (
        <div className="excel">

            <div className="excel__header">

                <input type="text" className="input" value="Новая таблица"/>

                <div>

                    <div className="button">
                        <i className="material-icons">delete</i>
                    </div>

                    <div className="button">
                        <i className="material-icons">exit_to_app</i>
                    </div>

                </div>

            </div>

            <div className="excel__toolbar">

                <div className="button">
                    <i className="material-icons">format_align_left</i>
                </div>

                <div className="button">
                    <i className="material-icons">format_align_center</i>
                </div>

                <div className="button">
                    <i className="material-icons">format_align_right</i>
                </div>

                <div className="button">
                    <i className="material-icons">format_bold</i>
                </div>

                <div className="button">
                    <i className="material-icons">format_italic</i>
                </div>

                <div className="button">
                    <i className="material-icons">format_underlined</i>
                </div>

            </div>

            <div className="excel__formula">
                <div className="info">fx</div>
                <div className="input" contentEditable spellCheck="false"></div>
            </div>
        </div>

    )
}
export default Header