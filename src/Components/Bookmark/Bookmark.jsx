/* eslint-disable react/prop-types */

const Bookmark = ({ bookmark }) => {
    const {Title} = bookmark
    return (
        <div>
            <h3 className="text-3xl">{Title}</h3>
        </div>
    );
};

export default Bookmark;