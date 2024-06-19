import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdowns.module.scss';

const navItems = [
  { name: 'KOMPÜTERLƏR', icon: 'https://mstore.az/upload/category/desktop-computer.png', dropdowns: [{ label: 'Masaüstü kompüterlər', link: '/page1' }, { label: 'Notebook və Netbooklar', link: '/page2' }, { label: 'MacBooklar', link: '/page3' }, { label: 'Monobloklar', link: '/page4' }] },
  { name: 'KOMPÜTER HİSSƏLƏRİ', icon: 'https://mstore.az/upload/category/motherboard.png', dropdowns: [{ label: 'Ana platalar', link: '/page5' }, { label: 'Prosessorlar', link: '/page6' }, { label: 'Prosessor soyuducuları', link: '/page7' }, { label: 'Ramlar', link: '/page8' }, { label: 'Videokartlar', link: '/page9' }, { label: 'Daxili yaddaşlar', link: '/page10' }, { label: 'Qida blokları', link: '/page11' }, { label: 'Optik sürücülər', link: '/page12' }, { label: 'Keyslər', link: '/page13' }, { label: 'Digər', link: '/page14' }] },
  { name: 'ŞƏBƏKƏ AVADANLIQLARI', icon: 'https://mstore.az/upload/category/computer[1].png', dropdowns: [{ label: 'Router və Modemlər', link: '/page15' }, { label: 'Switch', link: '/page16' }, { label: 'Access Point', link: '/page17' }, { label: 'Firewall', link: '/page18' }, { label: 'Network Attached Storage (NAS)', link: '/page19' }, { label: 'Network Interface Card (NIC)', link: '/page20' }, { label: 'Server', link: '/page21' }, { label: 'Patch Panel', link: '/page22' }, { label: 'Patch Cord', link: '/page23' }, { label: 'Cabinet', link: '/page24' }, { label: 'Parts', link: '/page25' }, { label: 'WiFi Extender', link: '/page26' }, { label: '', link: '/page27' }] },
  { name: 'MƏİŞƏT TEXNİKASI', icon: 'https://mstore.az/upload/category/washing-machine.png', dropdowns: [{ label: 'Kondisioner', link: '/page28' }, { label: 'Soyuducu', link: '/page29' }, { label: 'Paltaryuyan', link: '/page30' }, { label: 'Qabyuyan', link: '/page31' }, { label: 'Televizor', link: '/page32' }, { label: 'Çaydanlar', link: '/page33' }, { label: 'Kofe üyüdənlər', link: '/page34' }, { label: 'Şirəçəkənlər', link: '/page35' }, { label: 'Tozsoran', link: '/page36' }, { label: 'Digər elektrikli avadanlıqlar', link: '/page37' }, { label: 'Qaz sobaları', link: '/page38' }, { label: 'Qaz plitələri', link: '/page39' }, { label: 'Aspiratorlar', link: '/page40' }] },
  { name: 'TELEFONLAR PLANŞETLƏR', icon: 'https://mstore.az/upload/category/mobile-phone.png', dropdowns: [{ label: 'Mobil Telefonlar', link: '/page41' }, { label: 'Planşetlər', link: '/page42' }, { label: 'Ev və ofis telefonları', link: '/page43' }] },
  { name: 'DİGƏR', icon: 'https://mstore.az/upload/category/ellipsis.png', dropdowns: [{ label: 'Monitorlar', link: '/page44' }, { label: 'Klaviatura və siçanlar', link: '/page45' }, { label: 'Printer və Scanerlər', link: '/page46' }, { label: 'Web kameralar', link: '/page47' }, { label: 'Uninterruptible Power Supply (UPS)', link: '/page48' }, { label: 'Yaddaş qurğuları', link: '/page49' }, { label: 'Proyektorlar', link: '/page50' }, { label: 'Soundbarlar', link: '/page51' }, { label: 'Mikrofonlar', link: '/page52' }, { label: 'Kalonkalar', link: '/page53' }, { label: 'Notebook və Netbook çantaları', link: '/page54' }, { label: 'Kartriclər', link: '/page55' }, { label: 'Printerlər üçün', link: '/page56' }, { label: 'Proyektor üçün', link: '/page57' }] },
];

const Dropdowns = () => {
  return (
    <div className={styles.drops}>
      <div className={styles.containerDrops}>
        {navItems.map((navItem, index) => (
          <div key={index} className={`${styles.navItem} ${navItem.name === 'DİGƏR' ? styles.digerNavItem : ''}`}>
            <img src={navItem.icon} alt={navItem.name} className={styles.navIcon} />
            {navItem.name}
            <div className={styles.dropdownMenu}>
              {navItem.dropdowns.map((dropdown, idx) => (
                <Link key={idx} to={dropdown.link} className={styles.dropdownItem}>
                  {dropdown.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdowns;
