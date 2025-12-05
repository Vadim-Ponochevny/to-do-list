import CopyIcon from '../assets/copy.svg';
import VKIcon from '../assets/vk.svg';
import TelegramIcon from '../assets/telegram.svg';
import WhatsAppIcon from '../assets/whatsapp.svg';
import FacebookIcon from '../assets/facebook.svg';

export default function ShareDialog({ onCancel }) {
    
    const handleOverlayClick = (event) => {
        if (event.target.className === 'share__overlay') {
            onCancel();
        }
    };

    return (
        <div className="share__overlay" onClick={handleOverlayClick} data-js-share-dialog>
            <section className="share__window">
                
                <button className="button__share">
                    <img src={CopyIcon} alt="Копировать" />
                </button>
                <button className="button__share">
                    <img src={VKIcon} alt="VK" />
                </button>
                <button className="button__share">
                    <img src={TelegramIcon} alt="Telegram" />
                </button>
                <button className="button__share">
                    <img src={WhatsAppIcon} alt="WhatsApp" />
                </button>
                <button className="button__share">
                    <img src={FacebookIcon} alt="Facebook" />
                </button>
            </section>
        </div>
    );
}