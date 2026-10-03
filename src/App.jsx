import React, { useEffect, useState } from 'react';

const ADMIN_USER = {
  username: 'admin',
  password: 'yanni123',
  role: 'menu-admin',
};

const STORAGE_KEY = 'yanni-menu-data-v1';
const ADMIN_SESSION_KEY = 'yanni-menu-admin-session-v1';
const API_BASE = import.meta.env.VITE_API_URL || '';

const defaultMenuData = [
  {
    title: 'Cultural Foods',
    items: [
      { name: 'Yanni Special Meat Combo (ያኒ እስፔሻል የፈስግ ኮምቦ)', price: '1,200 ETB', vipPrice: '1,500 ETB', description: 'Premium beef and cultural sides with signature Ethiopian flavor.', cat: 'Cultural foods' },
      { name: 'Shekla Tibs (ሸክላ ጥብስ)', price: '850 ETB', vipPrice: '1,050 ETB', description: 'Tender sautéed beef with onions, peppers, and house spices.', cat: 'Cultural foods' },
      { name: 'Tibs (ጥብስ)', price: '750 ETB', vipPrice: '900 ETB', description: 'Classic Ethiopian beef tibs with peppers and butter.', cat: 'Cultural foods' },
      { name: 'Dulet (ዱለት)', price: '450 ETB', vipPrice: '560 ETB', description: 'Spicy mixed minced meat and liver with local herbs.', cat: 'Cultural foods' },
      { name: 'Tibs Tefersho (ጥብስ ተፈርሾ)', price: '800 ETB', vipPrice: '980 ETB', description: 'Rich beef tibs served with house sauce and vegetables.', cat: 'Cultural foods' },
      { name: 'Enkulal be Siga (እንቁላል በስጋ)', price: '350 ETB', vipPrice: '430 ETB', description: 'Eggs with meat and soft Ethiopian seasoning.', cat: 'Cultural foods' },
      { name: 'Pasta be Siga (ፓስታ በስጋ)', price: '380 ETB', vipPrice: '470 ETB', description: 'Pasta served with savory beef sauce and herbs.', cat: 'Cultural foods' },
      { name: 'Quanta Firfir (ቋንጣ ፍርፍር)', price: '600 ETB', vipPrice: '720 ETB', description: 'Spiced shredded injera with vegetables and sauce.', cat: 'Cultural foods' },
      { name: 'Bozena Shiro (ቦዘና ሽሮ)', price: '450 ETB', vipPrice: '550 ETB', description: 'Hearty chickpea stew with warm Ethiopian seasoning.', cat: 'Cultural foods' },
      { name: 'Gomen be Siga (ጎመን በስጋ)', price: '500 ETB', vipPrice: '620 ETB', description: 'Collard greens with tender beef and aromatic spices.', cat: 'Cultural foods' },
      { name: 'Qiqel (ቅቅል)', price: '550 ETB', vipPrice: '680 ETB', description: 'Crispy roasted vegetables and meat with Ethiopian seasoning.', cat: 'Cultural foods' },
      { name: 'Yanni Special Fish Combo (ያኒ እስፔሻል አሳ ኮምቦ)', price: '1,100 ETB', vipPrice: '1,350 ETB', description: 'Signature fish platter with fresh herbs and lake-style seasoning.', cat: 'Fish Cultural' },
      { name: 'Asa Lebleb (አሳ ለብለብ)', price: '650 ETB', vipPrice: '800 ETB', description: 'Fish pieces sautéed with local spice and peppers.', cat: 'Fish Cultural' },
      { name: 'Asa Dulet (አሳ ዱለት)', price: '500 ETB', vipPrice: '620 ETB', description: 'Spiced fish dulet with bold Ethiopian flavor.', cat: 'Fish Cultural' },
    ],
  },
  {
    title: 'Cultural Foods for Vegans',
    items: [
      { name: 'Tegabino (ተጋቢኖ)', price: '300 ETB', description: 'Fresh vegan dish with vegetables and Ethiopian-style seasoning.', cat: 'Vegan' },
      { name: 'Shiro Feses (ሽሮ ፈሰስ)', price: '250 ETB', description: 'Traditional chickpea stew with rich, earthy taste.', cat: 'Vegan' },
    ],
  },
  {
    title: 'Junk Food',
    items: [
      { name: "Yani's Special Pizza", price: '950 ETB', vipPrice: '1,150 ETB', description: 'Loaded pizza with cheese, meat, vegetables, and house sauce.', cat: 'Junk food' },
      { name: 'Beef Pizza', price: '850 ETB', vipPrice: '1,020 ETB', description: 'Beef topping with mozzarella and rich tomato base.', cat: 'Junk food' },
      { name: 'Tuna Pizza', price: '800 ETB', vipPrice: '980 ETB', description: 'Tuna, cheese, and herbs on a crispy crust.', cat: 'Junk food' },
      { name: 'Pizza Margarita', price: '650 ETB', vipPrice: '780 ETB', description: 'Classic tomato, basil, and cheese pizza.', cat: 'Junk food' },
      { name: 'Cheese Pizza', price: '700 ETB', vipPrice: '860 ETB', description: 'Cheesy, oven-baked classic pizza.', cat: 'Junk food' },
      { name: 'Special Burger', price: '600 ETB', vipPrice: '720 ETB', description: 'Juicy beef burger with lettuce, tomato, and house sauce.', cat: 'Junk food' },
      { name: 'Normal Burger', price: '450 ETB', vipPrice: '560 ETB', description: 'Simple grilled burger with fresh toppings.', cat: 'Junk food' },
      { name: 'Cheese Burger', price: '500 ETB', vipPrice: '620 ETB', description: 'Beef burger layered with melted cheese.', cat: 'Junk food' },
      { name: 'Beef Burger', price: '550 ETB', vipPrice: '680 ETB', description: 'Tender beef patty with savory burger toppings.', cat: 'Junk food' },
      { name: 'Rice with Meat', price: '480 ETB', vipPrice: '600 ETB', description: 'Rice topped with seasoned meat and sauce.', cat: 'Junk food' },
      { name: 'Special Fetira', price: '400 ETB', vipPrice: '500 ETB', description: 'Fluffy flatbread with savory filling and herbs.', cat: 'Junk food' },
      { name: 'Special Shawarma', price: '450 ETB', vipPrice: '560 ETB', description: 'Grilled chicken wrap with sauce and vegetables.', cat: 'Junk food' },
      { name: 'Tuna Sandwich', price: '380 ETB', vipPrice: '470 ETB', description: 'Fresh tuna sandwich with crisp salad.', cat: 'Junk food' },
      { name: 'Club Sandwich', price: '420 ETB', vipPrice: '530 ETB', description: 'Layered sandwich with chicken, cheese, and salad.', cat: 'Junk food' },
    ],
  },
  {
    title: 'Junk Foods for Vegans',
    items: [
      { name: 'Vegetable Pizza', price: '600 ETB', description: 'Veggie pizza loaded with fresh farm vegetables.', cat: 'Vegan junk' },
      { name: 'French Fries', price: '200 ETB', description: 'Crispy golden fries, perfect as a side.', cat: 'Vegan junk' },
      { name: 'Special Fries', price: '280 ETB', description: 'Seasoned fries with herbs and savory bite.', cat: 'Vegan junk' },
      { name: 'Vegetable Sandwich', price: '250 ETB', description: 'Fresh salad sandwich with crunchy greens.', cat: 'Vegan junk' },
      { name: 'Pasta be Atkilt (ፓስታ በአትክልት)', price: '280 ETB', description: 'Pasta with vegetable sauce and light seasoning.', cat: 'Vegan junk' },
      { name: 'Pasta be Sigo (ፓስታ በስጎ)', price: '250 ETB', description: 'Vegetarian pasta dish with rich sauce and herbs.', cat: 'Vegan junk' },
    ],
  },
  {
    title: 'Alcohol Drinks',
    items: [
      { name: 'Chivas', price: '4,500 ETB', vipPrice: '5,200 ETB', description: 'Smooth blended whisky with warm, rich finish.', cat: 'Alcohol' },
      { name: "Gordon's", price: '3,200 ETB', vipPrice: '3,700 ETB', description: 'Classic gin with crisp botanical notes.', cat: 'Alcohol' },
      { name: 'Black Label', price: '4,200 ETB', vipPrice: '4,900 ETB', description: 'Full-bodied whisky with smoky depth.', cat: 'Alcohol' },
      { name: 'Gold Label', price: '5,500 ETB', vipPrice: '6,300 ETB', description: 'Premium whisky with layered, refined flavor.', cat: 'Alcohol' },
      { name: 'Tequila', price: '3,800 ETB', vipPrice: '4,400 ETB', description: 'Bold tequila spirit with warm agave finish.', cat: 'Alcohol' },
      { name: "Jägermeister", price: '3,500 ETB', vipPrice: '4,100 ETB', description: 'Herbal liqueur with a distinctive aromatic profile.', cat: 'Alcohol' },
      { name: 'Grey Goose', price: '4,800 ETB', vipPrice: '5,500 ETB', description: 'Luxury vodka with clean, smooth finish.', cat: 'Alcohol' },
      { name: 'Don Julio', price: '6,000 ETB', vipPrice: '6,900 ETB', description: 'Extra-premium tequila with smooth agave character.', cat: 'Alcohol' },
      { name: 'Stolichnaya', price: '3,000 ETB', vipPrice: '3,500 ETB', description: 'Crisp vodka with a clean and elegant finish.', cat: 'Alcohol' },
    ],
  },
  {
    title: 'Beers',
    items: [
      { name: 'Dashen Beer', price: '120 ETB', vipPrice: '150 ETB', description: 'Refreshing local beer with crisp finish.', cat: 'Beer' },
      { name: 'Heineken Beer', price: '160 ETB', vipPrice: '200 ETB', description: 'Premium pale lager with smooth taste.', cat: 'Beer' },
      { name: 'Saint George Beer', price: '120 ETB', vipPrice: '150 ETB', description: 'Light and refreshing local lager.', cat: 'Beer' },
      { name: 'Harar Beer', price: '120 ETB', vipPrice: '150 ETB', description: 'Traditional Ethiopian beer with mellow character.', cat: 'Beer' },
      { name: 'Habesha Beer', price: '130 ETB', vipPrice: '170 ETB', description: 'Classic Ethiopian lager with crisp finish.', cat: 'Beer' },
      { name: 'Anbesa Beer', price: '110 ETB', vipPrice: '140 ETB', description: 'Smooth and easy-drinking beer.', cat: 'Beer' },
      { name: 'Arada Beer', price: '120 ETB', vipPrice: '150 ETB', description: 'Balanced beer with clean, crisp taste.', cat: 'Beer' },
    ],
  },
  {
    title: 'Wine',
    items: [
      { name: 'Acacia Wine Red', price: '1,200 ETB', vipPrice: '1,500 ETB', description: 'Rich red wine with berry and warm spice notes.', cat: 'Wine' },
      { name: 'Acacia Wine Rosé', price: '1,200 ETB', vipPrice: '1,500 ETB', description: 'Refreshing rosé with floral and fruity character.', cat: 'Wine' },
      { name: 'Acacia Wine White', price: '1,200 ETB', vipPrice: '1,500 ETB', description: 'Smooth white wine with crisp citrus notes.', cat: 'Wine' },
    ],
  },
  {
    title: 'Soft Drinks',
    items: [
      { name: 'Coca Cola', price: '70 ETB', vipPrice: '95 ETB', description: 'Classic chilled cola with fizz.', cat: 'Soft' },
      { name: 'Sprite', price: '70 ETB', vipPrice: '95 ETB', description: 'Light lemon-lime soda with refreshing sparkle.', cat: 'Soft' },
      { name: 'Fanta', price: '70 ETB', vipPrice: '95 ETB', description: 'Orange-flavored soda with vibrant taste.', cat: 'Soft' },
      { name: 'Mirinda', price: '70 ETB', vipPrice: '95 ETB', description: 'Sweet citrus soda with refreshing finish.', cat: 'Soft' },
      { name: '7up', price: '70 ETB', vipPrice: '95 ETB', description: 'Crisp lemon-lime refreshment.', cat: 'Soft' },
      { name: 'Red Bull', price: '350 ETB', vipPrice: '420 ETB', description: 'Energy drink for a quick boost.', cat: 'Soft' },
      { name: 'Nigus Malt', price: '80 ETB', vipPrice: '110 ETB', description: 'Local malt drink with smooth taste.', cat: 'Soft' },
      { name: 'Ambo Wuha (አምቦ ውሃ)', price: '60 ETB', vipPrice: '85 ETB', description: 'Pure bottled water with refreshing taste.', cat: 'Soft' },
    ],
  },
  {
    title: 'Hot Drinks',
    items: [
      { name: 'Tea', price: '40 ETB', vipPrice: '60 ETB', description: 'Fresh hot tea with comforting aroma.', cat: 'Hot' },
      { name: 'Coffee', price: '50 ETB', vipPrice: '75 ETB', description: 'Freshly brewed coffee with rich flavor.', cat: 'Hot' },
      { name: 'Macchiato', price: '70 ETB', vipPrice: '100 ETB', description: 'Creamy espresso drink with layered texture.', cat: 'Hot' },
    ],
  },
];

const loadSavedMenu = () => {
  if (typeof window === 'undefined') return defaultMenuData;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultMenuData;
  } catch {
    return defaultMenuData;
  }
};

const fetchMenuFromServer = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/menu`);
    if (!response.ok) throw new Error('Menu request failed');
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch {
    return loadSavedMenu();
  }

  return loadSavedMenu();
};

const saveMenuToServer = async (menu) => {
  const response = await fetch(`${API_BASE}/api/menu`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: ADMIN_USER.username,
      password: ADMIN_USER.password,
      menu,
    }),
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.message || 'Unable to save menu');
  }

  return response.json();
};

const loginToServer = async (username, password) => {
  const response = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || 'Invalid admin username or password.');
  }

  return payload;
};

const isAdminLoggedIn = () => {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
};

const formatPrice = (item) => (item.vipPrice ? `${item.price} / VIP ${item.vipPrice}` : item.price);

export default function App() {
  const [menuCategories, setMenuCategories] = useState(loadSavedMenu);
  const [isLoggedIn, setIsLoggedIn] = useState(isAdminLoggedIn);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    const loadMenu = async () => {
      const serverMenu = await fetchMenuFromServer();
      setMenuCategories(serverMenu);
    };

    loadMenu();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(menuCategories));
    }
  }, [menuCategories]);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await loginToServer(loginForm.username, loginForm.password);
      setIsLoggedIn(true);
      setLoginError('');
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(ADMIN_SESSION_KEY, 'true');
      }
      setLoginForm({ username: '', password: '' });
    } catch (error) {
      setLoginError(error.message || 'Invalid admin username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(ADMIN_SESSION_KEY);
    }
  };

  const updateItemField = (categoryIndex, itemIndex, field, value) => {
    setMenuCategories((current) =>
      current.map((group, gIndex) => {
        if (gIndex !== categoryIndex) return group;

        return {
          ...group,
          items: group.items.map((item, iIndex) =>
            iIndex === itemIndex ? { ...item, [field]: value } : item
          ),
        };
      })
    );
  };

  const handleSaveMenu = async () => {
    setSaveStatus('Saving...');

    try {
      await saveMenuToServer(menuCategories);
      setSaveStatus('Saved to backend');
    } catch (error) {
      setSaveStatus(error.message || 'Save failed');
    }
  };

  const handleRefreshMenu = async () => {
    setSaveStatus('Refreshing...');
    const refreshedMenu = await fetchMenuFromServer();
    setMenuCategories(refreshedMenu);
    setSaveStatus('Menu refreshed');
  };

  const addItem = (categoryIndex) => {
    setMenuCategories((current) =>
      current.map((group, gIndex) => {
        if (gIndex !== categoryIndex) return group;

        return {
          ...group,
          items: [
            ...group.items,
            {
              name: 'New Item',
              price: '0 ETB',
              vipPrice: '',
              description: 'Add ingredients and flavor details here.',
              cat: group.title,
            },
          ],
        };
      })
    );
  };

  const deleteItem = (categoryIndex, itemIndex) => {
    setMenuCategories((current) =>
      current.map((group, gIndex) => {
        if (gIndex !== categoryIndex) return group;

        return {
          ...group,
          items: group.items.filter((_, iIndex) => iIndex !== itemIndex),
        };
      })
    );
  };

  return (
    <div style={styles.shell}>
      <header style={styles.topbar}>
        <div style={styles.brand}>
          <img src="/yannis-logo.svg" alt="Yanni's Yared logo" style={styles.brandLogo} />
          <div>
            <strong style={styles.brandTitle}>YANNI'S YARED</strong>
            <span style={styles.brandSub}>LUXURY HAWASSA DINING</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={styles.status}>Open today • 11:00–23:00</div>
          {!isLoggedIn ? (
            <button onClick={() => setShowAdminLogin(true)} style={styles.adminTriggerButton}>Admin</button>
          ) : (
            <button onClick={handleLogout} style={styles.logoutButton}>Admin Logout</button>
          )}
        </div>
      </header>

      {showAdminLogin && !isLoggedIn && (
        <div style={styles.loginOverlay} onClick={() => setShowAdminLogin(false)}>
          <div style={styles.loginDialog} onClick={(event) => event.stopPropagation()}>
            <div style={styles.loginDialogHeader}>
              <h3 style={{ margin: 0 }}>Staff Access</h3>
              <button onClick={() => setShowAdminLogin(false)} style={styles.closeButton}>×</button>
            </div>
            <form onSubmit={handleLogin} style={styles.loginCardInline}>
              <p style={styles.loginText}>Use the admin credentials to manage menu items and pricing.</p>

              <label style={styles.fieldLabel}>
                Username
                <input
                  style={styles.input}
                  value={loginForm.username}
                  onChange={(event) => setLoginForm({ ...loginForm, username: event.target.value })}
                  placeholder="admin"
                />
              </label>

              <label style={styles.fieldLabel}>
                Password
                <input
                  type="password"
                  style={styles.input}
                  value={loginForm.password}
                  onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })}
                  placeholder="••••••••"
                />
              </label>

              {loginError && <div style={styles.errorText}>{loginError}</div>}

              <div style={styles.loginActions}>
                <button type="button" onClick={() => setShowAdminLogin(false)} style={styles.cancelButton}>Cancel</button>
                <button type="submit" style={styles.primaryBtn}>Access Admin Panel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isLoggedIn && (
        <section style={adminStyles.panel}>
          <div style={adminStyles.headerRow}>
            <div>
              <div style={adminStyles.title}>Menu Admin Control</div>
              <div style={adminStyles.subtitle}>Role: {ADMIN_USER.role}</div>
            </div>
            <div style={adminStyles.userChip}>Signed in as {ADMIN_USER.username}</div>
          </div>

          <div style={adminStyles.actionBar}>
            <button onClick={handleSaveMenu} style={adminStyles.saveButton}>Save Menu</button>
            <button onClick={handleRefreshMenu} style={adminStyles.refreshButton}>Refresh</button>
            {saveStatus && <span style={adminStyles.saveStatus}>{saveStatus}</span>}
          </div>

          {menuCategories.map((group, categoryIndex) => (
            <div key={`${group.title}-${categoryIndex}`} style={adminStyles.categoryBlock}>
              <div style={adminStyles.categoryLabelRow}>
                <h3 style={adminStyles.categoryLabel}>{group.title}</h3>
                <button onClick={() => addItem(categoryIndex)} style={adminStyles.addButton}>
                  + Add Item
                </button>
              </div>

              {group.items.map((item, itemIndex) => (
                <div key={`${item.name}-${itemIndex}`} style={adminStyles.itemEditor}>
                  <div style={adminStyles.gridTwo}>
                    <label style={adminStyles.label}>
                      Name
                      <input
                        style={adminStyles.input}
                        value={item.name}
                        onChange={(event) => updateItemField(categoryIndex, itemIndex, 'name', event.target.value)}
                      />
                    </label>

                    <label style={adminStyles.label}>
                      Category
                      <input
                        style={adminStyles.input}
                        value={item.cat || ''}
                        onChange={(event) => updateItemField(categoryIndex, itemIndex, 'cat', event.target.value)}
                      />
                    </label>
                  </div>

                  <div style={adminStyles.gridThree}>
                    <label style={adminStyles.label}>
                      Normal Price
                      <input
                        style={adminStyles.input}
                        value={item.price}
                        onChange={(event) => updateItemField(categoryIndex, itemIndex, 'price', event.target.value)}
                      />
                    </label>

                    <label style={adminStyles.label}>
                      VIP Price
                      <input
                        style={adminStyles.input}
                        value={item.vipPrice || ''}
                        onChange={(event) => updateItemField(categoryIndex, itemIndex, 'vipPrice', event.target.value)}
                      />
                    </label>

                    <button onClick={() => deleteItem(categoryIndex, itemIndex)} style={adminStyles.deleteButton}>
                      Delete
                    </button>
                  </div>

                  <label style={adminStyles.label}>
                    Ingredients / Description
                    <textarea
                      style={adminStyles.textarea}
                      value={item.description || ''}
                      onChange={(event) => updateItemField(categoryIndex, itemIndex, 'description', event.target.value)}
                    />
                  </label>
                </div>
              ))}
            </div>
          ))}
        </section>
      )}

      <section style={styles.hero}>
        <div>
          <span style={styles.eyebrow}>LUXURY DINING EXPERIENCE</span>
          <h1 style={styles.heading}>
            Genuine taste, <br />
            <span style={{ color: '#d7a75c' }}>golden hospitality</span>
          </h1>
          <p style={styles.subhead}>
            Crafted for guests who enjoy elevated local flavors, refined service,
            and an unforgettable Hawassa atmosphere from the first scan to the
            final sip.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button style={styles.primaryBtn}>Scan to Order</button>
            <button style={styles.ghostBtn}>View Menu</button>
          </div>
        </div>

        <div style={styles.heroVisual}>
          <div style={styles.heroVisualCard}>
            <div style={styles.heroVisualHeader}>
              <span style={{ fontSize: '0.75rem', color: '#d7a75c' }}>● Menu</span>
              <span style={styles.miniPill}>Premium</span>
            </div>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Yanni's Yared</h3>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                Lakeside dining • Hawassa
              </p>
            </div>
            <div style={styles.heroVisualPlate}>
              <div style={styles.heroVisualDish} />
            </div>
          </div>
        </div>
      </section>

      <section style={styles.menuGrid}>
        {menuCategories.map((group, idx) => (
          <div key={idx} style={styles.sectionCard}>
            <div style={styles.sectionHead}>
              <h3 style={{ margin: 0, fontSize: '0.9rem', letterSpacing: '1px' }}>
                {group.title.toUpperCase()}
              </h3>
              <span style={styles.countBadge}>{group.items.length} items</span>
            </div>
            <div>
              {group.items.map((item, i) => (
                <div key={`${item.name}-${i}`} style={styles.menuItem}>
                  <div style={styles.itemRow}>
                    <strong>{item.name}</strong>
                    <span style={{ color: '#d7a75c', fontWeight: 'bold', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                      {formatPrice(item)}
                    </span>
                  </div>
                  {item.description && <div style={styles.itemDescription}>{item.description}</div>}
                  <span style={styles.itemMeta}>{item.cat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const adminStyles = {
  panel: {
    background: 'rgba(9, 14, 18, 0.85)',
    border: '1px solid rgba(215,167,92,0.25)',
    borderRadius: '22px',
    padding: '20px',
    marginBottom: '26px',
    boxShadow: '0 18px 40px rgba(0,0,0,0.25)',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  title: { fontSize: '1.5rem', fontWeight: '700', color: '#f7f0e7' },
  subtitle: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', marginTop: '4px' },
  userChip: {
    background: 'rgba(215,167,92,0.12)',
    color: '#d7a75c',
    padding: '8px 12px',
    borderRadius: '999px',
    fontSize: '0.8rem',
    border: '1px solid rgba(215,167,92,0.2)',
  },
  categoryBlock: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '20px',
  },
  actionBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '18px',
    flexWrap: 'wrap',
  },
  saveButton: {
    background: 'linear-gradient(135deg, #d7a75c, #a96d2d)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  refreshButton: {
    background: 'transparent',
    color: '#f7f0e7',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '12px',
    padding: '10px 16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  saveStatus: {
    fontSize: '0.8rem',
    color: '#d7a75c',
  },
  categoryLabelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  categoryLabel: { margin: 0, fontSize: '1.1rem', color: '#f7f0e7' },
  addButton: {
    background: 'linear-gradient(135deg, #d7a75c, #a96d2d)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '8px 14px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  itemEditor: {
    background: 'rgba(255,255,255,0.015)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '14px',
    padding: '14px',
    marginBottom: '12px',
  },
  gridTwo: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' },
  gridThree: { display: 'grid', gridTemplateColumns: '1fr 1fr 110px', gap: '12px', marginBottom: '12px' },
  label: { display: 'flex', flexDirection: 'column', gap: '6px', color: '#f7f0e7', fontSize: '0.78rem' },
  input: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    color: '#fff',
    padding: '10px 12px',
    fontSize: '0.9rem',
  },
  textarea: {
    minHeight: '86px',
    resize: 'vertical',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    color: '#fff',
    padding: '10px 12px',
    fontSize: '0.9rem',
  },
  deleteButton: {
    alignSelf: 'end',
    background: '#b93d3d',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 12px',
    fontWeight: '700',
    cursor: 'pointer',
  },
};

const styles = {
  shell: {
    backgroundColor: '#120e0b',
    color: '#f7f0e7',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    padding: '20px',
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    flexWrap: 'wrap',
    gap: '12px',
  },
  brand: { display: 'flex', alignItems: 'center', gap: '12px' },
  brandLogo: {
    width: '74px',
    height: '74px',
    objectFit: 'contain',
    display: 'block',
    filter: 'drop-shadow(0 8px 16px rgba(215,167,92,0.28))',
  },
  brandTitle: { display: 'block', fontSize: '0.9rem', letterSpacing: '2px' },
  brandSub: { display: 'block', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' },
  status: {
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
    fontSize: '0.7rem',
  },
  adminBadge: {
    background: 'rgba(215,167,92,0.12)',
    color: '#d7a75c',
    border: '1px solid rgba(215,167,92,0.2)',
    padding: '8px 12px',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 700,
  },
  logoutButton: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '999px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 700,
  },
  adminTriggerButton: {
    background: 'rgba(215,167,92,0.12)',
    color: '#d7a75c',
    border: '1px solid rgba(215,167,92,0.25)',
    borderRadius: '999px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '0.8rem',
  },
  loginOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(6, 9, 12, 0.72)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    padding: '20px',
  },
  loginDialog: {
    width: '100%',
    maxWidth: '440px',
    background: '#171312',
    border: '1px solid rgba(215,167,92,0.22)',
    borderRadius: '22px',
    padding: '20px',
    boxShadow: '0 24px 50px rgba(0,0,0,0.38)',
  },
  loginDialogHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  closeButton: {
    background: 'transparent',
    color: '#fff',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    lineHeight: 1,
  },
  loginWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0 20px',
  },
  loginCard: {
    background: 'rgba(255,255,255,0.035)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '22px',
    padding: '24px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 18px 40px rgba(0,0,0,0.25)',
  },
  loginCardInline: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '16px',
    padding: '18px',
  },
  loginTitle: { margin: '0 0 10px', fontSize: '1.7rem' },
  loginText: { margin: '0 0 18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 },
  fieldLabel: { display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '16px', color: '#f7f0e7', fontSize: '0.82rem' },
  input: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    color: '#fff',
    padding: '10px 12px',
    fontSize: '0.95rem',
  },
  loginActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '10px',
    flexWrap: 'wrap',
  },
  cancelButton: {
    background: 'transparent',
    color: '#f7f0e7',
    border: '1px solid rgba(255,255,255,0.16)',
    borderRadius: '10px',
    padding: '10px 14px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  errorText: {
    color: '#ffb3b3',
    marginBottom: '14px',
    fontSize: '0.8rem',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '40px 0',
    alignItems: 'center',
  },
  eyebrow: {
    fontSize: '0.7rem',
    letterSpacing: '2px',
    color: '#d7a75c',
    background: 'rgba(215,167,92,0.1)',
    padding: '6px 12px',
    borderRadius: '20px',
  },
  heading: { fontSize: '2.8rem', margin: '16px 0', lineHeight: '1.1' },
  subhead: { color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '0.95rem' },
  primaryBtn: {
    background: 'linear-gradient(135deg, #d7a75c, #a96d2d)',
    border: 'none',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  ghostBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  heroVisual: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '20px',
  },
  heroVisualCard: {
    background: '#1a1410',
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid rgba(255,255,255,0.05)',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  heroVisualHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroVisualPlate: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '140px',
  },
  heroVisualDish: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 35% 30%, #f4d9a0 0%, #d7a75c 28%, #8b5e2a 60%, #3f2613 100%)',
    boxShadow: '0 18px 30px rgba(215,167,92,0.35)',
    border: '8px solid rgba(255,255,255,0.14)',
  },
  miniPill: {
    background: 'rgba(255,255,255,0.08)',
    padding: '2px 8px',
    borderRadius: '10px',
    fontSize: '0.65rem',
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  sectionCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '18px',
  },
  sectionHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    marginBottom: '12px',
  },
  countBadge: {
    background: 'rgba(215,167,92,0.15)',
    color: '#d7a75c',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '0.65rem',
  },
  menuItem: {
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  itemRow: { display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', alignItems: 'baseline' },
  itemDescription: {
    marginTop: '8px',
    color: 'rgba(255,255,255,0.72)',
    fontSize: '0.74rem',
    lineHeight: '1.55',
  },
  itemMeta: { fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' },
};
