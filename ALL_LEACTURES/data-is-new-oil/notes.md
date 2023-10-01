# Higher order component : - it is a function that takes a component as an input enhances(modifies, twiks) it & returns the component.

# props drilling: - when we are passing the props in a sequesnce from top to bottom hirarchy then it is called parops drilling

# compA ==> CompB ===> compC ===> compD ===> compE
# from the above graph we can see that we are passing props from top to bottom (parent to child to child to chiild and so on)
# what if compE needs the props which is coming from compA but compB, compC, compD doesn't need that props so sending the props
#  compA to compE through compB, compC, compD is not efficient to solve this problem we have something called useContext in react

# useContext is a global state and from there we can share the data is the whole application.

# React has one way data flow from top to bottom so to share data throughout the app we use useContext.

# useContext will not be used everywhere whenever we see that is data is going to be used at more than 2 or 3 places, 
# then it should be used it is kind of shared data from one place which can be used everywhere whereever it is required in our app.
