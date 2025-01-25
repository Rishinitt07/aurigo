import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Sample Data: Item Category, Starting Bid, Time Left, Bid Increment, Number of Competitors, Winning Bid
data = {
    'Item Category': ['Electronics', 'Furniture', 'Jewelry', 'Electronics', 'Furniture'],
    'Starting Bid': [100, 50, 200, 120, 60],
    'Time Left': [30, 60, 10, 20, 50],
    'Bid Increment': [5, 2, 10, 5, 3],
    'Number of Competitors': [5, 3, 8, 7, 3],
    'Winning Bid': [145, 62, 250, 170, 65]
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Convert 'Item Category' to numerical value using one-hot encoding
df = pd.get_dummies(df, columns=['Item Category'], drop_first=True)

# Define features and target
X = df.drop(columns=['Winning Bid'])
y = df['Winning Bid']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
print(f'Mean Squared Error: {mean_squared_error(y_test, y_pred)}')
print(f'R-squared: {r2_score(y_test, y_pred)}')

# Predict a new bid
new_auction = pd.DataFrame({
    'Starting Bid': [150],
    'Time Left': [25],
    'Bid Increment': [8],
    'Number of Competitors': [4],
    'Item Category_Electronics': [1],
    'Item Category_Furniture': [0]
})

predicted_bid = model.predict(new_auction)
print(f'Predicted Winning Bid: ${predicted_bid[0]:.2f}')
