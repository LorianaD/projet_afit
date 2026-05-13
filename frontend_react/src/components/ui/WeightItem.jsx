function WeightItem({ title, children }) {
    return (
        <div className="weight-item">

            {title && (
                <h3 className="weight-item__title">
                    {title}
                </h3>
            )}

            <div className="weight-item__content">
                {children}
            </div>

        </div>
    );
}

export default WeightItem;