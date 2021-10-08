const colors = ['#f65314', '#7cbb00', '#00a1f1', '#ffbb00'];
const WindowsLogo = () => {
    return (
        <div className="windows-logo">
            {colors.map((elem) => (
                <div className="windows-logo__single" style={{ backgroundColor: elem }} />
            ))}
        </div>
    );
};
export default WindowsLogo;
