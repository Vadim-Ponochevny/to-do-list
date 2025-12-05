export default function DeleteDialog({ onConfirm, onCancel }) { 
    return (
        <div className="dialog__overlay" >
            <section className="dialog__window">
                <p className="dialog__text">Удалить задачу?</p>
                <div className="dialog__button__container"> 
                    <button 
                        className="button__window__action dialog__confirm_btn" 
                        onClick={onConfirm}
                    >
                        Да
                    </button>
                    
                    <button 
                        className="button__window__action dialog__cancel_btn" 
                        onClick={onCancel}
                    >
                        Нет
                    </button>
                </div>
            </section>
        </div>
    );
}