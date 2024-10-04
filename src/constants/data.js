import exercise1 from "../assets/exercise1.jpg";
import exercise2 from "../assets/exercise2.jpg";
import exercise3 from "../assets/exercise3.jpg";
import exercise4 from "../assets/exercise4.jpg";
import exercise5 from "../assets/exercise5.jpg";
import exercise6 from "../assets/exercise6.jpg";
import exercise7 from "../assets/exercise7.jpg";
import exercise8 from "../assets/exercise8.jpg";
import exercise9 from "../assets/exercise9.jpg";
import exercise10 from "../assets/exercise10.jpg";
import exercise11 from "../assets/exercise11.jpg";
import exercise12 from "../assets/exercise12.jpg";
import exercise13 from "../assets/exercise13.jpg";
import exercise14 from "../assets/exercise14.jpg";
import exercise15 from "../assets/exercise15.jpg";
import exercise16 from "../assets/exercise16.jpg";

import recipe1 from "../assets/recipe1.jpg";
import recipe2 from "../assets/recipe2.jpg";
import recipe3 from "../assets/recipe3.jpg";
import recipe4 from "../assets/recipe4.jpg";
import recipe5 from "../assets/recipe5.jpg";
import recipe6 from "../assets/recipe6.jpg";
import recipe7 from "../assets/recipe7.jpg";
import recipe8 from "../assets/recipe8.jpg";
import recipe9 from "../assets/recipe9.jpg";
import recipe10 from "../assets/recipe10.jpg";
import recipe11 from "../assets/recipe11.jpg";
import recipe12 from "../assets/recipe12.jpg";
import recipe13 from "../assets/recipe13.jpg";
import recipe14 from "../assets/recipe14.jpg";
import recipe15 from "../assets/recipe15.jpg";
import recipe16 from "../assets/recipe16.jpg";

import review1 from "../assets/review1.jpg"
import review2 from "../assets/review2.jpg"
import review3 from "../assets/review3.jpg"

const exercises = [
    {
        id: "1",
        title: "Biceps Curl",
        desc: "Stand with your feet shoulder-width apart, holding a barbell with an underhand grip. Keep your elbows close to your torso. Slowly curl the barbell up to shoulder level while contracting your biceps, then lower it back down with control. Exhale as you lift, and inhale as you lower. Focus on keeping your upper arms stationary and avoid using momentum.",
        target: "Biceps",
        equipment: "Barbell",
        image: exercise1
    },
    {
        id: "2",
        title: "Cable Seated Row",
        desc: "Sit on the bench of a cable row machine, with your feet securely placed on the footrests and knees slightly bent. Grab the cable handles with an overhand grip, keeping your back straight. Pull the handles towards your torso, squeezing your shoulder blades together. Slowly return to the starting position, fully extending your arms. Exhale as you pull, and inhale as you release.",
        target: "Upper back, middle back, and arms",
        equipment: "Cable row machine",
        image: exercise2
    },
    {
        id: "3",
        title: "Deadlift",
        desc: "Stand with your feet hip-width apart, barbell on the floor in front of you. Bend at your hips and knees to grip the bar with an overhand grip. Keep your back straight, chest up, and shoulders back. Lift the bar by straightening your hips and knees, keeping it close to your body. Stand up straight at the top, then lower the bar back to the floor with control. Exhale as you lift, and inhale as you lower.",
        target: "Legs, glutes, and lower back",
        equipment: "Barbell.",
        image: exercise3
    },
    {
        id: "4",
        title: "Pull-Ups",
        desc: "Grab a pull-up bar with an overhand grip, hands slightly wider than shoulder-width. Hang with your arms fully extended and your body straight. Pull yourself up until your chin is above the bar, focusing on engaging your back muscles. Lower yourself back down with control. Exhale as you pull up, and inhale as you lower down.",
        target: "Back, arms, and shoulders",
        equipment: "Pull-up bar.",
        image: exercise4
    },
    {
        id: "5",
        title: "Squat",
        desc: "Stand with your feet shoulder-width apart, barbell resting on your upper back. Keep your chest up and core tight. Lower your body by bending your knees and hips, keeping your back straight. Go down until your thighs are parallel to the floor, then push through your heels to return to the starting position. Exhale as you rise, and inhale as you lower.",
        target: "Legs, glutes",
        equipment: "Barbell",
        image: exercise5
    },
    {
        id: "6",
        title: "Leg Press",
        desc: "Sit on the leg press machine with your feet placed shoulder-width apart on the platform. Push the platform up to extend your legs without locking your knees. Slowly lower the platform by bending your knees towards your chest, then push it back to the starting position. Exhale as you push, and inhale as you lower.",
        target: "Legs, glutes",
        equipment: "Leg press machine",
        image: exercise6
    },
    {
        id: "7",
        title: "Cable Pull-Down",
        desc: "Sit at a cable pull-down machine with your knees secured under the pad. Grab the bar with a wide overhand grip. Pull the bar down towards your upper chest, squeezing your shoulder blades together. Slowly return the bar to the starting position with control. Exhale as you pull down, and inhale as you release.",
        target: "Back, arms",
        equipment: "Cable pull-down machine",
        image: exercise7
    },
    {
        id: "8",
        title: "Cable Biceps Curl",
        desc: "Stand with your feet shoulder-width apart, holding the cable handle with an underhand grip. Keep your elbows close to your torso. Slowly curl the handle up towards your shoulder while contracting your biceps, then lower it back down with control. Exhale as you lift, and inhale as you lower. Focus on keeping your upper arms stationary.",
        target: "Biceps",
        equipment: "Cable machine",
        image: exercise8
    },
    {
        id: "9",
        title: "Lateral Raise",
        desc: "Stand with your feet shoulder-width apart, holding a dumbbell in each hand by your sides. With a slight bend in your elbows, lift the dumbbells out to the sides until they are at shoulder level. Slowly lower the dumbbells back to the starting position. Exhale as you lift, and inhale as you lower. Keep your core tight and avoid swinging your body.",
        target: "Shoulders (deltoids)",
        equipment: "Dumbbells",
        image: exercise9
    },
    {
        id: "10",
        title: "Bench Press",
        desc: "Lie back on a flat bench with a barbell positioned above your chest. Grip the barbell slightly wider than shoulder-width apart. Lower the barbell slowly to your chest, keeping your elbows at about a 75-degree angle from your body. Push the barbell back up to the starting position, fully extending your arms. Exhale as you push, and inhale as you lower.",
        target: "Chest, shoulders, triceps",
        equipment: "Barbell",
        image: exercise10
    },
    {
        id: "11",
        title: "Incline Dumbbell Press",
        desc: "Lie back on an inclined bench set at a 30-45 degree angle, holding a dumbbell in each hand above your chest. Lower the dumbbells slowly until your elbows are at a 90-degree angle. Push the dumbbells back up to the starting position, fully extending your arms. Exhale as you press up, and inhale as you lower.",
        target: "Upper chest, shoulders, triceps",
        equipment: "Dumbbells, incline bench",
        image: exercise11
    },
    {
        id: "12",
        title: "Dumbbell Biceps Curl:",
        desc: "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with palms facing forward. Keep your elbows close to your torso. Slowly curl the dumbbells up to shoulder level while contracting your biceps, then lower them back down with control. Exhale as you lift, and inhale as you lower. Focus on keeping your upper arms stationary.",
        target: "Biceps",
        equipment: "Dumbbells",
        image: exercise12
    },
    {
        id: "13",
        title: "Dips",
        desc: "Grab the parallel bars with your palms facing inward and your arms fully extended. Lift your body off the ground by straightening your arms. Lower yourself slowly by bending your elbows until your upper arms are parallel to the ground or slightly below. Push yourself back up to the starting position. Exhale as you push up, and inhale as you lower down.",
        target: "Chest, triceps, shoulders",
        equipment: "Parallel bars",
        image: exercise13
    },
    {
        id: "14",
        title: "Shoulder Press ",
        desc: "Sit or stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height. Press the dumbbells upward until your arms are fully extended above your head. Slowly lower the dumbbells back to shoulder height. Exhale as you press up, and inhale as you lower. Keep your back straight and core engaged.",
        target: "Shoulders (deltoids), triceps",
        equipment: "Dumbbells",
        image: exercise14
    },
    {
        id: "15",
        title: "Push-Ups",
        desc: "Get into a plank position with your hands placed slightly wider than shoulder-width apart. Lower your body towards the ground by bending your elbows until your chest nearly touches the floor. Push yourself back up to the starting position. Exhale as you push up, and inhale as you lower down. Keep your body in a straight line throughout the movement.",
        target: "Chest, triceps, shoulders",
        equipment: "Body Weight",
        image: exercise15
    },
    {
        id: "16",
        title: "Pec Deck Fly",
        desc: "Sit on the pec deck machine with your back firmly against the pad and your feet flat on the ground. Adjust the seat so that the handles are level with your chest. Grab the handles with your elbows slightly bent and press them together in front of you. Slowly return to the starting position. Exhale as you press the handles together, and inhale as you release.",
        target: "Chest (pectorals)",
        equipment: "Pec deck machine",
        image: exercise16
    }
]



const recipes = [
    {
        id: "1",
        title: "Greek Yogurt Parfait",
        ingredients: {
            ing1: "240g greek yogurt",
            ing2: "75g fresh berries",
            ing3: "15g honey",
            ing4: "30g granola"
        },
        instructions: "Layer Greek yogurt with fresh berries and granola in a glass. Drizzle with honey. For added protein, use plain Greek yogurt and top with a spoonful of chia seeds.",
        image: recipe1
    },
    {
        id: "2",
        title: "Quinoa Salad",
        ingredients: {
            ing1: "185g Cooked quinoa",
            ing2: "75g cherry tomatoes",
            ing3: "75g cucumber",
            ing4: "30g feta cheese",
            ing5: "olive oil",
            ing6: "lemon juice",
            ing7: "75g cooked chicken breast"
        },
        instructions: "Mix cooked quinoa with chopped vegetables, feta, and diced chicken. Dress with olive oil and lemon juice. For extra protein, add chickpeas or grilled tofu.",
        image: recipe2
    },
    {
        id: "3",
        title: "Veggie Stir-Fry with Tofu",
        ingredients: {
            ing1: "250g mixed vegetables",
            ing2: "150g cubed firm tofu",
            ing3: "soy sauce",
            ing4: "olive oil"
        },
        instructions: "Heat olive oil in a pan. Add tofu and cook until golden. Add vegetables and stir-fry until tender. Add soy sauce and toss to combine.",
        image: recipe3
    },
    {
        id: "4",
        title: "Baked Salmon",
        ingredients: {
            ing1: "salmon fillets",
            ing2: "sliced lemon",
            ing3: "2 gloves minced garlic",
            ing4: "olive oil"
        },
        instructions: "Preheat oven to 190°C (375°F). Place salmon on a baking sheet, drizzle with olive oil, and top with garlic and lemon slices. Bake for 15-20 minutes until salmon flakes easily with a fork.",
        image: recipe4
    },
    {
        id: "5",
        title: "Lentil Soup",
        ingredients: {
            ing1: "200g lentils",
            ing2: "75g carrots",
            ing3: "75g celery",
            ing4: "75g onions",
            ing5: "950ml vegetable broth",
            ing6: "cumin",
            ing7: "coriander"
        },
        instructions: "Sauté onions, carrots, and celery in a pot. Add lentils, broth, and spices. Simmer for 30 minutes or until lentils are tender. For extra protein, add diced chicken or turkey.",
        image: recipe5
    },
    {
        id: "6",
        title: "Avocado Toast with Egg",
        ingredients: {
            ing1: "1 slice whole-grain bread",
            ing2: "1/2 ripe avocado",
            ing3: "1 egg",
            ing4: "lemon juice",
            ing5: "salt",
            ing6: "pepper"
        },
        instructions: "Toast bread, mash avocado with lemon juice, salt, and pepper. Spread avocado on toast. Top with a poached or fried egg for added protein.",
        image: recipe6
    },
    {
        id: "7",
        title: "Smoothie Bowl",
        ingredients: {
            ing1: "150g frozen berries",
            ing2: "120g greek yogurt",
            ing3: "1 banana",
            ing4: "15g honey",
            ing5: "nuts, seeds"
        },
        instructions: "Blend berries, banana, and yogurt until smooth. Pour into a bowl and top with nuts, seeds, and a drizzle of honey.",
        image: recipe7
    },
    {
        id: "8",
        title: "Turkey wrap",
        ingredients: {
            ing1: "200g ground turkey",
            ing3: "1 whole-grain wrap",
            ing2: "vegetables",
            ing3: "soy sauce",
            ing4: "2 gloves minced garlic",
            ing5: "ginger"
        },
        instructions: "Cook ground turkey with garlic and ginger until browned. Stir in soy sauce. Serve in wraps.",
        image: recipe8
    },
    {
        id: "9",
        title: "Sweet Potato Fries",
        ingredients: {
            ing1: "2 sweet potatoes",
            ing2: "olive oil",
            ing3: "paprika",
            ing4: "salt",
            ing5: "pepper"
        },
        instructions: "Cut sweet potatoes into fries, toss with olive oil and spices. Spread on a baking sheet. Bake at 200°C (400°F) for 20-25 minutes, flipping halfway through.",
        image: recipe9
    },
    {
        id: "10",
        title: "Chia Seed Pudding",
        ingredients: {
            ing1: "240ml almond milk",
            ing2: "30g chia seeds",
            ing3: "15g honey",
            ing4: "vanilla extract"
        },
        instructions: "Mix chia seeds with almond milk, vanilla, and honey. Refrigerate for at least 4 hours or overnight, stirring occasionally.",
        image: recipe10
    },
    {
        id: "11",
        title: "Hummus and Veggies",
        ingredients: {
            ing1: "120g hummus",
            ing2: "assorted vegetables (carrots, cucumbers, bell peppers)"

        },
        instructions: "Serve hummus with sliced vegetables for dipping. For added protein, use homemade hummus with extra chickpeas.",
        image: recipe11
    },
    {
        id: "12",
        title: "Oatmeal with Protein",
        ingredients: {
            ing1: "40g rolled oats",
            ing2: "240ml almond milk",
            ing3: "fresh fruit",
            ing4: "15g honey",
            ing5: "30g protein powder"
        },
        instructions: "Cook oats in almond milk. Stir in protein powder and top with fresh fruit and a drizzle of honey.",
        image: recipe12
    },
    {
        id: "13",
        title: "Black Bean Tacos",
        ingredients: {
            ing1: "1 can, drained black beans",
            ing2: "4 corn tortillas",
            ing3: "1 sliced avocado",
            ing4: "120g salsa"
        },
        instructions: "Heat black beans and serve in tortillas with avocado and salsa. For extra protein, add cooked chicken or tofu.",
        image: recipe13
    },
    {
        id: "14",
        title: "Chickpea and Spinach Curry",
        ingredients: {
            ing1: "1 can drained chickpeas",
            ing2: "150g spinach",
            ing3: "75g chopped onion",
            ing4: "2 cloves, minced garlic",
            ing5: "200ml coconut milk",
            ing6: "curry powder",
            ing7: "olive oil"
        },
        instructions: "Sauté onions and garlic in olive oil until softened. Add chickpeas and curry powder, stir for 1-2 minutes. Pour in the coconut milk and simmer for 10 minutes. Stir in spinach until wilted. Serve with quinoa or brown rice for added protein.",
        image: recipe14
    },
    {
        id: "15",
        title: "Baked Turkey Meatballs",
        ingredients: {
            ing1: "450g ground turkey",
            ing2: "30g breadcrumbs",
            ing3: "1 egg",
            ing4: "2 cloves, minced garlic",
            ing5: "30g parmesan cheese",
            ing6: "herbs (parsley, oregano)",
            ing7: "salt",
            ing8: "pepper"
        },
        instructions: "Preheat oven to 200°C (400°F). In a bowl, mix ground turkey, breadcrumbs, egg, garlic, parmesan, and herbs. Form into small meatballs and place on a baking sheet. Bake for 15-20 minutes until cooked through. Serve with a side of roasted vegetables or whole wheat pasta.",
        image: recipe15
    },
    {
        id: "16",
        title: "Peanut Butter Protein Smoothie",
        ingredients: {
            ing1: "30g peanut butter",
            ing2: "30g protein powder",
            ing3: "240ml almond milk",
            ing4: "1 banana",
            ing5: "75g spinach",
            ing6: "10g chia seeds",
            ing7: "ice cubes" 
        },
        instructions: "Blend all ingredients together until smooth. Add extra ice cubes for a thicker texture. This smoothie is high in protein and perfect for post-workout recovery.",
        image: recipe16
    },

]

const reviews = [
    {
        id: "1",
        name: "Emily R.",
        text: "PureMove has completely transformed my fitness routine! The workouts are effective and easy to follow, and the recipes keep me energized throughout the day.",
        image: review1
    },
    {
        id: "2",
        name: "Jason T.",
        text: "I've tried many fitness programs, but PureMove stands out. The variety of exercises and delicious recipes make staying healthy enjoyable.",
        image: review2
    },
    {
        id: "3",
        name: "Sophia M.",
        text: "I love how PureMove combines fitness and nutrition. It's a one-stop solution for anyone serious about their health.",
        image: review3
    },
]

export { exercises, recipes, reviews };